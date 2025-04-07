case 'bass':
case 'blown':
case 'deep':
case 'earrape':
case 'fast':
case 'fat':
case 'nightcore':
case 'reverse':
case 'robot':
case 'slow':
case 'smooth':
case 'squirrel': {
	if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
	try {
		let set
		if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
		if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
		if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
		if (/earrape/.test(command)) set = '-af volume=12'
		if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
		if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
		if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
		if (/reverse/.test(command)) set = '-filter_complex "areverse"'
		if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
		if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
		if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
		if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
		if (/audio/.test(mime)) {
			await reactionMessage('⏱️');
			let media = await wbk.downloadAndSaveMediaMessage(quoted)
			let ran = getRandom('.mp3')
			exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return newReply(err)
				let buff = fs.readFileSync(ran)
				wbk.sendMessage(m.chat, {
					audio: buff,
					mimetype: 'audio/mpeg'
				}, {
					quoted: m
				})
				fs.unlinkSync(ran)
			})
		} else newReply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
	} catch (e) {
		newReply(e)
	}
}
db.data.users[m.sender].limit -= 1;
db.data.settings[botNumber].totalhit += 1;
break;