import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Larios.PNG';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
    DAFNESITA BOT ⚙️

   𝐇𝐨𝐥𝐚, ${taguser}

🎀𝐒𝐢 𝐃𝐞𝐬𝐞𝐚𝐬 𝐂𝐨𝐦𝐩𝐫𝐚𝐫 𝐞𝐥 𝐁𝐨𝐭, 𝐏𝐥𝐚𝐭𝐚𝐟𝐨𝐫𝐦𝐚𝐬 𝐒𝐭𝐫𝐞𝐚𝐦𝐢𝐧𝐠 𝐮 𝐒𝐞𝐠𝐮𝐢𝐝𝐨𝐫𝐞𝐬
𝐂𝐨𝐧𝐭𝐚́𝐜𝐭𝐚𝐦𝐞 𝐚𝐥 𝐒𝐢𝐠𝐮𝐢𝐞𝐧𝐭𝐞 𝐍𝐮́𝐦𝐞𝐫𝐨: 525610035034

DAFNESITA BOT ⚙️: https://wa.me/525610035034

🎀𝐌𝐞́𝐭𝐨𝐝𝐨𝐬 𝐝𝐞 𝐏𝐚𝐠𝐨:
𝘛𝘳𝘢𝘯𝘴𝘧𝘦𝘳𝘦𝘯𝘤𝘪𝘢 𝘥𝘦𝘱ó𝘴𝘪𝘵𝘰 𝘱𝘢𝘺𝘱𝘢𝘭

        𝐌𝐄𝐍𝐔 𝐃𝐄 𝐏𝐑𝐄𝐂𝐈𝐎𝐒 

    ⚙️ 𝐏𝐑𝐄𝐂𝐈𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 ⚙️ 
   45 𝐌𝐗 𝐜𝐚𝐝𝐚 𝐆𝐫𝐮𝐩𝐨 - 3 𝐃𝐋𝐒



    ⚙️ 𝐏𝐥𝐚𝐭𝐚𝐟𝐨𝐫𝐦𝐚𝐬 𝐒𝐭𝐫𝐞𝐚𝐦𝐢𝐧𝐠 ⚙️
      (𝐏𝐞𝐫𝐟𝐢𝐥𝐞𝐬 - 𝟏 𝐃𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨)
      
🎀 𝐇𝐛𝐨 𝐌𝐚𝐱 𝟏 𝐌𝐞𝐬 - 𝟏𝟎 𝐌𝐱
🎀𝐇𝐛𝐨 𝐌𝐚𝐱 𝟑 𝐌𝐞𝐬𝐞𝐬 - 𝟏𝟓 𝐌𝐱
🎀 𝐃𝐢𝐬𝐧𝐞𝐲 𝐏𝐥𝐮𝐬 𝟏 𝐌𝐞𝐬 - 10 𝐌𝐱
🎀𝐏𝐫𝐢𝐦𝐞 𝐕𝐢𝐝𝐞𝐨 𝟏 𝐌𝐞𝐬 - 𝟏𝟎 𝐌𝐱
🎀 𝐏𝐚𝐫𝐚𝐦𝐨𝐮𝐧𝐭 𝟏 𝐌𝐞𝐬 - 𝟏𝟎 𝐌𝐱
🎀𝐍𝐞𝐭𝐟𝐥𝐢𝐱 𝟏 𝐌𝐞𝐬 - 45 𝐌𝐱
🎀𝐂𝐫𝐮𝐧𝐜𝐡𝐲𝐫𝐨𝐥𝐥 - 𝟏𝟓 𝐌𝐱 
🎀𝐕𝐢𝐱 𝐏𝐥𝐮𝐬 𝟐 𝐌𝐞𝐬𝐞𝐬 - 𝟐𝟎 𝐌𝐱

🎀𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝟏 𝐌𝐞𝐬 - 𝟏𝟓 𝐌𝐱
🎀 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐌𝐮𝐬𝐢𝐜 𝟏 𝐌𝐞𝐬 - 𝟏𝟓 𝐌𝐱

   🎀𝐂𝐔𝐄𝐍𝐓𝐀𝐒 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐀𝐒 🎀

 🌷 𝐇𝐛𝐨 𝐌𝐚𝐱 𝟏 𝐌𝐞𝐬 - 𝟐𝟎 𝐌𝐱
🌷𝐇𝐛𝐨 𝐌𝐚𝐱 𝟑 𝐌𝐞𝐬𝐞𝐬 - 𝟑𝟓 𝐌𝐱
🌷𝐃𝐢𝐬𝐧𝐞𝐲 𝐏𝐥𝐮𝐬 𝟏 𝐌𝐞𝐬 - 𝟒𝟓 𝐌𝐱
🌷 𝐏𝐫𝐢𝐦𝐞 𝐕𝐢𝐝𝐞𝐨 𝟏 𝐌𝐞𝐬 - 𝟑0 𝐌𝐱
🌷𝐏𝐚𝐫𝐚𝐦𝐨𝐮𝐧𝐭 𝟏 𝐌𝐞𝐬 - 30 𝐌𝐱
🌷 𝐍𝐞𝐭𝐟𝐥𝐢𝐱 𝟏 𝐌𝐞𝐬 - 𝟏50 𝐌𝐱
🌷 𝐂𝐫𝐮𝐧𝐜𝐡𝐲𝐫𝐨𝐥𝐥 - 𝟑5 𝐌𝐱
🌷 𝐕𝐢𝐱 𝐏𝐥𝐮𝐬 𝟐 𝐌𝐞𝐬𝐞𝐬 - 𝟑𝟓 𝐌𝐱
🌷 𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝟏 𝐌𝐞𝐬n - 30𝐌𝐱
 🌷𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐌𝐮𝐬𝐢𝐜 𝟏 𝐌𝐞𝐬 - 𝟐𝟓 𝐌𝐱
🌷 𝐂𝐚𝐧𝐯𝐚 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝟒𝟓 𝐝𝐢𝐚𝐬 - 35 𝐌𝐱
🌷𝐎𝐟𝐟𝐢𝐜𝐞 𝟑𝟔𝟓 𝟏 𝐌𝐞𝐬 - 6𝟎 𝐌𝐱
🌷 𝐂𝐥𝐚𝐫𝐨 𝐕𝐢𝐝𝐞𝐨 𝟏 𝐌𝐞𝐬 - 𝟏𝟓 𝐌𝐱

   
DAFNESITA BOT ⚙️`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|keyaudio|keyaudios)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
