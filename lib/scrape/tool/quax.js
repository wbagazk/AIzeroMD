const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const mime = require('mime-types');

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
    throw new Error(`Upload Error: ${err.message}`);
  }
}

module.exports = { quax };