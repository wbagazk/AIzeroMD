const axios = require("axios");

async function aiimagegenerator(prompt, width = 512, height = 512) {
    try {
        if (!prompt) throw new Error("Prompt tidak boleh kosong!");

        const response = await axios.post("https://aiimagegenerator.io/api/model/predict-peach", {
            prompt,
            key: "Anime",
            width,
            height,
            quantity: 1,
            size: `${width}x${height}`,
            nsfw: true
        });

        const data = response.data;
        if (data.code !== 0) throw new Error(data.message || "Gagal memproses permintaan!");
        if (!data.data?.url) throw new Error("Gagal mendapatkan URL gambar!");

        return {
            status: true,
            image: data.data.url
        };
    } catch (error) {
        return {
            status: false,
            message: error.message
        };
    }
}

module.exports = { aiimagegenerator };