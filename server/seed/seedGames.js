const mongoose = require('mongoose');
const axios = require('axios');
const slugify = require('slugify');
require('dotenv').config({ path: './.env' });

const Game = require('../models/Game');
const Tag = require('../models/Tag');

const GD_API_URL = 'https://catalog.api.gamedistribution.com/api/v2.0/rss/All/?collection=all&categories=all&subType=all&type=all&mobile=all&rewarded=all&amount=100&page=0&orderBy=Newest&publisherGroup=all&format=json';

async function seed() {
  try {
    console.log('🔗 Connecting to MongoDB...');
    if (process.env.MONGODB_URI.includes('admin:admin@cluster0')) {
      console.log('⚠️  Placeholder MongoDB URI detected. Skipping DB connection for dry run.');
    } else {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('✅ Connected to MongoDB');
    }

    // 1. Fetch data from GameDistribution
    console.log('📥 Fetching games from GameDistribution API...');
    const response = await axios.get(GD_API_URL);
    const gdGames = response.data;
    console.log(`📦 Received ${gdGames.length} games`);

    // 2. Clear existing data (Optional, but good for fresh seed)
    if (!process.env.MONGODB_URI.includes('admin:admin@cluster0')) {
      await Game.deleteMany({});
      await Tag.deleteMany({});
      console.log('🗑️ Cleared existing games and tags');
    }

    // 3. Process Tags
    const allTagNames = new Set();
    gdGames.forEach(g => {
      if (g.Category) g.Category.forEach(c => allTagNames.add(c));
      if (g.Tag) g.Tag.forEach(t => allTagNames.add(t));
    });

    console.log(`📌 Creating ${allTagNames.size} tags...`);
    let tagMap = {};
    if (!process.env.MONGODB_URI.includes('admin:admin@cluster0')) {
      const tagDocs = await Tag.insertMany(
        Array.from(allTagNames).map(name => ({
          name,
          slug: slugify(name, { lower: true, strict: true })
        }))
      );
      tagDocs.forEach(t => tagMap[t.name] = t._id);
    }

    // 4. Transform and Save Games
    console.log('🎮 Transforming games...');
    const games = gdGames.map(g => {
      const mergedTags = [...(g.Category || []), ...(g.Tag || [])];
      return {
        title: g.Title,
        slug: slugify(g.Title, { lower: true, strict: true }) + '-' + g.Md5.substring(0, 5),
        description: g.Description,
        thumbnail: g.Asset && g.Asset.find(a => a.includes('512x512')) || g.Asset[0],
        gameUrl: g.Url,
        source: 'gamedistribution',
        tags: mergedTags.map(t => tagMap[t]).filter(id => id),
        isTop: Math.random() > 0.9, 
        isFeatured: Math.random() > 0.95,
        playCount: Math.floor(Math.random() * 1000)
      };
    });

    if (!process.env.MONGODB_URI.includes('admin:admin@cluster0')) {
      await Game.insertMany(games);
      console.log(`✅ Seeded ${games.length} games successfully!`);
    } else {
      console.log(`📡 Dry run complete. Processed ${games.length} games.`);
    }

    if (!process.env.MONGODB_URI.includes('admin:admin@cluster0')) {
      await mongoose.disconnect();
      console.log('🔌 Disconnected from MongoDB');
    }
  } catch (err) {
    console.error('❌ Seeding error:', err);
    process.exit(1);
  }
}

seed();
