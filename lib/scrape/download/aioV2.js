const axios = require("axios");

const anydownloader = async (url) => {
    try {
        const response = await axios.post("https://anydownloader.com/wp-json/aio-dl/video-data/", new URLSearchParams({
            url,
        }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Referer: "https://anydownloader.com/",
                Token: "e286855fb395c3562574fd1da7a97a0e8d4e8801801eaf6f62363d9b6391a963",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36",
            },
        });
        const data = response.data;
        return data;
    } catch (error) {
        console.error("Error fetching TikTok data:", error);
    }
};

module.exports = { anydownloader };