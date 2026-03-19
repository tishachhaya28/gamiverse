const Tag = require('../models/Tag');

exports.getTags = async (req, res, next) => {
  try {
    const tags = await Tag.find().sort({ name: 1 }).lean();
    res.json({ success: true, data: tags });
  } catch (err) {
    next(err);
  }
};
