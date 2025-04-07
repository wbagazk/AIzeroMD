const axios = require('axios');

function getTodayDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const dayOfWeek = today.toLocaleDateString("id-ID", { weekday: "long" });

    return `Hari ini adalah ${dayOfWeek}, ${day}/${month}/${year}.`;
}

function getCurrentTime() {
    const date = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
    );
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    
    return `${hours}:${minutes}`;
}

async function chateverywhere(text, m) {
    try {
        const userName = m.pushName || "Pengguna"; 
        let logic = `Nama kamu adalah Chat GPT. Kamu adalah asisten AI yang ramah dan informatif. Jawablah semua pertanyaan dalam bahasa Indonesia dengan jelas dan sopan.`;

        const response = await axios.post("https://chateverywhere.app/api/chat/", {
            model: {
                id: "gpt-3.5-turbo",
                name: "GPT-3.5",
                maxLength: 12000,
                tokenLimit: 4000
            },
            messages: [{
                pluginId: null,
                content: text,
                role: "user"
            }],
            prompt: logic,
            temperature: 0.5
        }, { 
            headers: {
                "Accept": "*/*",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
            }
        });

        return response.data;
    } catch (error) {
        console.error("❌ Gagal memproses permintaan OpenAI:", error.message);
        return { error: "Gagal mendapatkan respons dari OpenAI." };
    }
}

module.exports = { chateverywhere };