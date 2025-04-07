const axios = require('axios');

// Fungsi untuk mengunduh video dari Twitter menggunakan beberapa API
async function twitterdl(link) {
    const apis = [
        `https://api.agatz.xyz/api/twitter?url=${encodeURIComponent(link)}`,
        `https://api.siputzx.my.id/api/d/twitter?url=${encodeURIComponent(link)}`,
        `https://vapis.my.id/api/twitter?url=${encodeURIComponent(link)}`,
        `https://api.zpi.my.id/v1/download/twitter?url=${encodeURIComponent(link)}`
    ];

    for (const api of apis) {
        try {
            const response = await axios.get(api);
            const data = response.data;

            // Cek apakah respons dari API menunjukkan status sukses
            if (data.status === 200 || data.status === true) {
                return {
                    status: 200,
                    creator: "WBK",
                    data: {
                        description: data.data.desc || data.data.videoDescription || data.data.description || null,
                        thumb: data.data.thumb || data.data.imgUrl || null,
                        video_sd: data.data.video_sd || null,
                        video_hd: data.data.video_hd || data.data.downloadLink || null,
                        audio: data.data.audio || null,
                    }
                };
            }
        } catch (error) {
            console.error(`Error fetching from API: ${api}`, error.message);
        }
    }

    return { status: 500, creator: "WBK", msg: "Unable to fetch video. Please check the link or try again later." };
}

module.exports = { twitterdl };