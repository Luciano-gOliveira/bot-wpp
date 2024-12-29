const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

//TO DO: fazer com que a extensão rode sem necessidade de QRCODE
const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.initialize();

client.on("message", (message) => {
    //TO DO: adicionar funcionalidade de envio à botão do whatsapp que recebe os agrupamentos de mensagens
      // client.sendMessage(message.from, `${messagegroup.id}`);
      if (message.body === 'ping') {
  		// responde a mensagem "ping" com "PONG"
  		message.reply('pong');
	}
  });

// EXEMPLO:
//   forEach([
//     {
//         id: 322114423,
//         name: "Grupo 1",
//         file: "C://dkdaskjasd"        
//     },
//     {
//         id: 322114423,
//         name: "Grupo 1",
//         file: "C://dkdaskjasd"        
//     },
//     {
//         id: 322114423,
//         name: "Grupo 1",
//         file: "C://dkdaskjasd"        
//     },
//   ]
