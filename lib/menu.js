const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

// STYLE FONT
const { monospace, litespace } = require('./myfunc')
// ========= FUNGSI AMBIL CASE =========

function getCommandsFromFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const caseRegex = /case\s+'([^']+)':\s*{(?!\s*\/\/)/g;
    let commands = [];
    let match;
    let caseCount = 0;
    while ((match = caseRegex.exec(fileContent)) !== null) {
        commands.push(`┃ お ─· ${prefa}${match[1]}`);
        caseCount++;
    }
    return {
        commands: commands.join('\n'),
        caseCount: caseCount
    };
}

// Fungsi spesifik untuk setiap jenis perintah
function getAIImageCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/ai-image.js'));
}
function getAISpeechCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/ai-speech.js'));
}
function getAITextCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/ai-text.js'));
}
function getAnimeCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/anime.js'));
}
function getDownloadCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/download.js'));
}
function getFunCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/fun.js'));
}
function getGameCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/game.js'));
}
function getGroupCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/group.js'));
}
function getInfoBotCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/infobot.js'));
}
function getInfoMeCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/infome.js'));
}
function getInformationCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/information.js'));
}
function getJKT48Commands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/jkt48.js'));
}
function getMakerCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/maker.js'));
}
function getMenfessCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/menfess.js'));
}
function getNewsletterCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/newsletter.js'));
}
function getOtherCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/other.js'));
}
function getOwnerCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/owner.js'));
}
function getPPOBCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/ppobatlantic.js'));
}
function getPushKontakCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/pushkontak.js'));
}
function getRPGCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/rpg.js'));
}
function getSearchCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/search.js'));
}
function getSoundEffectCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/soundeffect.js'));
}
function getSoundTiktokCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/soundtiktok.js'));
}
function getStalkCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/stalk.js'));
}
function getStickerPackCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/stickerpack.js'));
}
function getStoreCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/store.js'));
}
function getToolCommands() {
    return getCommandsFromFile(path.join(__dirname, './caseAll/tool.js'));
}


// ======= FUNGSI AMBIL CASE END ======= 

global.kategoriMenu = (prefix, hituet) => {
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("IPHONE MENU")} ໒  ֵ  ׄ 
┃ お ─· ${prefa}allmenu
┃ お ─· ${prefa}aimenu
┃ お ─· ${prefa}animemenu
┃ お ─· ${prefa}downloadmenu
┃ お ─· ${prefa}funmenu
┃ お ─· ${prefa}gamemenu
┃ お ─· ${prefa}groupmenu
┃ お ─· ${prefa}infobot
┃ お ─· ${prefa}infome
┃ お ─· ${prefa}informationmenu
┃ お ─· ${prefa}jkt48menu
┃ お ─· ${prefa}makermenu
┃ お ─· ${prefa}menfessmenu
┃ お ─· ${prefa}newslattermenu
┃ お ─· ${prefa}othermenu
┃ お ─· ${prefa}ownermenu
┃ お ─· ${prefa}ppobmenu
┃ お ─· ${prefa}rpgmenu
┃ お ─· ${prefa}searchmenu
┃ お ─· ${prefa}soundeffectmenu
┃ お ─· ${prefa}soundtiktokmenu
┃ お ─· ${prefa}stalkmenu
┃ お ─· ${prefa}stickerpackmenu
┃ お ─· ${prefa}toolsmenu
╰──────────── •`}

global.allMenu = (prefix, hituet) => {
    const menus = [
        { title: "AI MENU", commands: [
            { subtitle: "AI IMAGE", commands: getAIImageCommands().commands || "" },
            { subtitle: "AI SPEECH", commands: getAISpeechCommands().commands || "" },
            { subtitle: "AI TEKS", commands: getAITextCommands().commands || "" }
        ]},
        { title: "ANIME MENU", commands: getAnimeCommands().commands || "" },
        { title: "DOWNLOAD MENU", commands: getDownloadCommands().commands || "" },
        { title: "FUN MENU", commands: getFunCommands().commands || "" },
        { title: "GAME MENU", commands: getGameCommands().commands || "" },
        { title: "GROUP MENU", commands: "*Gunakan perintah #groupmenu*" },
        { title: "INFORMATION BOT", commands: getInfoBotCommands().commands || "" },
        { title: "YOUR INFORMATION", commands: getInfoMeCommands().commands || "" },
        { title: "INFORMATION MENU", commands: getInformationCommands().commands || "" },
        { title: "JKT48 MENU", commands: getJKT48Commands().commands || "" },
        { title: "MAKER MENU", commands: getMakerCommands().commands || "" },
        { title: "MENFESS MENU", commands: getMenfessCommands().commands || "" },
        { title: "NEWSLETTER MENU", commands: getNewsletterCommands().commands || "" },
        { title: "OTHER MENU", commands: getOtherCommands().commands || "" },
        { title: "OWNER MENU", commands: "*Gunakan perintah #ownermenu*" },
        { title: "PPOB MENU", commands: getPPOBCommands().commands || "" },
        { title: "PUSHKONTAK MENU", commands: "*Gunakan perintah #pushkontakmenu*" },
        { title: "RPG MENU", commands: getRPGCommands().commands || "" },
        { title: "SEARCH MENU", commands: getSearchCommands().commands || "" },
        { title: "SOUND EFFECT MENU", commands: getSoundEffectCommands().commands || "" },
        { title: "SOUND TIKTOK", commands: getSoundTiktokCommands().commands || "" },
        { title: "STALK MENU", commands: getStalkCommands().commands || "" },
        { title: "STICKER PACK", commands: getStickerPackCommands().commands || "" },
        { title: "STORE MENU", commands: "*Gunakan perintah #storemenu*" },
        { title: "TOOL MENU", commands: getToolCommands().commands || "" }
    ];

    let teks = menus.map(menu => `
