const router = require('express').Router();
const Review = require('../models/review.model');

//CREATE
router.post('/', async (req, res) => {
  const newReview = new Review(req.body);
  try {
    const savedReview = await newReview.save();
    res.status(200).json(savedReview);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json('Review has been deleted');
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE ALL
router.delete('/', async (req, res) => {
  try {
    await Review.deleteMany();
    res.status(200).json('All reviews has been deleted');
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get('/', async (req, res) => {
  try {
    let Reviews = await Review.find();
    res.status(200).json(Reviews);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
