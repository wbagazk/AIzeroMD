const fs = require('fs')
const toMs = require('ms')

const addPremiumUser = (userId, expired, _dir) => {
	if (expired === undefined) {
		expired = 'PERMANENT'
	} else {
		expired = expired
	}	
	let expired_at = 'PERMANENT'	
	if (expired === 'PERMANENT') {
		expired_at = 'PERMANENT'
	} else {
		expired_at = Date.now() + toMs(expired)
	}
	const obj = { id: userId, expired: expired_at }
	_dir.push(obj)
	fs.writeFileSync('./src/data/role/premium.json', JSON.stringify(_dir, null, 2))
};

const getPremiumPosition = (userId, _dir) => {
	let position = null
	Object.keys(_dir).forEach((i) => {
		if (_dir[i].id === userId) {
			position = i
		}
	})
	if (position !== null) {
		return position
	}
};

const getPremiumExpired = (userId, _dir) => {
	let position = null
	Object.keys(_dir).forEach((i) => {
		if (_dir[i].id === userId) {
			position = i
		}
	})
	if (position !== null) {
		return _dir[position].expired
	}
};

const checkPremiumUser = (userId, _dir) => {
	let status = false
	Object.keys(_dir).forEach((i) => {
		if (_dir[i].id === userId) {
			status = true
		}
	})
	return status
};

const expiredCheck = (wbk, msg, _dir) => {
	setInterval(() => {
		let position = null;
		Object.keys(_dir).forEach((i) => {
			if (Date.now() >= _dir[i].expired) {
				position = i;
			}
		});
		if (position !== null) {
			idny = _dir[position].id;
			console.log(`Premium expired: ${_dir[position].id}`);
			_dir.splice(position, 1);
			fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(_dir));
			idny ? wbk.sendMessage(idny, { text: "Premium Anda telah habis, silakan beli lagi." }) : "";
			idny = false;
		}
	}, 1000);
};

const getAllPremiumUser = (_dir) => {
	const array = []
	Object.keys(_dir).forEach((i) => {
		array.push(_dir[i].id)
	})
	return array
};

module.exports = {
	addPremiumUser,
	getPremiumExpired,
	getPremiumPosition,
	expiredCheck,
	checkPremiumUser,
	getAllPremiumUser
};
