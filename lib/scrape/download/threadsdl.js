const axios = require("axios");
const FormData = require("form-data");
const cheerio = require("cheerio");

async function threadsdl(urls) {
    if (!urls) throw new Error("Masukkan URL Threads");

    try {
        let d = new FormData();
        d.append("url", urls);

        let headers = {
            headers: {
                ...d.getHeaders()
            }
        };

        let { data: s } = await axios.post("https://savethreads.io/proxy.php", d, headers);

        return s;
    } catch (e) {
        console.error(e.message);
    }
}

module.exports = { threadsdl };
