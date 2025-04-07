const axios = require("axios");
const cheerio = require("cheerio");

async function devianArt(query) {
  try {
    const { data } = await axios.get(`https://www.deviantart.com/search?q=${query}`, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, seperti Gecko) Chrome/120.0.0.0 Safari/537.36",
      }
    });

    const $ = cheerio.load(data);
    const result = [];

    $("a[aria-label][href*='/art/']").each((i, el) => {
      const title = $(el).attr("aria-label");
      const link = $(el).attr("href");
      const fullLink = `${link}`;
      const img = $(el).find("img").attr("src");

      result.push({ title, fullLink, img });
    });

    return result;
  } catch (error) {
    console.error("Error fetching DeviantArt:", error.message);
    return null;
  }
}

module.exports = { devianArt };