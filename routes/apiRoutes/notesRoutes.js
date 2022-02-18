const router = require('express').Router();
const { notes } = require('../../db/db.json');

// parse incoming string or array data
router.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
router.use(express.json());


router.get('/api/notes', (req, res) => {
    res.json(notes);
});

router.post('/api/notes', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

module.exports = router;