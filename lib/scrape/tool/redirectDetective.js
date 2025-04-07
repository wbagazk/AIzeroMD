const axios = require('axios');

const api = {
  base: "https://redirectdetective.com/ld.px"
};

const headers = {
  'authority': 'redirectdetective.com',
  'content-type': 'application/x-www-form-urlencoded',
  'origin': 'https://redirectdetective.com',
  'referer': 'https://redirectdetective.com/',
  'user-agent': 'Postify/1.0.0'
};

const generateCookie = (count = 1) => {
  const timestamp = Math.floor(Date.now() / 1000);
  const random = Math.floor(Math.random() * 1000000000);
  return `__utma=132634637.${random}.${timestamp}.${timestamp}.${timestamp}.1; __utmz=132634637.${timestamp}.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utmc=132634637; __utmt=1; __utmb=132634637.6.10.${timestamp}; c=${count}`;
};

const parseRedirects = (data) => {
  const urlRegex = /<a href="([^"]+)" class="tooltips[^>]+>/g;

  let urlx;
  let lastUrl = null;

  while ((urlx = urlRegex.exec(data)) !== null) {
    lastUrl = urlx[1].replace(/\r/g, '');
  }

  return lastUrl ? lastUrl : null;
};

const isUrlValid = (url) => {
  if (!url || url.trim() === '') {
    return {
      isValid: false,
      message: 'Seriously? Inputnya kosong begini? 😑'
    };
  }

  try {
    new URL(url);
    return {
      isValid: true,
      message: 'Anjaii, nah ini baru input yg bener!! 👹'
    };
  } catch (err) {
    return {
      isValid: false,
      message: 'Inputnya kagak valid bree, coba periksa lagi dah 🤷🏻'
    };
  }
};

const isFollowValid = (follow) => {
  if (typeof follow === 'undefined' || follow === null) {
    return {
      isValid: false,
      message: 'Options follownya kudu diisi (true/false) juga atuh bree',
      isDefault: false
    };
  }

  if (typeof follow !== 'boolean') {
    return {
      isValid: false,
      message: 'Follownya harus boolean (true/false) yak bree 😂',
      isDefault: false
    };
  }

  return {
    isValid: true,
    message: 'Nah ini baru bener, options follownya 😀',
    value: follow
  };
};

const redirectDetective = async (url, follow) => {
  try {
    const isUrlx = isUrlValid(url);
    if (!isUrlx.isValid) {
      return {
        status: false,
        code: 400,
        message: isUrlx.message,
        result: {
          redirects: []
        }
      };
    }

    const isFollowx = isFollowValid(follow);
    const followOpts = isFollowx.isValid ? isFollowx.value : isFollowx.isDefault;

    if (!isFollowx.isValid) {
      return {
        status: false,
        code: 400,
        message: isFollowx.message,
        result: {
          redirects: []
        }
      };
    }

    const formData = new URLSearchParams();
    formData.append('w', url.replace(/\r/g, ''));
    formData.append('f', followOpts.toString());

    const count = Math.floor(Math.random() * 5) + 1;
    const cookie = generateCookie(count);

    const response = await axios.post(api.base, formData, {
      headers: {
        ...headers,
        'cookie': cookie
      }
    });

    const redirects = parseRedirects(response.data);

    return {
      status: true,
      code: 200,
      result: {
        redirects: redirects
      }
    };

  } catch (error) {
    return {
      status: false,
      code: error.response?.status || 500,
      message: error.message,
      result: {
        redirects: []
      }
    };
  }
};

module.exports = {
  api,
  headers,
  generateCookie,
  parseRedirects,
  isUrlValid,
  isFollowValid,
  redirectDetective
};