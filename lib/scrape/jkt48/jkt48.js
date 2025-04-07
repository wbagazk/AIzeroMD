const axios = require('axios');
const cheerio = require('cheerio');

async function getJKT48News() {
    const url = 'https://jkt48.com/news/list?lang=id';
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const newsItems = [];
        $('.entry-news__list').each((index, element) => {
            const title = $(element).find('h3 a').text().trim();
            const date = $(element).find('time').text().trim();
            const link = $(element).find('a').attr('href');
            newsItems.push({
                title,
                date,
                link: `https://jkt48.com${link}`
            });
        });
        return newsItems;
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}

async function getJKT48NewsDetail(detailUrl) {
    try {
        const response = await axios.get(detailUrl, {
            headers: {
                'User-Agent': 'Postify/1.0.0',
                'Content-Type': 'application/json'
            }
        });
        const html = response.data;
        const $ = cheerio.load(html);
        let newsDetail = {};
        newsDetail.title = $('h3').first().text().trim();
        newsDetail.date = $('.metadata2').text().trim();
        newsDetail.content = $('.entry-news__detail p').map((index, element) => {
            return $(element).text().trim();
        }).get().join('\n'); // Menggabungkan semua paragraf menjadi satu string
        newsDetail.image = $('meta[property="og:image"]').attr('content');
        return newsDetail;
    } catch (error) {
        console.error('Error fetching news detail:', error.message);
        throw error;
    }
}

async function getJKT48Calendar() {
    try {
        const { data } = await axios.get('https://jkt48.com/calendar/list?lang=id');
        const $ = cheerio.load(data);
        const schedule = [];
        const monthYear = $('.entry-schedule__header--center').text().trim();
        const [month, year] = monthYear.split(' '); // Memisahkan bulan dan tahun
        $('.entry-schedule__calendar table tbody tr').each((index, element) => {
            const dayCell = $(element).find('td:first-child h3');
            const eventCell = $(element).find('td:last-child .contents');
            const day = dayCell.text().trim(); // Mengambil hari dan tanggal
            const events = [];
            if (eventCell.length > 0) {
                eventCell.each((i, el) => {
                    const eventLink = $(el).find('a').attr('href');
                    const eventName = $(el).find('a').text().trim();
                    events.push({
                        event: eventName,
                        link: `https://jkt48.com${eventLink}` // Menggabungkan dengan domain
                    });
                });
            }
            if (events.length > 0) {
                schedule.push({
                    day: day,
                    month: month, // Menyimpan bulan
                    year: year,   // Menyimpan tahun
                    events: events
                });
            }
        });
        return schedule; // Mengembalikan array jadwal
    } catch (error) {
        console.error('Error fetching JKT48 calendar:', error);
        return []; // Mengembalikan array kosong jika terjadi kesalahan
    }
}

async function getJKT48Members() {
    try {
        const { data } = await axios.get('https://jkt48.com/member/list?lang=id');
        const $ = cheerio.load(data);
        const members = [];
        $('.entry-member').each((index, element) => {
            const name = $(element).find('.entry-member__name a').text().trim();
            const profileLink = $(element).find('.entry-member__name a').attr('href');
            const imageUrl = $(element).find('img').attr('src');
            const separatedName = name.replace(/([a-z])([A-Z])/g, '$1 $2');
            members.push({
                name: separatedName,
                profileLink: `https://jkt48.com${profileLink}`,
                imageUrl: `https://jkt48.com${imageUrl}`
            });
        });
        return members;
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

async function getJKT48MemberDetails(detailUrl) {
    try {
        const response = await axios.get(detailUrl, {
            headers: {
                'User-Agent': 'Postify/1.0.0',
                'Content-Type': 'application/json'
            }
        });
        const html = response.data;
        const $ = cheerio.load(html);
        let details = {};
        $('.entry-mypage__item').each((index, element) => {
            const subject = $(element).find('.entry-mypage__item--subject').text().trim();
            const content = $(element).find('.entry-mypage__item--content').text().trim();
            if (subject && content) {
                details[subject] = content;
            }
        });
        return details;
    } catch (error) {
        console.error('Error fetching member details:', error.message);
        throw error;
    }
}

module.exports = { getJKT48News, getJKT48NewsDetail, getJKT48Calendar, getJKT48Members, getJKT48MemberDetails }