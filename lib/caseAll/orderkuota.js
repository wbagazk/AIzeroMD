case 'deposito2': {
    if (m.isGroup) return newReply("Deposit hanya bisa dilakukan di private chat!");
    if (!db.data.users[m.sender]) {
        db.data.users[m.sender] = {
            status_deposit: false,
            orderkuota: null
        };
    }
    if (typeof db.data.users[m.sender].status_deposit === "undefined") {
        db.data.users[m.sender].status_deposit = false;
    }
    if (db.data.users[m.sender].status_deposit === true) {
        return newReply("Masih ada transaksi yang belum diselesaikan, ketik *.bataldeposit* untuk membatalkan transaksi sebelumnya!");
    }
    let teks = `➔ *Contoh:* \`.deposito jumlah\``;
    if (!text) return newReply(teks);
    let input = text.split(",");
    let amount = input[0] ? parseInt(input[0].trim()) : null;
    if (!amount || amount < 1) {
        return newReply("Minimal deposit adalah Rp1000. Contoh: .deposit 1000");
    }
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let totalAmount = amount + generateRandomNumber(10, 20);
    const get = await axios.get(`https://linecloud.my.id/api/orkut/createpayment?apikey=Wira&amount=${totalAmount}&codeqr=${global.codeqr}`);
    let paymentDetails = `
*▧ INFORMASI PEMBAYARAN*

 *• 🆔 ID :* ${get.data.result.transactionId}
 *• 💸 Total Pembayaran :* Rp${await toRupiah(get.data.result.amount)}
 *• ⏰ Expired :* 5 menit

*📌 Catatan Penting:*
*Pembayaran melalui QRIS hanya berlaku selama 5 menit.*

*🔔 Cara Membatalkan:*
Ketik .bataldeposit jika Anda ingin membatalkan transaksi ini.`;
    const message = await wbk.sendMessage(m.chat, {
        product: {
            productImage: {
                url: get.data.result.qrImageUrl
            },
            productImageCount: 1,
            title: `${command.toUpperCase()} by WBK`,
            description: paymentDetails,
            priceAmount1000: `${amount}` * 1000,
            currencyCode: "IDR",
            retailerId: "100000",
            url: `https://wa.me/${botNumber}`,
        },
        businessOwnerJid: m.sender,
        caption: paymentDetails,
        title: `Silahkan Scan Qris Diatas Ya Kak✨`,
        footer: wm,
        media: true,
        viewOnce: true,
        shop: "WA",
        id: "689739h2dgshG",
        quoted: m,
        ephemeralExpiration: m.expiration
    })
    db.data.users[m.sender].status_deposit = true;
    db.data.users[m.sender].orderkuota = {
        msg: message,
        chat: m.sender,
        idDeposit: get.data.result.transactionId,
        amount: get.data.result.amount.toString(),
        exp: function() {
            setTimeout(async () => {
                if (db.data.users[m.sender].status_deposit === true && db.data.users[m.sender].orderkuota && db.data.users[m.sender].orderkuota.amount) {
                    await wbk.sendMessage(db.data.users[m.sender].orderkuota.chat, {
                        text: "QRIS Pembayaran telah expired!"
                    }, {
                        quoted: db.data.users[m.sender].orderkuota.msg
                    });
                    await wbk.sendMessage(db.data.users[m.sender].orderkuota.chat, {
                        delete: db.data.users[m.sender].orderkuota.msg.key
                    });
                    db.data.users[m.sender].status_deposit = false;
                    delete db.data.users[m.sender].orderkuota;
                }
            }, 300000); // 5 menit
        }
    };
    await db.data.users[m.sender].orderkuota.exp();
    while (db.data.users[m.sender].status_deposit === true && db.data.users[m.sender].orderkuota && db.data.users[m.sender].orderkuota.amount) {
        await sleep(15000); 
        const resultcek = await axios.get(`https://linecloud.my.id/api/orkut/cekstatus?apikey=Wira&merchant=${global.merchant}&keyorkut=${global.keyorkut}`);
        const req = await resultcek.data.amount;
        if (db.data.users[m.sender].orderkuota && req == db.data.users[m.sender].orderkuota.amount) {
            db.data.users[m.sender].status_deposit = false; 
            await wbk.sendMessage(db.data.users[m.sender].orderkuota.chat, {
                delete: db.data.users[m.sender].orderkuota.msg.key
            });
            await wbk.sendMessage(db.data.users[m.sender].orderkuota.chat, {
                text: `
*PEMBAYARAN BERHASIL ☑️*

 *• 🆔 ID :* ${db.data.users[m.sender].orderkuota.idDeposit}
 *• 💸 Total Pembayaran :* Rp${await toRupiah(db.data.users[m.sender].orderkuota.amount)}
 *• ♻️ Payment :* ${resultcek.data.brand_name}

Saldo Anda akan segera diproses.`
            }, {
                quoted: db.data.users[m.sender].orderkuota.msg
            });
            db.data.users[m.sender].uang = (db.data.users[m.sender].uang || 0) + parseInt(db.data.users[m.sender].orderkuota.amount);
        }
    }
}
break;      

