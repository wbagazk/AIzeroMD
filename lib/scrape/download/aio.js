const axios = require('axios');
const cheerio = require('cheerio');
const FormData = require('form-data');

const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Referer": "https://getindevice.com/facebook-video-downloader/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
};

async function getToken() {
    let { data } = await axios.get('https://getindevice.com/facebook-video-downloader/', { headers });
    const $ = cheerio.load(data);
    return $('input#token').attr('value');
}

async function getindevice(url) {
    let token = await getToken();
    let formData = new FormData();
    formData.append('url', url);
    formData.append('token', token);

    let { data } = await axios.post(
        'https://getindevice.com/wp-json/aio-dl/video-data/',
        formData,
        { headers: { ...formData.getHeaders() } }
    );

    return data;
}

module.exports = { getindevice };