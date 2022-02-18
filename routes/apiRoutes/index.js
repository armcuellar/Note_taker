const router = require("express").Router();
const notesRoutes = require('../apiRoutes/notesRoutes');

// router.use(require('./zookeeperRoutes'));

router.use(notesRoutes);

module.exports = router;