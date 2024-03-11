const router = require('express').Router;
const userRoute = require('./userRoute.js');
const thoughtRoute = require('./thoughtRoute.js');

router.use('/user', userRoute);
router.use('/thought', thoughtRoute);

module.exports = router;