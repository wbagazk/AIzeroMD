const axios = require('axios');
const https = require('https');
const cheerio = require('cheerio');

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

async function geniusLyrics(query) {
    try {
        const searchResponse = await axios.get(`https://vapis.my.id/api/googlev1?q=site:genius.com lirik ${encodeURIComponent(query)}`);
        if (!searchResponse.data.status || !searchResponse.data.data.length) {
            throw new Error("Lirik tidak ditemukan.");
        }

        const lyricUrl = searchResponse.data.data[0].link;

        const res = await axios.get(lyricUrl, {
            httpsAgent,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Connection': 'keep-alive',
                'Cache-Control': 'no-cache',
            }
        });

        const $ = cheerio.load(res.data);
        let lyrics = $('div[data-lyrics-container="true"]').map((i, el) => $(el).html().replace(/<br>/g, "\n").replace(/<[^>]+>/g, "")).get().join("\n").trim();
        let thumbnail = $('img').map((i, el) => $(el).attr('src')).get().find(src => src && src.startsWith('https://t2.genius.com/unsafe/140x140/') && src.endsWith('.jpg')) || "";
        if (!lyrics) {
            throw new Error("Lirik tidak ditemukan atau gagal diambil.");
        }
        return {
            status: true,
            title: searchResponse.data.data[0].title,
            url: lyricUrl,
            lyrics,
            thumbnail
        };
    } catch (error) {
        return {
            status: false,
            message: error.message
        };
    }
}

module.exports = { geniusLyrics };