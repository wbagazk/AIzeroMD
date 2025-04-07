const axios = require('axios');
const cheerio = require('cheerio');

async function islamicnews() {
  try {
    const { data } = await axios.get("https://islami.co/artikel-terkini/");
    const $ = cheerio.load(data);
    const articles = [];

    $("article").each((index, element) => {
      const summary = $(element).find(".meta-top").text().trim();
      const title = $(element).find(".entry-title a").text().trim();
      const link = $(element).find(".entry-title a").attr("href");

      articles.push({ summary, title, link });
    });

    return articles;
  } catch (error) {
    console.error("Error scraping data:", error);
    throw new Error("Gagal mengambil berita terbaru.");
  }
}

async function islamicsearch(query) {
  try {
    const url = `https://islami.co/?s=${encodeURIComponent(query)}`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const results = [];

    const count = $(".counter strong").text().trim();
    const summary = `Hasil ditemukan: ${count} artikel`;

    $(".content-excerpt").each((_, el) => {
      const title = $(el).find(".entry-title a").text().trim();
      const link = $(el).find(".entry-title a").attr("href");
      const category = $(el).find(".meta-top .post-term a").text().trim();
      const author = $(el).find(".meta-bottom .post-author a").text().trim();
      const date = $(el).find(".meta-bottom .post-date").text().trim();
      const image = $(el).find("picture img").attr("src") || $(el).find("picture img").attr("data-src");

      results.push({ title, link, category, author, date, image });
    });

    return { summary, results };
  } catch (error) {
    console.error("Error:", error.message);
    throw new Error("Gagal mencari berita berdasarkan query.");
  }
}

async function islamicdetail(url) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        // Mengambil informasi yang relevan dari halaman
        const title = $('h1.entry-title').text().trim();
        const author = $('.post-author a').text().trim();
        const date = $('.post-date').text().trim();
        const content = $('.entry-content p').map((i, el) => $(el).text().trim()).get().join('\n\n'); // Mengambil konten sebagai teks dan memisahkan paragraf
        const image = $('.entry-media img').attr('src'); // Mengambil URL gambar

        // Mengembalikan informasi dalam format JSON
        return {
            title,
            author,
            date,
            content,
            image,
            link: url
        };
    } catch (error) {
        console.error('Error fetching Islamic detail:', error);
        throw new Error('Could not fetch Islamic detail');
    }
}

module.exports = { islamicnews, islamicsearch, islamicdetail };