const axios = require("axios");
const cheerio = require("cheerio");

async function RumahMisteri() {
    const random = async () => {
        try {
            let url = "https://rumahmisteri.com/";
            let { data } = await axios.get(url);
            let $ = cheerio.load(data);
            let articles = [];

            $(".archive-grid-post-wrapper article").each((i, el) => {
                let title = $(el).find("h2.entry-title a").text().trim();
                let link = $(el).find("h2.entry-title a").attr("href");
                let image = $(el).find(".post-thumbnail img").attr("src");
                let category = $(el).find(".post-cats-list a").text().trim();
                let date = $(el).find(".posted-on time").attr("datetime");

                if (title && link) {
                    articles.push({ title, link, image, category, date });
                }
            });

            if (articles.length === 0) {
                return "Tidak ada artikel yang ditemukan.";
            }

            let randomArticle = articles[Math.floor(Math.random() * articles.length)];
            return randomArticle;
        } catch (error) {
            return `Terjadi kesalahan: ${error.message}`;
        }
    };

    return { random };
}

async function DetailRumahMisteri(postLink) {
    try {
        const { data } = await axios.get(postLink);
        const $ = cheerio.load(data);
        const title = $('h1.entry-title').text().trim();
        const description = $('meta[name="description"]').attr('content');
        const image = $('meta[property="og:image"]').attr('content');
        const category = $('meta[property="article:section"]').attr('content');
        const date = $('time.entry-date').attr('datetime');
        const author = $('span.author.vcard a').text().trim();
        const content = $('.entry-content').find('p').map((i, el) => {
            return $(el).text().trim();
        }).get().join('\n');

        return {
            title,
            description,
            image,
            category,
            date,
            author,
            content,
            link: postLink
        };
    } catch (error) {
        return `Terjadi kesalahan: ${error.message}`;
    }
}

module.exports = { RumahMisteri, DetailRumahMisteri };