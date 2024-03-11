const router = require('express').Router;
const userRoute = require('./userRoute.js');
// const thoughtRoute = require('./thoughtRoute.js');

router.use('/user', userRoute);

module.exports = router;