╭─ׁ ࣪ ִֶָ☾. ${litespace(menu.title)} ໒  ֵ  ׄ 
${Array.isArray(menu.commands) ? menu.commands.map(sub => `┃\n┃ *${sub.subtitle}*\n${sub.commands}`).join('\n') : menu.commands}
╰──────────── •`).join('\n');
    return teks;
};

global.aiMenu = (prefix, hituet) => {
const { commands: aiimageCommands, caseCount: aiimageCount } = getAIImageCommands();
const { commands: aispeechCommands, caseCount: aispeechCount } = getAISpeechCommands();
const { commands: aitextCommands, caseCount: aitextCount } = getAITextCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("AI MENU")} ໒  ֵ  ׄ 
┃ *AI IMAGE*
${aiimageCommands}
┃
┃ *AI SPEECH*
${aispeechCommands}
┃
┃ *AI TEKS*
${aitextCommands}
╰──────────── •`};

global.animeMenu = (prefix, hituet) => {
const { commands: animeCommands, caseCount: animeCount } = getAnimeCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("ANIME MENU")} ໒  ֵ  ׄ 
${animeCommands}
╰──────────── •`};

global.downloadMenu = (prefix, hituet) => {
const { commands: downloadCommands, caseCount: downloadCount } = getDownloadCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("DOWNLOAD MENU")} ໒  ֵ  ׄ 
${downloadCommands}
╰──────────── •`}

global.funMenu = (prefix, hituet) => {
const { commands: funCommands, caseCount: funCount } = getFunCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("FUN MENU")} ໒  ֵ  ׄ 
${funCommands}
╰──────────── •`}

global.gameMenu = (prefix, hituet) => {
const { commands: gameCommands, caseCount: gameCount } = getGameCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("GAME MENU")} ໒  ֵ  ׄ 
${gameCommands}
╰──────────── •`}

global.groupMenu = (prefix, hituet) => {
const { commands: groupCommands, caseCount: groupCount } = getGroupCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("GROUP MENU")} ໒  ֵ  ׄ 
${groupCommands}
╰──────────── •`};

global.infobot = (prefix, hituet) => {
const { commands: infoBotCommands, caseCount: infoBotCount } = getInfoBotCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("INFORMATION BOT")} ໒  ֵ  ׄ 
${infoBotCommands}
╰──────────── •`};

global.infome = (prefix, hituet) => {
const { commands: infoMeCommands, caseCount: infoBotCount } = getInfoMeCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("YOUR INFORMATION")} ໒  ֵ  ׄ 
${infoMeCommands}
╰──────────── •`};

global.informationMenu = (prefix, hituet) => {
const { commands: informationCommands, caseCount: informationCount } = getInformationCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("INFORMATION MENU")} ໒  ֵ  ׄ 
${informationCommands}
╰──────────── •`};

