const axios = require('axios');

async function spotifydl(url) {
    try {
        const hai = await axios.get(`https://api.fabdl.com/spotify/get?url=${encodeURIComponent(url)}`);
        const hao = await axios.get(`https://api.fabdl.com/spotify/mp3-convert-task/${hai.data.result.gid}/${hai.data.result.id}`);
        
        return {
            title: hai.data.result.name,
            download: `https://api.fabdl.com${hao.data.result.download_url}`,
            image: hai.data.result.image,
            duration_ms: hai.data.result.duration_ms
        };
    } catch (err) {
        console.error('Error downloading Spotify track:', err);
        throw new Error('Could not download track');
    }
}

module.exports = { spotifydl };