
async function play_audio(msg,audio){
    if (msg.member.voice.channel) {
        const connection = await msg.member.voice.channel.join();
        const dispacher=connection.play(`${audio}`);
        
        dispacher.on('finish',()=>{
            connection.disconnect();
        });
    }
    else {
        msg.channel.send('tenes que estar en el voicechannel breo.');
    }
 }

module.exports = { play_audio };