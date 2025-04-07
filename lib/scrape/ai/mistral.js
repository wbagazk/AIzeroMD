const fetch = require("node-fetch");

async function mistral(content) {
    try {
        const apiKey = global.apikey.mistral;
        const url = "https://api.mistral.ai/v1/chat/completions";

        const prompt = "Nama kamu adalah Mistral AI. Kamu adalah asisten AI yang ramah dan informatif. Jawablah semua pertanyaan dalam bahasa Indonesia dengan jelas dan sopan.";

        const body = {
            model: "open-mixtral-8x22b",
            messages: [
                { role: "system", content: prompt },
                { role: "user", content }
            ],
            max_tokens: 1024
        };

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();
        return data.choices?.[0]?.message?.content || "Maaf, saya tidak dapat memberikan jawaban saat ini.";
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
        return "Terjadi kesalahan dalam memproses permintaan.";
    }
}

module.exports = { mistral };