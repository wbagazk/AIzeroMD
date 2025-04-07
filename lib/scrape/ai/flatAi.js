const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');

const flatAi = async (prompt, seed = "", ratio = "1:1") => {
    const getNonce = await fetch(
        "https://flatai.org/ai-image-generator-free-no-signup/",
        {
            method: "GET",
            headers: {
                accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "max-age=0",
                referer: "https://flatai.org/ai-image-generator-free-no-signup/",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6827.64 Safari/537.36 OPR/115.0.5132.173",
            },
        }
    );
    const findNonce = await getNonce.text();
    const nonceMatch = findNonce.match(/ai_generate_image_nonce":"(.*?)"/);
    const nonce = nonceMatch ? nonceMatch[1] : null;
    if (!nonce) {
        throw new Error("Nonce not found.");
    }
    const generate = await fetch("https://flatai.org/wp-admin/admin-ajax.php", {
        method: "POST",
        headers: {
            accept: "/",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            origin: "https://flatai.org",
            referer: "https://flatai.org/ai-image-generator-free-no-signup/",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6827.64 Safari/537.36 OPR/115.0.5132.173",
            "x-requested-with": "XMLHttpRequest",
        },
        body: `action=ai_generate_image&nonce=${nonce}&prompt=${encodeURIComponent(prompt)}&aspect_ratio=${ratio}&seed=${seed}`,
    });
    const result = await generate.json();
    if (result.success) {
        return result.data.images; 
    } else {
        throw new Error("Image generation failed");
    }
};

const saveFlatAi = async (urls, prompt) => {
    const savedPaths = [];
    try {
        for (const url of urls) {
            const response = await fetch(url);
            const buffer = await response.buffer();
            const fileName = `${Date.now()}_${prompt.substring(0, 10).replace(/[^a-z0-9]/gi, '_')}.jpg`;
            const filePath = path.join(__dirname, '../../../temp', fileName);

            fs.writeFileSync(filePath, buffer);
            console.log(`Gambar disimpan sebagai: ${filePath}`);
            savedPaths.push(filePath);
        }
        return savedPaths;
    } catch (error) {
        console.error('Error saat menyimpan gambar:', error);
        throw error;
    }
};

module.exports = { flatAi, saveFlatAi };