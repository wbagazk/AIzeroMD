case 'deposit': {
    if (m.isGroup) return newReply("Deposit hanya bisa dilakukan di private chat!");
    if (!db.data.users[m.sender]) {
        db.data.users[m.sender] = {
            status_deposit: false,
            atlantic: null
        };
    }
    if (typeof db.data.users[m.sender].status_deposit === "undefined") {
        db.data.users[m.sender].status_deposit = false;
    }
    if (db.data.users[m.sender].status_deposit === true) {
        return newReply("Masih ada transaksi yang belum diselesaikan, ketik *.bataldeposit* untuk membatalkan transaksi sebelumnya!");
    }
    let teks = "Minimal deposit adalah Rp500. Contoh: " + prefix + command + " 500";
    if (!text) return newReply(teks);
    let input = text.split(",");
    let amount = input[0] ? parseInt(input[0].trim()) : null;
    if (!amount || amount < 500) {
        return newReply("Minimal deposit adalah Rp500. Contoh: " + prefix + command + " 500");
    }
    const feeAdmin = Math.floor(Math.random() * (200 - 50 + 1)) + 50; 
    const totalDeposit = amount + feeAdmin;
    const reffId = require('crypto').randomBytes(7).toString('hex').toUpperCase();
    const type = 'ewallet';
    const metode = 'qrisfast';
    let qrFilePath;
    try {
        const depositResponse = await atlaDeposit(reffId, totalDeposit, type, metode);
        const qrString = depositResponse.data.qr_string;
        qrFilePath = `./temp/qr_${Date.now()}.png`;
        await QRCode.toFile(qrFilePath, qrString, {
            errorCorrectionLevel: 'H',
            type: 'png',
            quality: 0.92,
            margin: 1
        });
        const qrImageUrl = await toUrlUpload(qrFilePath);
        const paymentDetails = `
📄 ${litespace("INFORMASI PEMBAYARAN")}

 *• 🆔 ID :* ${depositResponse.data.id}
 *• 🆔 Reff ID :* ${depositResponse.data.reff_id}
 *• 💸 Deposit :* Rp${await toRupiah(amount)}
 *• 💸 Biaya Admin :* Rp${await toRupiah(feeAdmin)}
 *• 💸 Total Pembayaran :* Rp${await toRupiah(totalDeposit)}
 *• ⏰ Dibuat :* ${depositResponse.data.created_at}
 *• ⏰ Kadaluarsa :* ${depositResponse.data.expired_at}

📌 ${litespace("Catatan Penting:")}
> *Pembayaran melalui QRIS hanya berlaku selama 1 Jam.*

🔔 ${litespace("Cara Pembayaran:")}:
> Screenshot Qris diatas lalu buka aplikasi e-Wallet ataupun m-Banking dan scan Qris tersebut.

🔔 ${litespace("Cara Membatalkan:")}:
> Ketik .bataldeposit jika Anda ingin membatalkan transaksi ini.`;
        const message = await wbk.sendMessage(m.chat, {
            product: {
                productImage: { url: qrImageUrl },
                productImageCount: 1,
                title: `DEPOSIT`,
                description: paymentDetails,
                priceAmount1000: totalDeposit * 1000,
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
            ephemeralExpiration: m.expiration
        }, { quoted: m });
        db.data.users[m.sender].status_deposit = true;
        db.data.users[m.sender].atlantic = {
            msg: message,
            chat: m.sender,
            idDeposit: depositResponse.data.id,
            amount: depositResponse.data.nominal.toString(),
            exp: function() {
                setTimeout(async () => {
                    if (db.data.users[m.sender].status_deposit === true && db.data.users[m.sender].atlantic && db.data.users[m.sender].atlantic.amount) {
                        await wbk.sendMessage(db.data.users[m.sender].atlantic.chat, { delete: db.data.users[m.sender].atlantic.msg.key });
                        await wbk.sendMessage(db.data.users[m.sender].atlantic.chat, { text: "QRIS Pembayaran telah expired!" }, { quoted: m });
                        db.data.users[m.sender].status_deposit = false;
                        delete db.data.users[m.sender].atlantic;
                    }
                }, 3600000); // 1 jam
            }
        };
        await db.data.users[m.sender].atlantic.exp();
        const paymentSuccess = `
📄 ${litespace("PEMBAYARAN BERHASIL")}

 *• 🆔 ID :* ${depositResponse.data.id}
 *• 🆔 Reff ID :* ${depositResponse.data.reff_id}
 *• 💸 Deposit :* Rp${await toRupiah(amount)}
 *• 💸 Biaya Admin :* Rp${await toRupiah(feeAdmin)}
 *• 💸 Total Pembayaran :* Rp${await toRupiah(totalDeposit)}
 *• ⏰ Sukses :*${time}`;
        const intervalId = setInterval(async () => {
            try {
                const statusResponse = await atlaDepositStatus(depositResponse.data.id);
                if (statusResponse.data.status === 'success') {
                    await wbk.sendMessage(m.chat, { text: paymentSuccess });
                    await wbk.sendMessage(db.data.users[m.sender].atlantic.chat, { delete: db.data.users[m.sender].atlantic.msg.key });
                    db.data.users[m.sender].status_deposit = false;
                    delete db.data.users[m.sender].atlantic;
                    clearInterval(intervalId);
                } else if (statusResponse.data.status === 'pending') {
                }
            } catch (error) {
                console.error('Error saat mengecek status deposit:', error);
                await newReply("Terjadi kesalahan saat memeriksa status deposit.");
            }
        }, 5000); // Cek status setiap 5 detik
        setTimeout(() => {
            clearInterval(intervalId);
            db.data.users[m.sender].status_deposit = false;
            delete db.data.users[m.sender].atlantic;
        }, 3600000); // 1 jam
    } catch (error) {
        console.error('Error saat membuat deposit:', error);
        return newReply("Terjadi kesalahan saat memproses deposit.");
    } finally {
        if (fs.existsSync(qrFilePath)) {
            fs.unlinkSync(qrFilePath);
        }
    }
}
break;
        
case 'bataldeposit': {
    if (m.isGroup) return newReply("Pembatalan deposit hanya bisa dilakukan di private chat!");
    if (!db.data.users[m.sender] || !db.data.users[m.sender].status_deposit) {
        return newReply("Anda tidak memiliki transaksi deposit yang sedang berlangsung.");
    }
    const atlantic = db.data.users[m.sender].atlantic;
    if (!atlantic || !atlantic.chat || !atlantic.msg) {
        return newReply("Transaksi deposit tidak valid atau sudah dibatalkan.");
    }
    try {
        const cancelResponse = await atlaDepositCancel(atlantic.idDeposit);
        if (cancelResponse.status) {
            db.data.users[m.sender].status_deposit = false;
            delete db.data.users[m.sender].atlantic;
            if (atlantic.msg.key) {
                await wbk.sendMessage(atlantic.chat, {
                    delete: atlantic.msg.key
                });
            }
            return newReply("Sukses membatalkan transaksi deposit.");
        } else {
            return newReply("Gagal membatalkan transaksi deposit. Silakan coba lagi.");
        }
    } catch (error) {
        console.error('Error saat membatalkan deposit:', error);
        return newReply(`Terjadi kesalahan saat membatalkan deposit: ${error.message}`);
    }
}
break;

case 'order': {
    const args = text.split(" ");
    if (args.length < 2) return newReply(`*Contoh Penggunaan:*\n${prefix}order <code> <target>\n\nContoh: ${prefix}order ISAK45 08123456789`);
    const code = args[0];
    const target = args[1];
    await reactionMessage('📦');
    function generateReffId() {
        const prefix = 'WBK-';
        const length = 10;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters[randomIndex];
        }
        return prefix + randomString;
    }
    try {
        const reffId = generateReffId();
        const orderResponse = await atlaOrder(code, reffId, target);
        const originalPrice = orderResponse.data.price;
        const markupPrice = originalPrice * 1.025;
        const roundedPrice = Math.round(markupPrice); 
        const formattedPrice = await toRupiah(roundedPrice);
        console.log(orderResponse);
        const id = orderResponse.data.id;
        const type = 'prabayar';
        const checkOrderStatus = async (id, type) => {
            let statusResponse;
            let attempts = 0;
            const maxAttempts = 10;
            const delay = 2000;
            while (attempts < maxAttempts) {
                statusResponse = await atlaOrderStatus(apiKey, id, type);
                console.log(statusResponse);
                if (statusResponse.status === 'success') {
                    return statusResponse;
                }
                attempts++;
                await new Promise(resolve => setTimeout(resolve, delay));
            }
            return statusResponse;
        };
        const finalStatusResponse = await checkOrderStatus(id, type);
        const buyDetails = `
📄 ${litespace("INFORMASI PEMBELIAN")}

 *• 📃 Order :* ${orderResponse.data.layanan}
 *• 💬 Status :* ${finalStatusResponse.status === 'success' ? 'Transaksi Berhasil' : 'Transaksi Pending'}
 *• 💸 Harga :* Rp${formattedPrice}
 *• 🆔 ID :* ${orderResponse.data.reff_id}
 *• 📦 SN :* ${orderResponse.data.sn}`;
        if (finalStatusResponse.data.status === 'success') {
            return newReply(buyDetails);
        } else {
            return newReply(buyDetails);
        }
    } catch (error) {
        console.error('Error saat melakukan order:', error);
        return newReply(`${error.message}`);
    }
}
break;
        
