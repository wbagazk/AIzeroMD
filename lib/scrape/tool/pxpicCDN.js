const fs = require('fs');
const axios = require('axios');
const { fromBuffer } = require('file-type');

async function pxpicCDN(path) {
  const buffer = fs.readFileSync(path);
  const fileInfo = await fromBuffer(buffer);
  const ext = fileInfo?.ext || 'bin';
  const mime = fileInfo?.mime || 'application/octet-stream';
  const fileName = Math.random().toString(36).slice(2, 8) + '.' + ext;

  const responses = await axios.post("https://pxpic.com/getSignedUrl", {
    folder: "uploads",
    fileName
  }, {
    headers: { "Content-Type": "application/json" }
  });

  await axios.put(responses.data.presignedUrl, buffer, {
    headers: { "Content-Type": mime }
  });

  return "https://files.fotoenhancer.com/uploads/" + fileName;
}

module.exports = { pxpicCDN };