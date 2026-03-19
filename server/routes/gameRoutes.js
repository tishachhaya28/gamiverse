const express = require('express');
const router = express.Router();
const {
  getGames,
  getTopGames,
  getRecentGames,
  searchGames,
  getGameBySlug,
  incrementPlayCount
} = require('../controllers/gameController');

router.get('/',        getGames);
router.get('/top',     getTopGames);
router.get('/recent',  getRecentGames);
router.get('/search',  searchGames);
router.get('/:slug',   getGameBySlug);
router.patch('/:id/play', incrementPlayCount);

module.exports = router;
