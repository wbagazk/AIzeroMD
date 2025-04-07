const fetch = require('node-fetch');

const paymentConfig = {
    email: 'info.wirdiyanbagask@gmail.com',
    userID: 'wbagazk',
    name: 'WBK',
    prices: {
        3: 2000,      // 3 Hari
        7: 5000,      // 1 Minggu
        14: 10000,    // 2 Minggu
        21: 15000,    // 3 Minggu
        30: 25000,    // 1 Bulan
        60: 40000,    // 2 Bulan
        90: 50000,    // 3 Bulan
        365: 85000,   // 1 Tahun
    },
};

async function checkSaweriaPayment(userID, nominal, haruka, m, user) {
    let isChecking = false;
    let maxChecks = 5;
    let attempts = 0;

    const interval = setInterval(async () => {
        if (attempts >= maxChecks) {
            clearInterval(interval);
            if (user.payment) delete user.payment;
            newReply('❌ Verifikasi pembayaran gagal. Silakan coba lagi nanti.');
            return;
        }

        attempts++;
        if (isChecking) return; // Hindari overlap permintaan
        isChecking = true;

        try {
            console.log(`🔍 Verifikasi pembayaran (${attempts}/${maxChecks}) untuk refID: ${user.payment?.refID}`);

            // Panggil API untuk memeriksa status pembayaran
            const response = await fetch(`https://itzpire.com/saweria/check-payment?id=${user.payment?.refID}&user_id=${userID}`);
            if (!response.ok) throw new Error('Gagal menerima respons dari server.');

            const checkJson = await response.json();
            console.log(`📄 Respons API:`, checkJson);

            if (checkJson.msg === "OA4XSN" || (checkJson.status === "success" && checkJson.data?.status === "success")) {
                clearInterval(interval);

                // Validasi nominal pembayaran dan hitung durasi premium
                const duration = getPremiumDurationFromNominal(nominal);
                if (!duration) {
                    newReply('❌ Nominal tidak valid untuk aktivasi premium.');
                    return;
                }

                // Perbarui status premium pengguna
                const now = Date.now();
                user.premium = true;
                user.premiumTime = user.premiumTime && user.premiumTime > now 
                    ? user.premiumTime + duration 
                    : now + duration;
                delete user.payment;

                const successMessage = `✅ *Pembayaran Berhasil!*\n\n💰 *Nominal:* Rp${nominal}\n⏳ *Premium Aktif Selama:* ${duration / 86400000} Hari`;
                await haruka.sendMessage(m.chat, { text: successMessage }, { quoted: m });
                return;
            }

            if (checkJson.data?.status === "failed") {
                clearInterval(interval);
                delete user.payment;
                newReply('❌ Pembayaran gagal. Silakan coba lagi.');
            } else {
                console.log(`Status pembayaran: ${checkJson.data?.status || 'pending'}. Proses berlanjut...`);
            }
        } catch (error) {
            console.error(`❌ Kesalahan Verifikasi Pembayaran:`, error.message);
        } finally {
            isChecking = false;
        }
    }, 15000); // Interval pengecekan setiap 20 detik
}

// Fungsi untuk menghitung nominal berdasarkan jumlah hari
function getPremiumDurationFromNominal(nominal) {
    const days = Object.entries(paymentConfig.prices).find(([_, price]) => price === nominal)?.[0];
    return days ? parseInt(days) * 86400000 : null;
}

module.exports = { checkSaweriaPayment, getPremiumDurationFromNominal };