const fs = require("fs");
const FormData = require("form-data");
const axios = require("axios");

class GroqAPI {
  constructor(apiKey = global.apikey.groqapi) {
    if (!apiKey) {
      throw new Error("API key tidak valid. Ambil di https://console.groq.com/keys dan masukkan ke dalam settings.js.");
    }

    this.apiKey = apiKey;
    this.baseUrl = "https://api.groq.com/openai/v1";

    this.models = {
      meta: [
        "llama-3.1-8b-instant",
        "llama-3.2-11b-vision-preview",
        "llama-3.2-1b-preview",
        "llama-3.2-3b-preview",
        "llama-3.2-90b-vision-preview",
        "llama-3.3-70b-specdec",
        "llama-3.3-70b-versatile",
        "llama-guard-3-8b",
        "llama3-70b-8192",
        "llama3-8b-8192",
      ],
      mistral: [
        "mistral-saba-24b",
        "mixtral-8x7b-32768"
      ],
      openai: [
        "whisper-large-v3",
        "whisper-large-v3-turbo"
      ],
      qwen: [
        "qwen-2.5-32b",
        "qwen-2.5-coder-32b"
      ],
      deepseek: [
        "deepseek-r1-distill-qwen-32b",
        "deepseek-r1-distill-llama-70b"
      ],
      google: ["gemma2-9b-it"],
      huggingface: ["distil-whisper-large-v3-en"]
    };
  }

  async chat(messages, options = {}) {
    const {
      model = "llama-3.1-8b-instant",
      temperature = 0.6,
      max_completion_tokens = 4096,
      top_p = 0.95,
      stream = false,
      stop = null,
    } = options;

    const allModels = [
      ...this.models.meta,
      ...this.models.mistral,
      ...this.models.qwen,
      ...this.models.deepseek,
      ...this.models.google,
    ];

    if (!allModels.includes(model)) {
      throw new Error(`Model "${model}" tidak didukung`);
    }

    const res = await fetch(`${this.baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        messages,
        model,
        temperature,
        max_completion_tokens,
        top_p,
        stream,
        stop
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Gagal mengakses API: ${errorText}`);
    }

    return res.json();
  }

  async transcribe(filePath, model = "whisper-large-v3") {
    const transcribeModels = [
      ...this.models.openai,
      ...this.models.huggingface
    ];

    if (!transcribeModels.includes(model)) {
      throw new Error(`Model "${model}" tidak didukung untuk transkripsi`);
    }

    if (!fs.existsSync(filePath)) {
      throw new Error(`File "${filePath}" tidak ditemukan`);
    }

    const buffer = fs.readFileSync(filePath);
    const formData = new FormData();
    
    formData.append("model", model);
    formData.append("file", buffer, "audio.wav");
    formData.append("response_format", "verbose_json");

    try {
      const response = await axios.post(
        `${this.baseUrl}/audio/transcriptions`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
            ...formData.getHeaders(),
          }
        }
      );
      
      return response.data;
    } catch (error) {
      const errorText = error.response?.data 
        ? JSON.stringify(error.response.data) 
        : error.message;
      
      throw new Error(`Gagal mengakses API: ${errorText}`);
    }
  }
}

module.exports = GroqAPI;