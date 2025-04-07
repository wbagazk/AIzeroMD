const axios = require('axios');

async function quotedLyo(teks, name, profile, reply) {
	return new Promise(async (resolve, reject) => {
		const {
			quoted
		} = reply || {};
		const str = {
			type: 'quote',
			format: 'png',
			backgroundColor: '#fff',
			width: 512,
			height: 768,
			scale: 2,
			messages: [
				quoted,
				{
					avatar: true,
					from: {
						id: 2,
						name,
						photo: {
							url: profile
						}
					},
					text: teks
				}
			]
		};
		try {
			const {
				data
			} = await axios.post('https://bot.lyo.su/quote/generate', JSON.stringify(str, null, 2), {
				headers: {
					'Content-Type': 'application/json'
				}
			});
			resolve(data);
		} catch (e) {
			reject(e);
		}
	});
}

module.exports = { quotedLyo };