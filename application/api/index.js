const axios = require("axios")

const speech_to_asl_api = () => {
    async function sendAudio (audio) {
        const options = {
            method: 'get', // get url to send audio and receive transcript
            url: `https://speechtoaslapi-production.up.railway.app/`
        }

        try {
            const results = await axios.request(options);
            
            return results.data
            
        } catch(error) {
            console.error(error)
        }
    };

    return {
        sendAudio
    }
}

module.exports = speech_to_asl_api();