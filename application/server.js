const express = require("express");
const app = express();


const sendAudio = require('./routes/sendAudio')
app.use('./sendAudio')

app.listen(3000, () => {
    console.log("Server running on port 3000");
});