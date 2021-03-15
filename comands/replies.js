const replies = [
    'nunca me preguntaron, nose!!',
    'anda a mi pagina y preguntame bro: https://preguntamecomo.netlify.app/ ',
    'por que me siguen preguntando?',
    'https://preguntamecomo.netlify.app/',
    'como que?',
    'anda a mi pagina, no te lo repito mas! https://preguntamecomo.netlify.app/',
    'que queres ?',
    'cuando quieras nos tomamos un cafe y te cuento algo unico que te va a volar la cabeza!'
];

function reply(msg)
{
    const r = Math.floor(Math.random() * replies.length);
    msg.channel.send(replies[r]);
}

function md_reply(msg)
{
    msg.author.send("hola bro, veo q estas interesado, queres q t cuente algo q t va a volar la cabeza??");
    setTimeout(function () {
        msg.author.send('Te paso con mi socio mejor:   https://www.facebook.com/julian420chilltimes. Super confiable bro');
    }, 10000);
}

function help(msg)
{
    msg.channel.send('COMANDOS:\n- como? (puede variar segun cantidad de signos de interrogacion)\n- mostras?\n- nark?\n- chona?\n- rama?\n- miau?\n- berni?\n- gp?\n- (palabra a buscar) gif?\n- (Link de youtube) play?\n- stop?\n- (msg a mandar) sms?\n- (msg a mandar) wpp?\n- call?');
}

module.exports = { reply, md_reply, help};