global.jkt48Menu = (prefix, hituet) => {
const { commands: jkt48Commands, caseCount: jkt48Count } = getJKT48Commands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("JKT48 MENU")} ໒  ֵ  ׄ 
${jkt48Commands}
╰──────────── •`};

global.makerMenu = (prefix, hituet) => {
const { commands: makerCommands, caseCount: makerCount } = getMakerCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("MAKER MENU")} ໒  ֵ  ׄ 
${makerCommands}
╰──────────── •`};

global.menfessMenu = (prefix, hituet) => {
const { commands: menfessCommands, caseCount: menfessCount } = getMenfessCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("MENFESS MENU")} ໒  ֵ  ׄ 
${menfessCommands}
╰──────────── •`};

global.newsletterMenu = (prefix, hituet) => {
const { commands: newsletterCommands, caseCount: newsletterCount } = getNewsletterCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("NEWSLETTER MENU")} ໒  ֵ  ׄ 
${newsletterCommands}
╰──────────── •`};

global.otherMenu = (prefix, hituet) => {
const { commands: otherCommands, caseCount: otherCount } = getOtherCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("OTHER MENU")} ໒  ֵ  ׄ 
${otherCommands}
╰──────────── •`};

global.ownerMenu = (prefix, hituet) => {
const { commands: ownerCommands, caseCount: ownerCount } = getOwnerCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("OWNER MENU")} ໒  ֵ  ׄ 
${ownerCommands}
╰──────────── •`};

global.ppobMenu = (prefix, hituet) => {
const { commands: ppobCommands, caseCount: ppobCount } = getPPOBCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("PPOB MENU")} ໒  ֵ  ׄ 
${ppobCommands}
╰──────────── •`};

global.pushkontakMenu = (prefix, hituet) => {
const { commands: pushkontakCommands, caseCount: pushkontakCount } = getPushKontakCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("PUSHKONTAK MENU")} ໒  ֵ  ׄ 
${pushkontakCommands}
╰──────────── •`};

global.rpgMenu = (prefix, hituet) => {
const { commands: rpgCommands, caseCount: rpgCount } = getRPGCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("RPG MENU")} ໒  ֵ  ׄ 
${rpgCommands}
╰──────────── •`};

global.searchMenu = (prefix, hituet) => {
const { commands: searchCommands, caseCount: searchCount } = getSearchCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("SEARCH MENU")} ໒  ֵ  ׄ 
${searchCommands}
╰──────────── •`};

global.soundeffectMenu = (prefix, hituet) => {
const { commands: soundEffectCommands, caseCount: soundEffectCount } = getSoundEffectCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("SOUND EFFECT MENU")} ໒  ֵ  ׄ 
${soundEffectCommands}
╰──────────── •`};

global.soundtiktok = (prefix, hituet) => {
const { commands: soundTiktokCommands, caseCount: soundTiktokCount } = getSoundTiktokCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("SOUND TIKTOK")} ໒  ֵ  ׄ 
${soundTiktokCommands}
╰──────────── •`};

global.stalkMenu = (prefix, hituet) => {
const { commands: stalkCommands, caseCount: stalkCount } = getStalkCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("STALK MENU")} ໒  ֵ  ׄ 
${stalkCommands}
╰──────────── •`};

global.stickerpackMenu = (prefix, hituet) => {
const { commands: stickerpackCommands, caseCount: stickerpackCount } = getStickerPackCommands();
return`
╭─ׁ ࣪ ִֶָ☾.${litespace("STICKER PACK MENU")} ໒  ֵ  ׄ 
${stickerpackCommands}
╰──────────── •`};

global.storeMenu = (prefix, hituet) => {
const { commands: storeCommands, caseCount: storeCount } = getStoreCommands();
return`
╭─ׁ ࣪ ִֶָ☾.${litespace("STORE MENU")} ໒  ֵ  ׄ 
${storeCommands}
╰──────────── •`};

global.toolMenu = (prefix, hituet) => {
const { commands: toolCommands, caseCount: toolCount } = getToolCommands();
return`
╭─ׁ ࣪ ִֶָ☾. ${litespace("TOOL MENU")} ໒  ֵ  ׄ 
${toolCommands}
╰──────────── •`};

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})