const { URL } = require('url');
const axios = require('axios');

/**
 * Downloader Videy
 * By Wira
 * Hapus Wm = Kayak Monyet
 */

async function videydl(url) {
    try {
        const objcturl = new URL(url);
        let videoId;
        let ext = '.mp4';
        if (objcturl.pathname.includes('/v')) {
            videoId = objcturl.searchParams.get('id');
            if (!videoId) throw new Error('Invalid Videy URL');
        } else {
            const pathSegments = objcturl.pathname.split('/');
            const fileName = pathSegments[pathSegments.length - 1];
            [videoId, ext] = fileName.split('.');
            if (!videoId) throw new Error('Invalid Videy URL');
        }
        const urlvideo = `https://cdn.videy.co/${videoId}${ext}`;
        try {
            const response = await axios.get(urlvideo);
            if (response.status !== 200) throw new Error('Video not found');
        } catch (error) {
            ext = '.mov';
            const fallbackUrl = `https://cdn.videy.co/${videoId}${ext}`;
            const fallbackResponse = await axios.get(fallbackUrl);
            if (fallbackResponse.status !== 200) throw new Error('Video not found with .mov extension');
            return fallbackUrl;
        }

        return urlvideo;
    } catch (error) {
        throw new Error(`Download failed: ${error.message}`);
    }
}

module.exports = { videydl };