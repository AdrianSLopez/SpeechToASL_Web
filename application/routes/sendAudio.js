const router = require('express').Router();
const api = require('../api')

router.get('/', async (req, res) => {
    try {
        const response = await api.sendAudio("Users\adria\Desktop\SpeechToASL\data\\84-121123-0000.flac")
        res.json({response})
    } catch (error) {
        res.status(500).json(error.toString());
    }
});

module.exports = router;