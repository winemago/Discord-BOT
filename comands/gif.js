const fetch = require('node-fetch');

async function randomgif (msg){
    let info = msg.content.slice(0, -5);

    let url = `https://g.tenor.com/v1/search?q=${info}&key=LMGHM40VVDUG&limit=8&contentfilter=off`;
    let response = await fetch(url);
    let json = await response.json();
    let i = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[i].url);
}


module.exports = { randomgif };