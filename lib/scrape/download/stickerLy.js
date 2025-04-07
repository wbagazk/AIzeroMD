const axios = require("axios");
const cheerio = require("cheerio");
const { Sticker } = require("wa-sticker-formatter");

async function stickerLy(urlSticker) {
    try {
        const { data: a } = await axios.get(urlSticker);
        const $ = cheerio.load(a);

        const stickers = [];
        $('#content_images .sticker_img').each((i, el) => {
            stickers.push(($(el).attr('onerror') + "").split("src='")[1].split("';")[0]);
        });

        return stickers;
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports = { stickerLy };