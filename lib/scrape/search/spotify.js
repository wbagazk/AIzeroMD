const axios = require('axios');

async function getAccessToken() {
    try {
        const client_id = 'acc6302297e040aeb6e4ac1fbdfd62c3';
        const client_secret = '0e8439a1280a43aba9a5bc0a16f3f009';
        const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
        
        const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        
        return response.data.access_token;
    } catch (err) {
        console.error('Error getting access token:', err);
        throw new Error('Could not get access token');
    }
}

async function spotifySearch(query) {
    function formatDuration(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        if (hours > 0) {
            return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else {
            return `${minutes}:${String(seconds).padStart(2, '0')}`;
        }
    }
    try {
        const access_token = await getAccessToken();
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`, {
            headers: { Authorization: `Bearer ${access_token}` }
        });
        return response.data.tracks.items.map(track => {
            const duration_ms = track.duration_ms;
            const duration = formatDuration(duration_ms);
            return {
                name: track.name,
                artists: track.artists.map(artist => artist.name).join(', '),
                link: track.external_urls.spotify,
                image: track.album.images[0].url,
                duration
            };
        });
    } catch (err) {
        console.error(err);
    }
}

module.exports = { getAccessToken, spotifySearch };