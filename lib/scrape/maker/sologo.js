const axios = require("axios");

async function sologoGenerator(option = {}) {
  let payload = {
    ai_icon: [333276, 333279],
    height: 300,
    idea: option.idea,
    industry_index: "N",
    industry_index_id: "",
    pagesize: 4,
    session_id: "",
    slogan: option.slogan,
    title: option.title,
    whiteEdge: 80,
    width: 400
  };

  let { data } = await axios.post("https://www.sologo.ai/v1/api/logo/logo_generate", payload);
  return data.data.logoList.map(logo => logo.logo_thumb);
}

module.exports = { sologoGenerator };