const fetch = require("node-fetch");

async function ai4chatImage(prompt, ratio) {
    try {
        const url = `https://www.ai4chat.co/api/image/generate?prompt=${encodeURIComponent(prompt)}&aspect_ratio=${encodeURIComponent(ratio)}`;
        const response = await fetch(url);

        if (!response.ok) throw new Error(`Gagal mengambil data: ${response.statusText}`);

        return await response.json();
    } catch (error) {
        console.error("❌ Error di ai4chatImage:", error.message);
        throw new Error("Gagal membuat gambar.");
    }
}

module.exports = { ai4chatImage };