const axios = require('axios')
const cheerio = require('cheerio')

async function tiktokStalk(username) {
    try {
        const response = await axios.get(`https://www.tiktok.com/@${username}?_t=ZS-8tHANz7ieoS&_r=1`);
        const html = response.data;
        const $ = cheerio.load(html);
        const scriptData = $('#__UNIVERSAL_DATA_FOR_REHYDRATION__').html();
        const parsedData = JSON.parse(scriptData);

        const userDetail = parsedData.__DEFAULT_SCOPE__?.['webapp.user-detail'];
        if (!userDetail) {
            throw new Error('User tidak ditemukan');
        }

        const userInfo = userDetail.userInfo?.user;
        const stats = userDetail.userInfo?.stats;

        const metadata = {
            username: userInfo?.uniqueId || null,
            nama: userInfo?.nickname || null,
            bio: userInfo?.signature || null,
            verifikasi: userInfo?.verified || false,
            totalfollowers: stats?.followerCount || 0,
            totaldisukai: stats?.heart || 0,
            totalvideo: stats?.videoCount || 0,
            avatar: userInfo?.avatarLarger || null,
        };

        return metadata;
    } catch (error) {
        return { error: error.message };
    }
}

module.exports = { tiktokStalk }