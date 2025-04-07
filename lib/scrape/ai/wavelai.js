const axios = require('axios');
const fs = require('fs');
const { join } = require('path');

const voices = {
  male: [
    { name: "Bradley Marshall", id: "waveltts_3786e470-7129-4f01-a263-0801b302acf1" },
    { name: "Rowan Flynn", id: "waveltts_7a16488d-eba0-4fa3-876a-97fbd57551ca" },
    { name: "Atlas", id: "waveltts_f5066419-beae-43c6-bf67-d8ad0cec52a5" }
  ],
  female: [
    { name: "Calista", id: "waveltts_aaf98444-e4e9-4bd6-9921-b307bbd2689e" },
    { name: "Serene Loh", id: "waveltts_297d3749-2394-4396-8324-e6fdb26846f0" },
    { name: "Sofía Mariposa", id: "waveltts_e51e20fb-4e89-41a0-9fbe-0f22f73c9557" }
  ]
};

const languages = ["ml-IN", "en-US", "es-ES", "ja-JP", "id-ID", "ko-KR", "ru-RU"];

async function wavelai(prompt, lang, voiceName) {
  try {
    if (prompt.length > 500) throw new Error("Teks terlalu panjang. Maksimal 500 karakter.");
    if (!languages.includes(lang)) throw new Error(`Bahasa tidak valid. Pilih dari: ${languages.join(", ")}`);

    const allVoices = [...voices.male, ...voices.female];
    const voice = allVoices.find(v => v.name.toLowerCase() === voiceName.toLowerCase());
    if (!voice) throw new Error(`Suara tidak ditemukan. Pilih dari: ${allVoices.map(v => v.name).join(", ")}`);

    const url = 'https://wavel.ai/wp-json/custom/v1/synthesize-audio';
    const headers = {
      'accept': '/',
      'accept-language': 'id;q=0.5',
      'content-type': 'application/x-www-form-urlencoded',
      'origin': 'https://wavel.ai',
      'referer': 'https://wavel.ai/solutions/text-to-speech/anime-text-to-speech',
      'user-agent': 'Mozilla/5.0'
    };

    const data = new URLSearchParams({ lang, text: prompt, voiceId: voice.id }).toString();
    const response = await axios.post(url, data, { headers, responseType: 'json' });

    const base64 = response.data.base64Audio.split(';base64,')[1];
    return { status: response.status, output: Buffer.from(base64, 'base64') };
  } catch (error) {
    return { status: error.response?.status || 500, error: error.message };
  }
}

module.exports = { wavelai };