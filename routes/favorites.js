const express = require('express');
const router = express.Router();
const FavoriteTank = require('../models/favoritetank');

router.get('/', async (req, res) => {
  const favorites = await FavoriteTank.find();
  res.json(favorites);
});

router.post('/', async (req, res) => {
  try {
    const favorite = new FavoriteTank(req.body);
    await favorite.save();
    res.status(201).json(favorite);
  } catch (err) {
    res.status(400).json({ error: 'Could not save favorite tank.' });
  }
});

router.delete('/:tank_id', async (req, res) => {
  await FavoriteTank.deleteOne({ tank_id: req.params.tank_id });
  res.status(204).end();
});

module.exports = router;