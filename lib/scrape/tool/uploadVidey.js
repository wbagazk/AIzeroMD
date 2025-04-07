const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

async function uploadVidey(filePath) {
    try {
        const formData = new FormData();
        formData.append('file', fs.createReadStream(filePath));

        const response = await axios.post('https://videy.co/api/upload', formData, {
            headers: { ...formData.getHeaders() }
        });

        return response.data;
    } catch (error) {
        throw new Error('Gagal mengunggah video');
    }
}

module.exports = { uploadVidey };