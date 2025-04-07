const axios = require('axios');
const cheerio = require('cheerio');

function wallpaper(title, page = '1') {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
        .then(({ data }) => {
            const $ = cheerio.load(data);
            const hasil = [];
            $('div.grid-item').each((i, elem) => {
                hasil.push({
                    title: $(elem).find('div.info > a > h3').text().trim(),
                    type: $(elem).find('div.info > a:nth-child(2)').text().trim(),
                    source: 'https://www.besthdwallpaper.com/' + $(elem).find('div > a:nth-child(3)').attr('href'),
                    image: [
                        $(elem).find('picture > img').attr('data-src') || $(elem).find('picture > img').attr('src'),
                        $(elem).find('picture > source:nth-child(1)').attr('srcset'),
                        $(elem).find('picture > source:nth-child(2)').attr('srcset')
                    ]
                });
            });
            resolve(hasil);
        })
        .catch(reject);
    });
}

module.exports = { wallpaper };