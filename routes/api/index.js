const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const imageRoutes = require('./imageRoutes');
const userPropRoutes = require('./userPropRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/users', userRoutes);
router.use('/prop', userPropRoutes);
router.use('/reviews', reviewRoutes);
// router.use('/images', imageRoutes);

module.exports = router;