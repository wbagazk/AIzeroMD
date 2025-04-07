const QRCode = require("qrcode");
const axios = require("axios");
const FormData = require("form-data");
const path = require("path");
const fs = require("fs");

function saveTempFile(buffer) {
    const tempFilePath = path.join(process.cwd(), `temp_${Date.now()}.png`);
    fs.writeFileSync(tempFilePath, buffer);
    return tempFilePath;
}

async function uploadFileUgu(input) {
    if (!fs.existsSync(input)) throw new Error("File not found");
    try {
        const form = new FormData();
        form.append("files[]", fs.createReadStream(input));

        const response = await axios.post("https://uguu.se/upload.php", form, {
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
                ...form.getHeaders(),
            },
        });

        if (response.data?.files?.[0]) {
            return response.data.files[0];
        } else {
            throw new Error("Uguu upload failed");
        }
    } catch (error) {
        throw new Error(`Uguu upload failed: ${error.message}`);
    }
}

function convertCRC16(str) {
    let crc = 0xffff;

    for (let c = 0; c < str.length; c++) {
        crc ^= str.charCodeAt(c) << 8;

        for (let i = 0; i < 8; i++) {
            crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
        }
    }

    return crc.toString(16).toUpperCase().padStart(4, "0");
}

function generateTransactionId() {
    return `TRX${Date.now()}`;
}

function generateExpirationTime() {
    return new Date(Date.now() + 30 * 60 * 1000).toISOString();
}

async function createQROrKut(amount) {
    try {
        let codeqr = global.codeqr;
        let qrisData = codeqr.slice(0, -4);
        qrisData = qrisData.replace("010211", "010212");

        const [part1, part2] = qrisData.split("5802ID");
        amount = amount.toString();
        const uang = `54${amount.length.toString().padStart(2, "0")}${amount}5802ID`;

        const finalQRIS = `${part1}${uang}${part2}${convertCRC16(part1 + uang + part2)}`;
        const buffer = await QRCode.toBuffer(finalQRIS);
        const filePath = saveTempFile(buffer);
        const uploadedFile = await uploadFileUgu(filePath);
        fs.unlinkSync(filePath);

        return {
            transactionId: generateTransactionId(),
            amount,
            expirationTime: generateExpirationTime(),
            qrImageUrl: uploadedFile.url,
        };
    } catch (error) {
        console.error("Error generating and uploading QR code:", error);
        throw error;
    }
}

async function cekStatusQROrKut() {
    try {
        let merchant = global.merchant;
        let keyorkut = global.keyorkut;
        const apiUrl = `https://www.gateway.okeconnect.com/api/mutasi/qris/${merchant}/${keyorkut}`;
        const response = await axios.get(apiUrl);
        const result = response.data;
        const latestTransaction = result.data && result.data.length > 0 ? result.data[0] : null;
        return latestTransaction || { message: "No transactions found." };
    } catch (error) {
        return { error: error.message };
    }
}

module.exports = { createQROrKut, cekStatusQROrKut };