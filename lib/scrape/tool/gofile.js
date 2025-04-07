const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const gofile = async (filePath) => {
    const formData = new FormData();
    formData.append("file", fs.createReadStream(filePath));

    try {
        const response = await axios.post("https://store-ap-sgp-2.gofile.io/uploadfile", formData, {
            headers: formData.getHeaders(),
        });

        return response.data;
    } catch (error) {
        console.error("Error uploading file:", error);
        return null;
    }
};

module.exports = { gofile };