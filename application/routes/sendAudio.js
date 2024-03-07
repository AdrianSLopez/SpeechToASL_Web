const router = require('express').Router();
const api = require('../api')

router.get('/', async (req, res) => {
    try {
        const response = await  api.sendAudio("fake")
    } catch (error) {
        res.status(500).json(error.toString());
    }
});

module.exports = router;