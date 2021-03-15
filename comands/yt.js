const ytdl = require('ytdl-core');

async function yt_player(msg)
{
    if (msg.member.voice.channel) {
        var data = msg.content.slice(0, -6);

        const connection = await msg.member.voice.channel.join();
        const stream = ytdl(`${data}`, { filter: 'audioonly', dlChunkSize: 0 });
        const dispatcher = connection.play(stream);

        dispatcher.on('speaking', speaking => {
            if (!speaking)
                voiceChannel.leave();
        });
    }
    else {
        msg.channel.send('tenes que estar en el voicechannel breo.');
    }

}

module.exports = { yt_player };