case 'pricelist': {
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    try {
        await reactionMessage('🔎');
        let type = "prabayar";
        let response = await atlaPriceList(type);
        if (!response || !Array.isArray(response.data) || response.data.length === 0) {
            return newReply('❌ Data pricelist tidak ditemukan.');
        }
        let categories = new Set();
        for (const item of response.data) {
            if (item.category) {
                categories.add(item.category);
            }
        }
        if (categories.size === 0) {
            return newReply('❌ Tidak ada kategori yang tersedia.');
        }
        let pricelistSections = [{
            title: "📌 Pilih Kategori",
            rows: [...categories].map(category => ({
                header: ``,
                title: category,
                id: `.subpricelist ${category}`
            }))
        }];
        let button = [{
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "💰 PRICE LIST ATLANTIC 💰",
                sections: pricelistSections
            })
        }];
        await wbk.sendButtonText(m.chat, button, "*💰 PRICE LIST ATLANTIC 💰*", "Silakan pilih kategori:", m);
        await reactionMessage('✅');
    } catch (err) {
        console.error(err);
        await newReply(`‼️ ERROR ‼️\n_Ada kesalahan saat mengambil data harga_\n\n${err.message}`);
        db.data.settings[botNumber].totalError += 1;
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;
        
case 'subpricelist': { //
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    if (!text) return newReply('❌ Harap masukkan kategori. Contoh: !subpricelist Data Internet');
    try {
        await reactionMessage('🔎');
        let type = "prabayar";
        let response = await atlaPriceList(type);
        if (!response || !Array.isArray(response.data) || response.data.length === 0) {
            return newReply('❌ Data pricelist tidak ditemukan.');
        }
        let providers = new Set();
        for (const item of response.data) {
            if (item.category === text && item.provider) {
                providers.add(item.provider);
            }
        }
        if (providers.size === 0) {
            return newReply(`❌ Tidak ada provider yang tersedia untuk kategori ${text}.`);
        }
        let providerSections = [{
            title: `📌 Pilih Provider - ${text}`,
            rows: [...providers].map(provider => ({
                header: "",
                title: provider,
                id: `.detailpricelist ${text}|${provider}`
            }))
        }];
        let button = [{
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: `💰 PROVIDER LIST - ${text} 💰`,
                sections: providerSections
            })
        }];
        await wbk.sendButtonText(m.chat, button, `*💰 PROVIDER LIST - ${text} 💰*`, "Silakan pilih provider:", m);
        await reactionMessage('✅');
    } catch (err) {
        console.error(err);
        await newReply(`‼️ ERROR ‼️\n_Ada kesalahan saat mengambil data provider_\n\n${err.message}`);
        db.data.settings[botNumber].totalError += 1;
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'detailpricelist': { //
    if (!isPremium && db.data.users[m.sender].limit < 1) return newReply(mess.limit);
    let [category, provider] = text.split('|');
    if (!category || !provider) return newReply('❌ Harap masukkan kategori dan provider dengan format: !detailpricelist <kategori>|<provider>');
    try {
        await reactionMessage('🔎');
        let type = "prabayar";
        let response = await atlaPriceList(type);
        if (!response || !Array.isArray(response.data) || response.data.length === 0) {
            return newReply('❌ Data tidak ditemukan.');
        }
        let filteredItems = response.data.filter(item => 
            item.category.toLowerCase() === category.toLowerCase() && 
            item.provider.toLowerCase() === provider.toLowerCase()
        );
        if (filteredItems.length === 0) return newReply('❌ Tidak ada item yang sesuai.');
        filteredItems.sort((a, b) => {
            let nameA = a.name.toLowerCase().match(/\d+|\D+/g) || [];
            let nameB = b.name.toLowerCase().match(/\d+|\D+/g) || [];
            for (let i = 0; i < Math.min(nameA.length, nameB.length); i++) {
                if (!isNaN(nameA[i]) && !isNaN(nameB[i])) {
                    let numA = parseInt(nameA[i]);
                    let numB = parseInt(nameB[i]);
                    if (numA !== numB) return numA - numB;
                } else if (nameA[i] !== nameB[i]) {
                    return nameA[i].localeCompare(nameB[i]);
                }
            }
            let priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
            let priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
            return priceA - priceB;
        });
        let pricelistSections = [{
            title: "📌 Pilih Produk",
            rows: filteredItems.map(item => {
                let price = Math.round(parseInt(item.price.replace(/[^0-9]/g, '')) * 1.025);
                let formattedPrice = `Rp. ${price.toLocaleString('id-ID')}`;
                return {
                    header: "",
                    title: item.name,
                    description: formattedPrice,
                    id: `.order ${category}|${provider}|${item.name}|${item.code}`
                };
            })
        }];
        let button = [{
            name: "single_select",
            buttonParamsJson: JSON.stringify({
                title: "💰 DETAIL PRICE LIST 💰",
                sections: pricelistSections
            })
        }];
        await wbk.sendButtonText(m.chat, button, `*💰 DETAIL PRICE LIST - ${category} - ${provider} 💰*`, "Silakan pilih layanan:", m);
        await reactionMessage('✅');
    } catch (err) {
        console.error(err);
        await newReply(`‼️ ERROR ‼️\n_Ada kesalahan saat mengambil data layanan_\n\n${err.message}`);
        db.data.settings[botNumber].totalError += 1;
    }
    db.data.settings[botNumber].totalhit += 1;
}
break;

case 'topupdana': {
    const type = "prabayar";
    await reactionMessage('📃');
    try {
        const priceListResponse = await atlaPriceList(type);
        console.log(priceListResponse);
        if (priceListResponse.status) {
            let priceListMessage = `*Daftar Harga untuk ${type.charAt(0).toUpperCase() + type.slice(1)}:*\n\n`;
            let index = 1;
            for (const item of priceListResponse.data) {
                if (item.provider === 'DANA' && item.category === 'E-Money') {
                    const originalPrice = item.price;
                    const markupPrice = originalPrice * 1.025;
                    const roundedPrice = Math.round(markupPrice); 
                    const formattedPrice = await toRupiah(roundedPrice);
                    priceListMessage += `${index}. ${item.name}\n`;
                    priceListMessage += `> Harga: Rp${formattedPrice}\n`;
                    priceListMessage += `> Kode Produk: ${item.code}\n`;
                    priceListMessage += `> Status: ${item.status}\n\n`;
                    index++;
                }
            }
            if (index === 1) {
                return newReply("Tidak ada item prabayar yang tersedia untuk provider 'TELKOMSEL' dengan type 'Umum'.");
            }
            return await newReply(priceListMessage);
        } else {
            return newReply("Gagal mendapatkan daftar harga. Silakan coba lagi.");
        }
    } catch (error) {
        console.error('Error saat mendapatkan pricelist:', error);
        return newReply(`Terjadi kesalahan: ${error.message}`);
    }
}
break;   
        
case 'pulsatelkomsel': {
    const type = "prabayar";
    await reactionMessage('📃');
    try {
        const priceListResponse = await atlaPriceList(type);
        console.log(priceListResponse);
        if (priceListResponse.status) {
            let priceListMessage = `*Daftar Harga untuk ${type.charAt(0).toUpperCase() + type.slice(1)}:*\n\n`;
            let index = 1;
            for (const item of priceListResponse.data) {
                if (item.provider === 'TELKOMSEL' && item.category === 'Pulsa Reguler' && item.type === 'Umum') {
                    const originalPrice = item.price;
                    const markupPrice = originalPrice * 1.025;
                    const roundedPrice = Math.round(markupPrice); 
                    const formattedPrice = await toRupiah(roundedPrice);
                    priceListMessage += `${index}. ${item.name}\n`;
                    priceListMessage += `> Harga: Rp${formattedPrice}\n`;
                    priceListMessage += `> Kode Produk: ${item.code}\n`;
                    priceListMessage += `> Status: ${item.status}\n\n`;
                    index++;
                }
            }
            if (index === 1) {
                return newReply("Tidak ada item prabayar yang tersedia untuk provider 'TELKOMSEL' dengan type 'Umum'.");
            }
            return await newReply(priceListMessage);
        } else {
            return newReply("Gagal mendapatkan daftar harga. Silakan coba lagi.");
        }
    } catch (error) {
        console.error('Error saat mendapatkan pricelist:', error);
        return newReply(`Terjadi kesalahan: ${error.message}`);
    }
}
break;