const fetch = require("node-fetch");

const API_KEY = global.apikey.openaiapi;

async function openai(content) {
    try {
        if (!API_KEY) {
            throw new Error("API Key tidak ditemukan! Pastikan sudah diatur.");
        }
        const url = "https://api.openai.com/v1/chat/completions";
        const body = {
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: content }],
            temperature: 0.7
        };
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error(`Gagal mendapatkan respons: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if (!data.choices || data.choices.length === 0) {
            throw new Error("Tidak ada data yang dikembalikan dari OpenAI API");
        }
        return data.choices[0].message.content;
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
        return "Terjadi kesalahan dalam memproses permintaan.";
    }
}

module.exports = { openai };
