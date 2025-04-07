const axios = require('axios');

async function muslimai(query) {
    const searchUrl = 'https://www.muslimai.io/api/search';
    const searchData = {
        query: query
    };
    const headers = {
        'Content-Type': 'application/json'
    };

    try {
        const searchResponse = await axios.post(searchUrl, searchData, { headers: headers });
        const passages = searchResponse.data.map(item => item.content).join('\n\n');
        const answerUrl = 'https://www.muslimai.io/api/answer';
        const answerData = {
            prompt: `Jawablah dengan Bahasa Indonesia yang baik dan benar: ${query}\n\n${passages}`
        };
        const answerResponse = await axios.post(answerUrl, answerData, { headers: headers });
        const result = {
            answer: answerResponse.data,
            source: searchResponse.data
        };
        return result;
    } catch (error) {
        console.error('Error occurred:', error.response ? error.response.data : error.message);
        return { answer: 'Maaf, saya tidak dapat menjawab pertanyaan Anda saat ini.' };
    }
}

module.exports = { muslimai };