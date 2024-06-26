const router = require('express').Router();
const userRoutes = require('./userRoutes');
const imageRoutes = require('./imageRoutes');
const userPropRoutes = require('./userPropRoutes');
const reviewRoutes = require('./reviewRoutes');
const chatRoutes = require('./chatRoutes');
const searchRoutes = require('./searchRoutes');
const reportRoutes = require('./reportRoutes');
const chatRoomRoutes = require('./chatRoomRoutes');

router.use('/users', userRoutes);
router.use('/prop', userPropRoutes);
router.use('/image', imageRoutes);
router.use('/reviews', reviewRoutes);
router.use('/chat', chatRoutes);
router.use('/searchusers', searchRoutes);
router.use('/report', reportRoutes);
router.use('/chatroom', chatRoomRoutes);

module.exports = router;