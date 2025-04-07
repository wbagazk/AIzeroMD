const axios = require('axios');

const userSessions = {};
const sessionTimeouts = {};

async function yanzgpt(query, sessionId, prompt, model = "yanzgpt-revolution-25b-v3.5") {
    try {
        if (!userSessions[sessionId]) {
            userSessions[sessionId] = [{ role: "system", content: prompt }];
        }
        userSessions[sessionId].push({ role: "user", content: query });

        if (sessionTimeouts[sessionId]) clearTimeout(sessionTimeouts[sessionId]);
        sessionTimeouts[sessionId] = setTimeout(() => {
            delete userSessions[sessionId];
            delete sessionTimeouts[sessionId];
        }, 60 * 60 * 1000);

        const response = await axios.post("https://api.yanzgpt.my.id/v1/chat", {
            messages: userSessions[sessionId],
            model
        }, {
            headers: { 
                authorization: "Bearer yzgpt-sc4tlKsMRdNMecNy", 
                "content-type": "application/json" 
            }
        });

        const reply = response.data.choices?.[0]?.message?.content || "Tidak ada respons.";
        userSessions[sessionId].push({ role: "assistant", content: reply });

        return reply;
    } catch (error) {
        console.error("Error in GPT API:", error.message);
        throw new Error("Gagal terhubung ke GPT API.");
    }
}

module.exports = { yanzgpt };