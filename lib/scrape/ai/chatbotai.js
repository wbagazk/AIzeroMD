const axios = require("axios");
const FormData = require("form-data");
const cheerio = require("cheerio");

async function getNonce() {
    try {
        const response = await axios.get("https://chatbotai.one");
        const $ = cheerio.load(response.data);
        const nonce = $(".wpaicg-chat-shortcode").attr("data-nonce");
        return nonce || ""; // Jika tidak ditemukan, kembalikan string kosong
    } catch (error) {
        console.error("❌ Error saat mengambil nonce:", error.message);
        return "";
    }
}

async function chatbotai(ask) {
    try {
        const nonce = await getNonce();
        if (!nonce) {
            return "Maaf, tidak dapat mengambil nonce dari situs web.";
        }

        let d = new FormData();
        d.append("_wpnonce", nonce);
        d.append("post_id", 11);
        d.append("url", "https://chatbotai.one");
        d.append("action", "wpaicg_chat_shortcode_message");
        d.append("message", ask);
        d.append("bot_id", 0);

        let headers = {
            headers: {
                ...d.getHeaders()
            }
        };

        let { data } = await axios.post("https://chatbotai.one/wp-admin/admin-ajax.php", d, headers);
        return data;
    } catch (error) {
        console.error("❌ Error saat menghubungi Chatbot AI:", error.message);
        return "Maaf, terjadi kesalahan saat menghubungi Chatbot AI.";
    }
}

module.exports = { chatbotai };
