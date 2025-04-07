const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const mime = require('mime-types');

function randomKarakter(jumlah) {
    const huruf = 'abcdefghijklmnopqrstuvwxyz';
    let hasil = '';
    for (let i = 0; i < jumlah; i++) {
        const indexAcak = Math.floor(Math.random() * huruf.length);
        let hurufAcak = huruf[indexAcak];
        hurufAcak = Math.random() < 0.5 ? hurufAcak.toUpperCase() : hurufAcak;
        hasil += hurufAcak;
    }
    return hasil;
}

async function cloudmini(filePath) {
    try {
        const file_buffer = fs.readFileSync(filePath);
        const file_type = filePath.split('.').pop();
        const file_name = filePath.split('/').pop();
        const mimeType = mime.lookup(filePath) || 'application/octet-stream';
        const unique_id = randomKarakter(5) + (file_buffer.length + file_type + file_name).length;

        const form = new FormData();
        form.append('file', fs.createReadStream(filePath), {
            filename: `WBK_${unique_id}.${file_type}`,
            contentType: mimeType
        });

        const response = await axios.post('https://files.cloudmini.net/upload', form, {
            headers: { ...form.getHeaders() }
        });

        const { filename, expiry_time } = response.data;

        return {
            URL: `https://files.cloudmini.net/download/${filename}`,
            expiry_time: expiry_time
        };
    } catch (err) {
        console.error(err);
        throw new Error("Gagal mengunggah file.");
    }
}

module.exports = { cloudmini };