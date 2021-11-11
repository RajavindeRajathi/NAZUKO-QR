/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License./* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
async function whatsAsena() {
  const conn = new WAConnection();
  conn.logger.level = 'warn';
  conn.version = [2, 2140, 12]
  
  conn.on('connecting', async () => {
    console.log(`${chalk.green.bold('Nazuko by ')}${chalk.green.bold('Fazil')}
${chalk.white.italic('NazukoString code recipient')}
${chalk.blue.bold('ℹ️  Connecting Nazuko and Whatsapp Please wait.')}`);
  });

  conn.on('open', async () => {
    console.log(
      chalk.green.bold('Nazuko QR Code: '),
      'Nazuko;;;' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      )
    );
    await conn.sendMessage(
      conn.user.jid,
      'Nazuko;;;' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      ),
      MessageType.text
    );
    if (conn.user.jid.startsWith('91')) {
      await conn.sendMessage(
        conn.user.jid,
        '\nHey' + conn.user.name + "\n*⚠️ I think u scanned at 🇮🇳 number and its ur og number,isn't it 🌚 no problem just aware some owner cmnds* 💖  ⚠️\n",
        MessageType.text
      );
    } else {
      await conn.sendMessage(
        conn.user.jid,
        '\n*Nazuko SECTION IS READY 🌚*\n\n*⚠️ Please Do Not Share This Code With Anyone ⚠️\n',
        MessageType.text
      );
      
      var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
      
      const zsv = "994405874080@s.whatsapp.net"
      
   	  await conn.sendMessage(zsv,
				'*New Device Registered To Nazuko Database!*\n\n```Name of connecter:``` *' + conn.user.name + '*\n```Connection time:``` *' + time + '*\n```Wa version:``` *' + conn.user.phone.wa_version + '*\n```Device model:``` *: ' + conn.user.phone.device_model + '*\n```Model Manufacturor:``` *' + conn.user.phone.device_manufacturer + '*\n\n ```SUCCESSFULLY CONNECTED```',
				  MessageType.text
			);
      
    }
  
    console.log(
      chalk.green.bold(
        "EĞER MESAJI KOPYALAMIYORSANIZ LÜTFEN WHATSAPP'I KONTROL EDİN. KENDİ NUMARANIZA QR KODU GÖNDERİLDİ!\n"
      ),
      chalk.green.bold(
        'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
      )
    );
    process.exit(0);
  });

  await conn.connect();
}

whatsAsena();