case 'bataldeposit2': {
    if (m.isGroup) return newReply("Pembatalan deposit hanya bisa dilakukan di private chat!");
    if (!db.data.users[m.sender] || !db.data.users[m.sender].status_deposit) return newReply("Anda tidak memiliki transaksi deposit yang sedang berlangsung.");
    const orderkuota = db.data.users[m.sender].orderkuota;
    if (!orderkuota || !orderkuota.chat || !orderkuota.msg) return newReply("Transaksi deposit tidak valid atau sudah dibatalkan.");
    await wbk.sendMessage(orderkuota.chat, {
        text: "Transaksi deposit Anda telah dibatalkan.",
        quoted: orderkuota.msg.key
    });
    db.data.users[m.sender].status_deposit = false;
    delete db.data.users[m.sender].orderkuota;
    if (orderkuota.msg.key) {
        await wbk.sendMessage(orderkuota.chat, {
            delete: orderkuota.msg.key
        });
    }
    return newReply("Sukses membatalkan transaksi deposit.");
}
break;

case 'addsewa':
case 'buysewa': {
    if (m.isGroup) return newReply("Sewa bot hanya bisa dilakukan di private chat!");
    let sewaData = readSewaDatabase();
    let userSewa = sewaData[m.sender] || { status_sewa: false, orderSewa: null };
    if (userSewa.status_sewa === true) {
        return newReply("1 Nomer hanya bisa dugunakan untuk 1 group!");
    }
    let teks = `➔ *Contoh:* \`${prefix + command} jumlah_hari link_grup\``;
    if (!text) return newReply(teks);
    let input = text.split(" ");
    let days = input[0] ? parseInt(input[0].trim()) : null;
    let groupLink = input[1] ? input[1].trim() : null;
    if (!days || !groupLink) {
        return newReply("Format salah! Contoh: .addsewa 7 https://chat.whatsapp.com/xxxxx");
    }
    let amount;
    switch (days) {
        case 1:
            amount = 2000;
            break;
        case 7:
            amount = 4000;
            break;
        case 14:
            amount = 7000;
            break;
        case 30:
            amount = 12000;
            break;
        default:
            return newReply('❌ Durasi tidak valid. Gunakan kombinasi berikut:\n- 7 hari untuk Rp10.000\n- 14 hari untuk Rp20.000\n- 30 hari untuk Rp40.000.');
    }
    let [_, groupId] = groupLink.match(/chat.whatsapp.com\/([0-9A-Za-z]{20,24})/) || [];
    if (!groupId) {
        return newReply('❌ Link grup tidak valid. Pastikan Anda memasukkan link grup yang benar.');
    }
    let groupName;
    try {
        let data = await wbk.groupGetInviteInfo(groupId);
        groupName = data.subject;
    } catch (error) {
        return newReply('❌ Gagal mendapatkan informasi grup. Pastikan link grup valid.');
    }
    const rentalDuration = 86400 * days;
    const now = new Date().getTime();
    const fee = Math.floor(Math.random() * 678);
    const totalAmount = amount + fee;
    try {
        const paymentResponse = await axios.get(`https://linecloud.my.id/api/orkut/createpayment?apikey=Wira&amount=${totalAmount}&codeqr=${global.codeqr}`);
        const paymentData = paymentResponse.data;
        if (!paymentData.result || !paymentData.result.qrImageUrl) {
            throw new Error('Gagal membuat pembayaran. Coba lagi nanti.');
        }
        const paymentDetails = `*DETAIL PEMBAYARAN*\n\n- *ID Transaksi:* ${paymentData.result.transactionId}\n- *Jumlah:* Rp ${amount.toLocaleString('id-ID')}\n- *Biaya Admin:* Rp ${fee.toLocaleString('id-ID')}\n- *Total Pembayaran:* Rp ${totalAmount.toLocaleString('id-ID')}\n- *Batas Waktu Pembayaran:* 5 Menit\n\n*Silakan scan QRIS di atas untuk melanjutkan pembayaran.*`;
        const message = await wbk.sendMessage(m.chat, {
            product: {
                productImage: {
                    url: paymentData.result.qrImageUrl
                },
                productImageCount: 1,
                title: `${command.toUpperCase()} by WBK`,
                description: paymentDetails,
                priceAmount1000: `${totalAmount}` * 1000,
                currencyCode: "IDR",
                retailerId: "100000",
                url: `https://wa.me/${botNumber}`,
            },
            businessOwnerJid: m.sender,
            caption: paymentDetails,
            title: `Silahkan Scan Qris Diatas Ya Kak✨`,
            footer: wm,
            media: true,
            viewOnce: true,
            shop: "WA",
            id: "689739h2dgshG",
            quoted: m,
            ephemeralExpiration: m.expiration
        })
        const statusApiUrl = `https://linecloud.my.id/api/orkut/cekstatus?apikey=Wira&merchant=${global.merchant}&keyorkut=${global.keyorkut}`;
        let isTransactionComplete = false;
        const maxWaitTime = 5 * 60 * 1000;
        const startTime = Date.now();
        while (!isTransactionComplete && Date.now() - startTime < maxWaitTime) {
            try {
                const statusResponse = await axios.get(statusApiUrl);
                const statusData = statusResponse.data;
                if (statusData && statusData.amount && parseInt(statusData.amount) === totalAmount) {
                    isTransactionComplete = true;
                    await wbk.groupAcceptInvite(groupId);
                    if (now < global.db.data.chats[m.chat].expired) {
                        global.db.data.chats[m.chat].expired += rentalDuration;
                    } else {
                        global.db.data.chats[m.chat].expired = now + rentalDuration;
                    }
                    userSewa.status_sewa = true;
                    userSewa.orderSewa = {
                        msg: message,
                        chat: m.sender,
                        idSewa: paymentData.result.transactionId,
                        amount: totalAmount.toString(),
                        exp: now + rentalDuration,
                        groupId: `${groupId}@g.us`,
                        groupName: groupName, 
                        groupLink: groupLink 
                    };
                    sewaData[m.sender] = userSewa;
                    writeSewaDatabase(sewaData);
                    await wbk.sendMessage(m.chat, {
                        delete: message.key
                    });
                    function msToDate(ms) {
                        const seconds = Math.floor((ms / 1000) % 60);
                        const minutes = Math.floor((ms / (1000 * 60)) % 60);
                        const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
                        const days = Math.floor(ms / (1000 * 60 * 60 * 24));
                        let result = '';
                        if (days > 0) result += `${days} hari `;
                        if (hours > 0) result += `${hours} jam `;
                        if (minutes > 0) result += `${minutes} menit `;
                        if (seconds > 0) result += `${seconds} detik`;
                        return result.trim() || '0 detik';
                    }
                    const successNotification = `✅ *PEMBAYARAN BERHASIL!*\n\n- *ID Transaksi:* ${paymentData.result.transactionId}\n- *Jumlah:* Rp ${amount.toLocaleString('id-ID')}\n- *Durasi Sewa:* ${days} hari\nWaktu Berjalan: ${msToDate(global.db.data.chats[m.chat].expired - now)}\n\n*Bot telah masuk grup dan aktif selama ${days} hari.*`;
                    await wbk.sendMessage(m.sender, {
                        text: successNotification
                    });
                    return;
                }
            } catch (error) {
                console.error('Error memeriksa status transaksi:', error);
            }
            await new Promise(resolve => setTimeout(resolve, 10000));
        }
        if (!isTransactionComplete) {
            await wbk.sendMessage(m.chat, {
                delete: message.key
            });
            const expiredText = `❌ *WAKTU PEMBAYARAN TELAH HABIS!*\n\nTransaksi Anda melebihi batas waktu pembayaran. Silakan coba lagi dengan membuat transaksi baru.`;
            await wbk.sendMessage(m.chat, {
                text: expiredText
            });
        }
    } catch (error) {
        console.error('Error membuat atau memeriksa pembayaran:', error);
        return wbk.sendMessage(m.chat, {
            text: '❌ Gagal membuat atau memeriksa pembayaran. Silakan coba lagi nanti.'
        });
    }
    let chat = global.db.data.chats[m.chat];
    if (chat.expired > 0 && new Date() - chat.expired > 0) {
        await m.reply('Waktu sewa bot telah habis! Bot akan keluar dari grup ini.');
        await wbk.groupLeave(m.chat);
    }
}
break;
     
