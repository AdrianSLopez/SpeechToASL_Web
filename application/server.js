const express = require("express");
const app = express();

const home = require('./routes/home')
app.use('/', home)

const sendAudio = require('./routes/sendAudio')
app.use('/sendAudio', sendAudio)

app.listen(3000, () => {
    console.log("Server running on port 3000");
});