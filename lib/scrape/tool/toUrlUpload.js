const axios = require('axios');
const FormData = require('form-data');
const fakeUserAgent = require('fake-useragent');
const fileType = require('file-type');
const cheerio = require('cheerio');
const fs = require('fs');
const mime = require('mime-types');

async function Anonfiles(buffer) {
    try {
        const { ext } = await fileType.fromBuffer(buffer);
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
}

async function catbox(filePath) {
    try {
        const fileStream = fs.createReadStream(filePath);
        const formData = new FormData();
        formData.append('fileToUpload', fileStream);
        formData.append('reqtype', 'fileupload');
        formData.append('userhash', '');

        const response = await axios.post('https://catbox.moe/user/api.php', formData, {
            headers: {
                ...formData.getHeaders(),
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(`Catbox Error: ${error.message}`);
    }
}

async function quax(path) {
    try {
        const form = new FormData();
        const ext = path.split('.').pop();
        const mimeType = mime.lookup(ext) || 'application/octet-stream';

        form.append('files[]', fs.createReadStream(path), {
            filename: `v-${Date.now()}.${ext}`,
            contentType: mimeType
        });

        const { data } = await axios({
            method: 'POST',
            url: 'https://qu.ax/upload.php',
            headers: form.getHeaders(),
            data: form
        });

        if (!data.files || !data.files.length) {
            throw new Error('Upload failed or response format changed.');
        }

        return data.files[0].url;
    } catch (err) {
        throw new Error(`Quax Error: ${err.message}`);
    }
}

async function toUrlUpload(bufferOrPath) {
    let uploadMethods = [
        async () => typeof bufferOrPath === 'string' ? await quax(bufferOrPath) : await Anonfiles(bufferOrPath),
        async () => typeof bufferOrPath === 'string' ? await catbox(bufferOrPath) : null
    ];
    
    for (let method of uploadMethods) {
        try {
            let url = await method();
            if (url) return url;
        } catch (error) {
            console.error(error.message);
        }
    }
    
    throw new Error('All upload methods failed.');
}

module.exports = { toUrlUpload };