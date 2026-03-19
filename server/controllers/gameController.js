const Game = require('../models/Game');
const slugify = require('slugify');

// GET /api/games?page=1&limit=20&tag=tag-slug
exports.getGames = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;
    const { tag } = req.query;

    let query = { isActive: true };
    if (tag) {
      const Tag = require('../models/Tag');
      const tagDoc = await Tag.findOne({ slug: tag });
      if (tagDoc) {
        query.tags = tagDoc._id;
      }
    }

    const [games, total] = await Promise.all([
      Game.find(query)
        .populate('tags', 'name slug')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Game.countDocuments(query)
    ]);

    res.json({
      success: true,
      data: games,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/games/top
exports.getTopGames = async (req, res, next) => {
  try {
    const games = await Game.find({ isActive: true, isTop: true })
      .select('title slug thumbnail')
      .limit(6)
      .lean();
    res.json({ success: true, data: games });
  } catch (err) {
    next(err);
  }
};

// GET /api/games/recent
exports.getRecentGames = async (req, res, next) => {
  try {
    const games = await Game.find({ isActive: true })
      .select('title slug thumbnail')
      .sort({ createdAt: -1 })
      .limit(6)
      .lean();
    res.json({ success: true, data: games });
  } catch (err) {
    next(err);
  }
};

// GET /api/games/search?q=keyword
exports.searchGames = async (req, res, next) => {
  try {
    const { q } = req.query;
    if (!q) return res.json({ success: true, data: [] });

    const games = await Game.find({
      isActive: true,
      title: { $regex: q, $options: 'i' }
    })
      .select('title slug thumbnail')
      .limit(10)
      .lean();

    res.json({ success: true, data: games });
  } catch (err) {
    next(err);
  }
};

// GET /api/games/:slug
exports.getGameBySlug = async (req, res, next) => {
  try {
    const game = await Game.findOne({
      slug: req.params.slug,
      isActive: true
    }).populate('tags', 'name slug');

    if (!game) {
      return res.status(404).json({ success: false, message: 'Game not found' });
    }

    res.json({ success: true, data: game });
  } catch (err) {
    next(err);
  }
};

// PATCH /api/games/:id/play
exports.incrementPlayCount = async (req, res, next) => {
  try {
    await Game.findByIdAndUpdate(req.params.id, { $inc: { playCount: 1 } });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};
