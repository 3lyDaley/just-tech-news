// can route back to this index from server.js so we dont have to worry about importing multiple files 
// for different endpoints. 

const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;