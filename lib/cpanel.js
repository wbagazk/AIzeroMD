require('../settings');
const fetch = require('node-fetch')
const axios = require("axios");
const moment = require('moment-timezone')
const date = moment.tz('Asia/Jakarta').format(`DD MMM yyyy`)

async function createUser(email, username, password) {
	const response = await axios.post(`${global.panel}/api/application/users`, {
		email,
		username,
		first_name: username,
		last_name: username,
		language: "en",
		password
	}, {
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json",
			"Authorization": `Bearer ${global.apiuser}`
		}
	});
	return response.data;
}

async function createServer(name, userId, startup_cmd, memo, cpu, disk) {
	const response = await axios.post(`${global.panel}/api/application/servers`, {
		name,
		description: "Created On " + date,
		user: userId,
		egg: parseInt(global.eggs),
		docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
		startup: startup_cmd,
		environment: {
			INST: "npm",
			USER_UPLOAD: "0",
			AUTO_UPDATE: "0",
			CMD_RUN: "npm start"
		},
		limits: {
			memory: memo,
			swap: 0,
			disk,
			io: 500,
			cpu
		},
		feature_limits: {
			databases: 5,
			backups: 5,
			allocations: 5
		},
		deploy: {
			locations: [parseInt(global.location)],
			dedicated_ip: false,
			port_range: []
		}
	}, {
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json",
			"Authorization": `Bearer ${global.apiuser}`
		}
	});
	return response.data;
}

async function getEggStartupCommand() {
	const response = await axios.get(`${global.panel}/api/application/nests/${global.nets}/eggs/${global.eggs}`, {
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json",
			"Authorization": `Bearer ${global.apiuser}`
		}
	});
	return response.data;
}
		
async function manageServer(action, srv) {
	if (!srv) throw new Error('Input *ID* from server');
	
	try {
		const response = await axios.post(`${global.panel}/api/client/servers/${srv}/power`, {
			signal: action
		}, {
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"Authorization": `Bearer ${global.apiuser}`,
			}
		});

		return `Sukses ${action.toUpperCase()} Server`;
	} catch (error) {
		if (error.response && error.response.data.errors) {
			throw new Error(JSON.stringify(error.response.data.errors[0], null, 2));
		}
		throw new Error('Terjadi kesalahan: ' + util.format(error));
	}
}

async function deleteServer(srv) {
	try {
		let response = await fetch(global.panel + "/api/application/servers/" + srv, {
			method: "DELETE",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"Authorization": "Bearer " + global.apiuser,
			}
		});
		return response.ok ? { success: true } : await response.json();
	} catch (error) {
		throw new Error(error);
	}
}

async function deleteUser(usr) {
	try {
		let response = await fetch(global.panel + "/api/application/users/" + usr, {
			method: "DELETE",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
				"Authorization": "Bearer " + global.apiuser,
			}
		});
		return response.ok ? { success: true } : await response.json();
	} catch (error) {
		throw new Error(error);
	}
}

module.exports = {
	createUser,
	createServer,
	getEggStartupCommand,
	manageServer,
	deleteServer,
	deleteUser
};