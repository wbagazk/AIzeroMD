const axios = require('axios');

async function cekrekening(accountNumber, accountBank) {
    const data = {
        "account_number": accountNumber,
        "account_bank": accountBank
    };

    const config = {
        method: 'post',
        url: 'https://cekrekening-api.belibayar.online/api/v1/account-inquiry',
        headers: { 
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36'
        },
        data: data
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
        throw error;
    }
}

module.exports = { cekrekening };