case 'batalsewa': {
    if (m.isGroup) return newReply("Pembatalan sewa hanya bisa dilakukan di private chat!");
    let sewaData = readSewaDatabase();
    if (!sewaData[m.sender] || !sewaData[m.sender].status_sewa) {
        return newReply("Anda tidak memiliki transaksi sewa yang sedang berlangsung.");
    }
    const orderSewa = sewaData[m.sender].orderSewa;
    await wbk.sendMessage(orderSewa.chat, {
        text: "Transaksi sewa Anda telah dibatalkan."
    }, {
        quoted: orderSewa.msg
    });
    sewaData[m.sender].status_sewa = false;
    delete sewaData[m.sender].orderSewa;
    writeSewaDatabase(sewaData);
    await wbk.sendMessage(orderSewa.chat, {
        delete: orderSewa.msg.key
    });
    return newReply("Sukses membatalkan transaksi sewa.");
}
break;        
 
case 'listsewa': {
    if (m.isGroup) return newReply("Perintah ini hanya bisa dilakukan di private chat!");
    let sewaData = readSewaDatabase();
    let response = `📋 *Daftar Sewa Aktif:*\n\n`;
    if (Object.keys(sewaData).length === 0) {
        return newReply("Tidak ada transaksi sewa yang sedang berlangsung.");
    }
    for (let user in sewaData) {
        let userSewa = sewaData[user];
        if (userSewa.status_sewa) {
            response += `- *Pengguna:* ${user}\n`;
            response += `- *Chat:* ${userSewa.orderSewa.chat}\n`;
            response += `- *Group ID:* ${userSewa.orderSewa.groupId}\n`;
            response += `- *Group Name:* ${userSewa.orderSewa.groupName}\n`;
            response += `- *Link Group:* ${userSewa.orderSewa.groupLink}\n`;
            response += `- *Waktu Kedaluwarsa:* ${formatDateToIndonesia(new Date(userSewa.orderSewa.exp))}\n\n`;
        }
    }

    await newReply(response);
}
break;