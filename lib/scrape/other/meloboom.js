const axios = require('axios');
const cheerio = require('cheerio');

function ringtone(title) {
    return new Promise((resolve, reject) => {
        axios.get(`https://meloboom.com/en/search/${title}`)
        .then(({ data }) => {
            const $ = cheerio.load(data);
            const hasil = [];
            $('ul > li').each((i, elem) => {
                hasil.push({
                    title: $(elem).find('h4').text().trim(),
                    source: 'https://meloboom.com/' + $(elem).find('a').attr('href'),
                    audio: $(elem).find('audio').attr('src')
                });
            });
            resolve(hasil);
        })
        .catch(reject);
    });
}

module.exports = { ringtone };