const axios = require('axios');

class cliptoai {
  static async ytdl(url) {
    try {
      const response = await axios.post('https://www.clipto.com/api/youtube', 
        { url },
        {
          headers: {
            'accept': 'application/json, text/plain, */*',
            'content-type': 'application/json',
            'origin': 'https://www.clipto.com',
            'referer': 'https://www.clipto.com/id/media-downloader/youtube-downloader',
            'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36'
          }
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = { cliptoai };