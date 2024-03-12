const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.json({"Routes: ": ["sendAudio"]})
    } catch (error) {
        res.status(500).json(error.toString());
    }
});

module.exports = router;