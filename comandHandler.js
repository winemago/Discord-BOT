const prefix = '?';

const accountSid = 'AC324f1a4c8c0f94562d2afe5a8821563e'; 
const authToken = 'cac148fae08141379a0fdf4e5d0224bd'; 
const client_twilio = require('twilio')(accountSid, authToken); 
 
const msj = require('./comands/replies');
const rep = require('./comands/audioplayer');
const gif = require('./comands/gif');
const yt = require('./comands/yt');



module.exports = async (msg) => {

    ///MESSAGES

    if (msg.content.endsWith(`como${prefix}`)) {
        msj.reply(msg);
    }

    else if (msg.content === `como${prefix}${prefix}` || msg.content === `como${prefix}${prefix}${prefix}` || msg.content === `como${prefix}${prefix}${prefix}${prefix}` || msg.content === `como${prefix}${prefix}${prefix}${prefix}${prefix}`) {
        msj.md_reply(msg);
    }

    else if (msg.content === (`help${prefix}`)) {
        msj.help(msg);
    }



    ///PLAY AUDIOS

    else if (msg.content.endsWith(`mostras${prefix}`)) {
        rep.play_audio(msg, 'audios/mostrarmetuespada.mp3');
    }

    else if (msg.content.endsWith(`nark${prefix}`)) {
        rep.play_audio(msg, 'audios/nark.mp3');
    }

    else if (msg.content.endsWith(`chona${prefix}`)) {
        rep.play_audio(msg, 'audios/chona.mp3');
    }

    else if (msg.content.endsWith(`rama${prefix}`)) {
        rep.play_audio(msg, 'audios/rama.ogg');
        msg.channel.send('La musica murio, hace mínimo, 20 años. Crecí escuchando a The Beatles, Pink Floyd, Queen, Soda, Radiohead, Spinetta en todos sus colores, The Who, U2, Los Rolling, entre tantos otros .. me apena tanto cuando escucho hablar a los jóvenes de flow y escuchar los que escuchan');
    }

    else if (msg.content.endsWith(`miau${prefix}`)) {
        rep.play_audio(msg, 'audios/miau.mp3');
    }

    else if (msg.content.endsWith(`berni${prefix}`)) {
        rep.play_audio(msg, 'audios/berni.ogg');
    }
    
    else if (msg.content.endsWith(`gp${prefix}`)) {
        rep.play_audio(msg, 'audios/gp.mp3');
    }



    ///GIFS 

    else if (msg.content.endsWith(`gif${prefix}`)) {
        gif.randomgif(msg);
    }



    ///YOUTUBE PLAYER

    else if (msg.content.endsWith(`play${prefix}`)) {
        yt.yt_player(msg);
    }

    else if (msg.content.startsWith(`stop${prefix}`)) {
        msg.member.voice.channel.leave();
    }


    
    /*//ENVIAR SMS, CALL, WHATSAPP

    else if (msg.content.endsWith(`sms${prefix}`)) {
        let sms = msg.content.slice(0, -5);

        client_twilio.messages
            .create({
                body: `${sms}`,
                from: '+13176890242',
                to: '+542235372795' //sin 9 para sms
            })
            .then(message => console.log(message.sid))
            .done();
    }
    else if (msg.content.endsWith(`wpp${prefix}`)) {
        let sms = msg.content.slice(0, -5);

        client_twilio.messages
            .create({
                body: `${sms}`,
                from: 'whatsapp:+14155238886',
                to: 'whatsapp:+5492236681800' //con 9 para wpp
            })
            .then(message => console.log(message.sid))
            .done();
    }
    else if (msg.content.endsWith(`call${prefix}`)) {

        client_twilio.calls
            .create({
                url: 'http://demo.twilio.com/docs/voice.xml',
                from: '+13176890242',
                to: '+5492235372795' 
            })
            .then(message => console.log(message.sid))
            .done();
    }*/

}
