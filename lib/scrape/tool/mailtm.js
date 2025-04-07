const axios = require('axios');

// Fungsi untuk menghasilkan password acak
function generateRandomPasswordMail(prefix = 'wbk-', length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = prefix;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

// Fungsi untuk menghasilkan email
function generateEmailMail(namePrefix) {
    return `${namePrefix}@edny.net`;
}

// Fungsi untuk mendapatkan token
async function getTokenMail(email, password) {
    const url = 'https://api.mail.tm/token';
    const headers = {
        'accept': 'application/json',
        'content-type': 'application/json',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
        'cache-control': 'no-cache',
        'pragma': 'no-cache',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15'
    };

    const payload = {
        address: email,
        password: password,
    };

    const response = await axios.post(url, payload, { headers });
    return response.data.token;
}

// Fungsi untuk membuat akun
async function createAccountMail(namePrefix) {
    const email = generateEmailMail(namePrefix);
    const password = generateRandomPasswordMail();

    const url = 'https://api.mail.tm/accounts';
    const headers = {
        'accept': 'application/json',
        'content-type': 'application/json',
        'origin': 'https://ins.neastooid.xyz',
        'referer': 'https://ins.neastooid.xyz/',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15'
    };

    const payload = {
        address: email,
        password: password,
    };

    try {
        const response = await axios.post(url, payload, { headers });
        const token = await getTokenMail(email, password);

        return {
            email: response.data.address,
            password: password,
            id: response.data.id,
            token: token,
        };
    } catch (error) {
        if (error.response) {
            console.error('Error creating account:', error.response.data);
            if (error.response.status === 422 && error.response.data.violations) {
                const emailViolation = error.response.data.violations.find(v => v.propertyPath === 'address');
                if (emailViolation) {
                    throw new Error(`Failed to create account, ${emailViolation.message}.\nSilahkan gunakan username lainnya.`);
                }
            }
            throw new Error('Failed to create account. Please check the input data.');
        } else if (error.request) {
            console.error('No response received:', error.request);
            throw new Error('No response from server. Please try again later.');
        } else {
            console.error('Error:', error.message);
            throw new Error('An error occurred while creating the account.');
        }
    }
}

// Fungsi untuk memeriksa pesan email
async function cekPesanMail(token) {
    const url = 'https://api.mail.tm/messages?page=1';
    const headers = {
        'accept': 'application/json',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
        'authorization': `Bearer ${token}`, // Memperbaiki sintaksis untuk menambahkan token
        'cache-control': 'no-cache',
        'origin': 'https://ins.neastooid.xyz',
        'pragma': 'no-cache',
        'referer': 'https://ins.neastooid.xyz/',
        'sec-ch-ua': '"Safari";v="15.3", "Not:A-Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15'
    };

    try {
        const response = await axios.get(url, { headers });
        const messages = response.data;

        // Mengembalikan daftar pesan yang diformat
        return messages.map(msg => ({
            from: msg.from.address,
            subject: msg.subject
        }));
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw new Error('Failed to fetch messages. Please check the token and try again.');
    }
}

module.exports = { generateRandomPasswordMail, generateEmailMail, getTokenMail, createAccountMail, cekPesanMail };