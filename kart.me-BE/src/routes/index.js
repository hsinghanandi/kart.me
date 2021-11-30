const router = require('express').Router({ mergeParams: true });

const cartRouter = require('./cartRouter');

router.use('/user/cart', cartRouter);

module.exports = router;
