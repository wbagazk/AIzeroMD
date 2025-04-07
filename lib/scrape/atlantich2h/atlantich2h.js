const axios = require('axios');
const qs = require('qs');

const BASE_URL = "https://atlantich2h.com";
const BASE_APIKEY = global.apike.atlantic;

async function atlaDeposit(reffId, nominal, type, metode) {
    try {
        const response = await axios.post(
            `${BASE_URL}/deposit/create`,
            new URLSearchParams({
                api_key: `${BASE_APIKEY}`,
                reff_id: reffId,
                nominal: nominal.toString(),
                type: type,
                metode: metode
            }),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, timeout: 10000 }
        );
        return response.data;
    } catch (error) {
        throw { status: error.response?.status || 500, message: error.response?.data?.message || error.message };
    }
}

async function atlaDepositCancel(id) {
    try {
        const response = await axios.post(
            `${BASE_URL}/deposit/cancel`,
            new URLSearchParams({ 
                api_key: `${BASE_APIKEY}`,
                id: id 
            }),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return response.data;
    } catch (error) {
        throw { status: error.response?.status || 500, message: error.response?.data?.message || error.message };
    }
}

async function atlaDepositStatus(id) {
    try {
        const response = await axios.post(
            `${BASE_URL}/deposit/status`,
            new URLSearchParams({ 
                api_key: `${BASE_APIKEY}`, 
                id: id 
            }),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return response.data;
    } catch (error) {
        throw { status: error.response?.status || 500, message: error.response?.data?.message || error.message };
    }
}

async function atlaOrder(code, reffId, target) {
    try {
        const response = await axios.post(
            `${BASE_URL}/transaksi/create`,
            new URLSearchParams({
                api_key: `${BASE_APIKEY}`,
                code: code,
                reff_id: reffId,
                target: target
            }),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return response.data;
    } catch (error) {
        throw { status: error.response?.status || 500, message: error.response?.data?.message || error.message };
    }
}

async function atlaOrderStatus(id, type) {
    try {
        const response = await axios.post(
            `${BASE_URL}/transaksi/status`,
            new URLSearchParams({
                api_key: `${BASE_APIKEY}`,
                id: id,
                type: type
            }),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return response.data;
    } catch (error) {
        throw { status: error.response?.status || 500, message: error.response?.data?.message || error.message };
    }
}

async function atlaPriceList(type) {
    try {
        const response = await axios.post(
            `${BASE_URL}/layanan/price_list`,
            new URLSearchParams({ 
                api_key: `${BASE_APIKEY}`, 
                type: type 
            }),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return response.data;
    } catch (error) {
        throw { status: error.response?.status || 500, message: error.response?.data?.message || error.message };
    }
}

async function atlaProfile() {
    try {
        const response = await axios.post(
            `${BASE_URL}/get_profile`,
            new URLSearchParams({ 
                api_key: `${BASE_APIKEY}` 
            }),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        return response.data;
    } catch (error) {
        throw { status: error.response?.status || 500, message: error.response?.data?.message || error.message };
    }
}

async function atlaCekRekening(bankCode, target) {
    try {
        const response = await axios.post(
            `${BASE_URL}/transfer/cek_rekening`,
            qs.stringify({
                api_key: `${BASE_APIKEY}`,
                bank_code: bankCode,
                account_number: target
            }),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, maxBodyLength: Infinity }
        );
        return response.data;
    } catch (error) {
        throw { status: error.response?.status || 500, message: error.response?.data?.message || error.message };
    }
}

async function atlaListBank() {
    try {
        const response = await axios.post(
            `${BASE_URL}/transfer/bank_list`,
            qs.stringify({
                api_key: `${BASE_APIKEY}`
            }),
            { 
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                maxBodyLength: Infinity 
            }
        );
        return response.data;
    } catch (error) {
        throw { status: error.response?.status || 500, message: error.response?.data?.message || error.message };
    }
}

module.exports = {
    atlaDeposit,
    atlaDepositCancel,
    atlaDepositStatus,
    atlaOrder,
    atlaOrderStatus,
    atlaPriceList,
    atlaProfile,
    atlaCekRekening,
    atlaListBank
};