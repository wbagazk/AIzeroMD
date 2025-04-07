case 'jkt48news': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        const news = await getJKT48News();
        if (news.length === 0) return newReply('Tidak ditemukan berita yang relevan.');
        let jkt48card = [];
        let teks = " ";
        let no = 1;
        for (let item of news) {
            jkt48card.push({
                title: `${no++}. ${item.title}`,
                rows: [
                    {
                        header: `Tanggal: ${item.date}`,
                        title: `Detail: ${item.link}`,
                        description: `Berita: ${item.title}`,
                        id: `.jkt48newsdetail ${item.link}`,
                    }
                ]
            });
        }
        let button = [
            {
                "name": "single_select",
                "buttonParamsJson": `{\n  title: 'NEWS JKT48',\n  sections: ${JSON.stringify(jkt48card)}\n}`
            }
        ];
        let buffer = await getBuffer('https://files.catbox.moe/ulw5b5.png');
        sendButtonImage(m.chat, "*乂 NEWS JKT48*", teks, buffer, button, m);
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;

case 'jkt48newsdetail': { //
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} 1880`);
    try {
        const detailUrl = `${text}`;
        const newsDetail = await getJKT48NewsDetail(detailUrl);

        if (!newsDetail) {
            return newReply('Detail berita tidak ditemukan.');
        }

        const imageBuffer = await getBuffer('https://files.catbox.moe/ulw5b5.png');
        let detailText = `${litespace("[ NEWS DETAIL ]")}\n\n`;
        detailText += `*Judul:* ${newsDetail.title}\n`;
        detailText += `*Tanggal:* ${newsDetail.date}\n`;
        detailText += `*Konten:*\n${newsDetail.content}\n`;
        detailText += `Detail: ${detailUrl}`;
        await wbk.sendMessage(m.chat, { image: imageBuffer, caption: detailText }, { quoted: m });
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;
 
case 'jkt48sch': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        const schedule = await getJKT48Calendar();
        if (!schedule || schedule.length === 0) return newReply('Tidak ditemukan jadwal yang relevan.');
        let jkt48card = [];
        let teks = " ";
        let no = 1;
        const month = schedule[0].month;
        const year = schedule[0].year;
        for (let item of schedule) {
            const day = item.day;
            for (let event of item.events) {
                jkt48card.push({
                    title: `${no++}. ${day}, ${month} ${year}`,
                    rows: [
                        {
                            header: `Acara: ${event.event}`,
                            title: `Link: ${event.link || 'Tidak ada link'}`,
                            description: `Hari/Tanggal: ${day}, ${month} ${year}`,
                            id: event.link || 'no-link'
                        }
                    ]
                });
            }
        }
        let button = [
            {
                "name": "single_select",
                "buttonParamsJson": `{\n  title: 'SCHEDULE JKT48 ${month.toUpperCase()} ${year}',\n  sections: ${JSON.stringify(jkt48card)}\n}`
            }
        ];
        let buffer = await getBuffer('https://files.catbox.moe/ulw5b5.png');
        sendButtonImage(m.chat, "*乂 SCHEDULE JKT48*", teks, buffer, button, m);
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;
        
case 'jkt48mem': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        const members = await getJKT48Members();
        if (!members || members.length === 0) return newReply('Tidak ditemukan member yang relevan.');
        let jkt48card = [];
        let no = 1;
        for (let member of members) {
            jkt48card.push({
                header: `${no++}. ${member.name}`,
                title: `${member.name} | Detail: ${member.profileLink}`,
                description: `Cek Informasi Lengkap ${member.name}`,
                id: `.jkt48memdetail ${member.name}`,
            });
        }
        let button = [
            {
                "name": "single_select",
                "buttonParamsJson": `{\n  "title": "MEMBER JKT48",\n  "sections": [{ "title": "Pilih Member", "rows": ${JSON.stringify(jkt48card)} }]}\n}`
            }
        ];
        let buffer = await getBuffer('https://files.catbox.moe/ulw5b5.png');
        sendButtonImage(m.chat, "*乂 DAFTAR MEMBER JKT48*", "", buffer, button, m);
        await limitReduction(m, prefix, wm);
    } catch (error) {
       console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;
        
case 'jkt48memdetail': { //
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply(`Contoh: ${prefix + command} Alya Amanda`);
    try {
        const members = await getJKT48Members();
        const search = await ytsearch(`#KuSangatSuka JKT48 ${text} @JKT48 Youtube Official`);
        const { url } = search.all[0];
        const urls = url
        const quality = '480';
        const downloadUrl = await downloadVideoYT(url, quality);
        if (!members || members.length === 0) {
            return newReply('Tidak ditemukan anggota yang relevan.');
        }
        const member = members.find(m => m.name.toLowerCase() === text.toLowerCase());
        if (!member) {
            return newReply('Anggota tidak ditemukan. Pastikan nama yang dimasukkan benar.');
        }
        const memberId = member.profileLink.split('/').pop().split('?')[0];
        const detailUrl = `https://jkt48.com/member/detail/id/${memberId}?lang=id`;
        const details = await getJKT48MemberDetails(detailUrl);
        const imageBuffer = await getBuffer(member.imageUrl);
        let detailText = `${litespace("[ MEMBER DETAIL ]")}\n\n`;
        for (const [subject, content] of Object.entries(details)) {
            detailText += `${subject}: ${content}\n`;
        }
        detailText += `Detail: ${detailUrl}`
        wbk.sendMessage(m.chat, {video: {url: downloadUrl}, caption: detailText}, { quoted: m });
        await limitReduction(m, prefix, wm);
    } catch (error) {
        console.log(error);
        await newReply(`‼️ERROR HUBUNGI OWNER‼️\n_Ada kesalahan saat menghubungi penyedia API/Server_`);
        await noLimitReduction(m, prefix, wm);
        db.data.settings[botNumber].totalError += 1;
    }
}
break;        