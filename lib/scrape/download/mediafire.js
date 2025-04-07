const fetch = require('node-fetch');
const cheerio = require("cheerio");
const { lookup } = require("mime-types");

async function mediafiredlV1(url, retries = 5, delay = 2000) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const allOriginsUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
            const response = await fetch(allOriginsUrl, {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.5481.178 Safari/537.36"
                }
            });
            
            if (!response.ok) throw new Error(`Fetch failed: ${response.statusText}`);
            const data = await response.text();
            const $ = cheerio.load(data);
            const filename = $(".dl-btn-label").attr("title");
            const ext = filename ? filename.split(".").pop() : '';
            const mimetype = ext ? (lookup(ext.toLowerCase()) || `application/${ext.toLowerCase()}`) : 'application/octet-stream';
            const sizeMatch = $(".input.popsok").text().trim().match(/\(([^)]+)\)/);
            const size = sizeMatch ? sizeMatch[1] : 'Unknown size';
            const downloadUrl = ($("#downloadButton").attr("href") || "").trim();
            const alternativeUrl = ($("#download_link > a.retry").attr("href") || "").trim();
            return {
                filename,
                size,
                mimetype,
                link: downloadUrl || alternativeUrl,
                alternativeUrl: alternativeUrl,
            };
        } catch (error) {
            console.error(`Attempt ${attempt} failed: ${error.message}`);
            if (attempt < retries) {
                console.log(`Retrying in ${delay / 1000} seconds...`);
                await new Promise(res => setTimeout(res, delay));
            } else {
                throw new Error("Failed to fetch data after multiple attempts");
            }
        }
    }
}

function getMimeTypeFromUrl(url) {
    const extension = url.split('.').pop().split('/')[0];
    return lookup(extension) || 'application/octet-stream';
}

async function mediafiredlV2(url) {
    try {
        const response = await fetch('https://r.jina.ai/' + url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.5481.178 Safari/537.36"
            }
        });
        const text = await response.text();
        const titleMatch = text.match(/Title:\s*(.*?)(?=\n)/);
        const downloadLinkMatch = text.match(/(https:\/\/[^\s]+)\s*\[Your download is starting\.\.\.\]/);
        const fileSizeMatch = text.match(/\[Download\s*\((.*?)\)\]/);
        const urlSourceMatch = text.match(/URL Source:\s*(.*?)(?=\n)/);
        const result = {
            fileName: titleMatch ? `${titleMatch[1].trim()}` : 'Tidak ditemukan',
            fileSize: fileSizeMatch ? `${fileSizeMatch[1].trim()}` : 'Tidak ditemukan',
            fileType: urlSourceMatch ? getMimeTypeFromUrl(urlSourceMatch[1]) : 'Tidak ditemukan',
            urlDownload: downloadLinkMatch ? downloadLinkMatch[1].trim() : 'Tidak ditemukan',
            urlSource: urlSourceMatch ? urlSourceMatch[1].trim() : 'Tidak ditemukan'
        };
        return result;
    } catch (error) {
        console.error('Error fetching MediaFire link:', error);
        return { success: false, message: 'Gagal mengambil informasi dari MediaFire.' };
    }
}

module.exports = { mediafiredlV1, mediafiredlV2 };