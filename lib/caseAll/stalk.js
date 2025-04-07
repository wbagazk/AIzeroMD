case 'pinstalk':
case 'pintereststalk': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const username = text.trim();
    if (!username) {
        return newReply("Harap masukkan username Pinterest yang ingin dicari.");
    }
    try {
        await reactionMessage('⏱️');
        const userDetails = await pinterest.profile(username);
        if (!userDetails.status) return newReply(userDetails.result.message);
        const user = userDetails.result;
        let message = `${litespace("PINTEREST PROFILE")}\n\n`;
        message += `*Username:* ${user.username}\n`;
        message += `*Full Name:* ${user.full_name || 'N/A'}\n`;
        message += `*Bio:* ${user.bio || 'N/A'}\n`;
        message += `*Profile URL:* ${user.profile_url}\n`;
        message += `*Profile Pic:* ${user.image.large || 'N/A'}\n`;
        message += `*Followers:* ${user.stats.followers}\n`;
        message += `*Following:* ${user.stats.following}\n`;
        message += `*Pins:* ${user.stats.pins}\n`;
        message += `*Boards:* ${user.stats.boards}\n`;
        message += `*Likes:* ${user.stats.likes}\n`;
        message += `*Website:* ${user.website || 'N/A'}\n`;
        message += `*Location:* ${user.location || 'N/A'}\n`;
        message += `*Country:* ${user.country || 'N/A'}\n`;
        message += `*Created At:* ${user.created_at || 'N/A'}\n`;
        message += `*Last Login:* ${user.last_login || 'N/A'}\n`;
        message += `*Email:* ${user.email || 'N/A'}\n`;
        message += `*Account Type:* ${user.account_type || 'N/A'}\n`;
        message += `*Is Verified:* ${user.is_verified ? 'Yes' : 'No'}\n`;
        message += `*Is Partner:* ${user.is_partner ? 'Yes' : 'No'}\n`;
        message += `*Social Links:* \n`;
        message += `  - Twitter: ${user.social_links.twitter || 'N/A'}\n`;
        message += `  - Facebook: ${user.social_links.facebook || 'N/A'}\n`;
        message += `  - Instagram: ${user.social_links.instagram || 'N/A'}\n`;
        message += `  - YouTube: ${user.social_links.youtube || 'N/A'}\n`;
        message += `  - Etsy: ${user.social_links.etsy || 'N/A'}\n`;
        newReply(message);
        await reactionMessage('✅');
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;  

case 'githubstalk': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const username = text.trim();
    if (!username) {
        return newReply("Harap masukkan username GitHub yang ingin dicari.");
    }
    try {
        await reactionMessage('⏱️');
        const userDetails = await githubstalk(username);
        let message = `${litespace("GITHUB STALK")}\n\n`;
        message += `*Username:* ${userDetails.username}\n`;
        message += `*Nickname:* ${userDetails.nickname || 'N/A'}\n`;
        message += `*Bio:* ${userDetails.bio || 'N/A'}\n`;
        message += `*ID:* ${userDetails.id}\n`;
        message += `*Node ID:* ${userDetails.nodeId}\n`;
        message += `*Profile Pic:* ${userDetails.profile_pic}\n`;
        message += `*Profile URL:* ${userDetails.url}\n`;
        message += `*Type:* ${userDetails.type}\n`;
        message += `*Admin:* ${userDetails.admin ? 'Yes' : 'No'}\n`;
        message += `*Company:* ${userDetails.company || 'N/A'}\n`;
        message += `*Blog:* ${userDetails.blog || 'N/A'}\n`;
        message += `*Location:* ${userDetails.location || 'N/A'}\n`;
        message += `*Email:* ${userDetails.email || 'N/A'}\n`;
        message += `*Public Repos:* ${userDetails.public_repo}\n`;
        message += `*Public Gists:* ${userDetails.public_gists}\n`;
        message += `*Followers:* ${userDetails.followers}\n`;
        message += `*Following:* ${userDetails.following}\n`;
        message += `*Created At:* ${userDetails.created_at}\n`;
        message += `*Updated At:* ${userDetails.updated_at}\n`;
        newReply(message);
        await reactionMessage('✅');
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`)
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'npmstalk': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const packageName = text.trim();
    if (!packageName) {
        return newReply("Harap masukkan nama paket NPM yang ingin dicari.");
    }
    try {
        await reactionMessage('⏱️');
        const packageDetails = await npmstalk(packageName); 
        let message = `${litespace("NPM STALK")}\n\n`;
        message += `*Nama Paket:* ${packageDetails.name}\n`;
        message += `*Versi Terbaru:* ${packageDetails.versionLatest}\n`;
        message += `*Versi Pertama Dipublikasikan:* ${packageDetails.versionPublish}\n`;
        message += `*Jumlah Versi Tersedia:* ${packageDetails.versionUpdate}\n`;
        message += `*Jumlah Dependensi Terbaru:* ${packageDetails.latestDependencies}\n`;
        message += `*Jumlah Dependensi Versi Pertama:* ${packageDetails.publishDependencies}\n`;
        message += `*Waktu Publikasi Pertama:* ${packageDetails.publishTime}\n`;
        message += `*Waktu Publikasi Terbaru:* ${packageDetails.latestPublishTime}\n`;
        newReply(message);
        await reactionMessage('✅');
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`)
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'mlstalk': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    const args = text.trim().split(' ');
    if (args.length < 2) {
        return newReply("Harap masukkan ID game dan zone ID. Contoh: !mlstalk <gameId> <zoneId>");
    }
    const gameId = args[0];
    const zoneId = args[1]; 
    try {
        await reactionMessage('⏱️');
        const gameDetails = await mlstalk(gameId, zoneId); 
        let message = `${litespace("ML STALK")}\n\n`;
        message += `*Nama Game:* ${gameDetails.name || 'N/A'}\n`;
        message += `*Detail Game:* ${gameDetails.detail || 'N/A'}\n`;
        message += `*ID Game:* ${gameDetails.id || 'N/A'}\n`;
        message += `*Zone ID:* ${zoneId}\n`;
        message += `*Waktu Publikasi:* ${gameDetails.publishTime || 'N/A'}\n`;
        message += `*Waktu Terbaru:* ${gameDetails.latestPublishTime || 'N/A'}\n`;
        newReply(message);
        await reactionMessage('✅');
    } catch (err) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`)
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'ttstalk': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply('Harap masukkan username TikTok!');
    try {
        await reactionMessage('⏱️');
        const result = await tiktokStalk(text);
        if (result.error) {
            return reply(`Error: ${result.error}`);
        }
        const {
            username,
            nama,
            bio,
            verifikasi,
            totalfollowers,
            totaldisukai,
            totalvideo,
            avatar
        } = result;
        let message = `${litespace("TIKTOK STALK")}\n\n`;
        message += `*Username*: ${username || '-'}\n`;
        message += `*Nama*: ${nama || '-'}\n`;
        message += `*Bio*: ${bio || '-'}\n`;
        message += `*Terverifikasi*: ${verifikasi ? 'Ya' : 'Tidak'}\n`;
        message += `*Total Followers*: ${totalfollowers.toLocaleString()}\n`;
        message += `*Total Like*: ${totaldisukai.toLocaleString()}\n`;
        message += `*Total Video*: ${totalvideo.toLocaleString()}`;
        await wbk.sendMessage(m.chat, {
            image: { url: avatar },
            caption: message,
            quoted: m
        });
        await reactionMessage('✅');
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_\n\n${error.message}`)
        db.data.settings[botNumber].totalError += 1;
    }
}
break;