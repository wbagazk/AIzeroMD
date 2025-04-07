// Mengimpor modul yang diperlukan
const axios = require('axios');
const FormData = require('form-data');
const fakeUserAgent = require('fake-useragent');
const fileType = require('file-type'); // Mengganti fileTypeFromBuffer
const cheerio = require('cheerio');

// Fungsi untuk mengupload file ke AnonFile
const Anonfiles = async (buffer) => {
    try {
        const { ext } = await fileType.fromBuffer(buffer); // Menggunakan fromBuffer
        if (!ext) throw new Error('Unsupported file type');

        const bodyForm = new FormData();
        bodyForm.append("file", buffer, `WBK.${ext}`);

        const res = await axios.post("https://www.anonfile.la/process/upload_file", bodyForm, {
            headers: {
                ...bodyForm.getHeaders(),
                "User-Agent": fakeUserAgent()
            },
            maxContentLength: Infinity,
            maxBodyLength: Infinity,
        });

        const html = typeof res.data === "string" ? res.data : JSON.stringify(res.data);
        const $ = cheerio.load(html);

        const downloadUrl = $("#downloadUrl").val();
        if (downloadUrl) return downloadUrl;

        const regex = /https?:\/\/[^\s"']+/g;
        const matches = html.match(regex);
        return matches && matches.length ? matches[0] : null;

    } catch (err) {
        throw new Error(`AnonFiles Error: ${err.message}`);
    }
};

// Fungsi untuk mengupload file
const anonfile = async (inp) => {
    try {
        const files = Array.isArray(inp) ? inp : [inp];
        const urls = [];

        for (const file of files) {
            const buffer = Buffer.isBuffer(file) ? file : file.buffer;
            if (!Buffer.isBuffer(buffer)) throw new Error('Invalid buffer format');

            const url = await Anonfiles(buffer);
            if (!url) throw new Error('Upload failed');

            urls.push(url);
        }

        return Array.isArray(inp) ? urls : urls[0];

    } catch (error) {
        throw new Error(`Upload Error: ${error.message}`);
    }
};

// Ekspor modul
module.exports = { anonfile };