const axios = require('axios');

async function createPastebin(title, content) {
    const data = new URLSearchParams({
        api_dev_key: "lyhp9E4EDS1KgSf4Y25E5e21KY1L548W",
        api_user_key: "173e4dab6b6ad880fe295a9fd961cb5f",
        api_paste_name: title + " by WBK",
        api_paste_code: content,
        api_paste_format: "text",
        api_paste_expire_date: "N",
        api_option: "paste"
    });

    try {
        const response = await axios.post("https://pastebin.com/api/api_post.php", data, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        });

        if (response.data.includes("Bad API request")) {
            throw new Error(`Gagal membuat paste: ${response.data}`);
        }

        const result = response.data;
        const rawUrl = result.replace(/^(https:\/\/pastebin\.com\/)([a-zA-Z0-9]+)$/, "$1raw/$2");

        return { status: 0, original: result, raw: rawUrl };
    } catch (error) {
        console.error("Error posting Pastebin:", error);
        return { status: 1, original: null, raw: null };
    }
}

module.exports = { createPastebin };