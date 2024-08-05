/*  
const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
//const client = new Client({ disableMentions: ``, partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const serverQueue = queue.get(message.guild.id);


module.exports = {
    name: 'p',
    description: `Make the bot move to your channel!`,
    aliases: ["p"],
    edesc: `Type this plays music in your channel`,
    async execute(message, serverQueue) {
      const args = message.content.split(" ");
      let voiceChannel = message.member.guild.voiceStates.cache.find(user => user.id == message.author.id)
      if (!voiceChannel) return message.reply(new MessageEmbed()
          .setColor("#d10000")
          .setTitle(`🚫 You must be in a voice channel to use this command!`)
        );
      const songInfo = await ytdl.getInfo(args[0]);
      const song = {
          title: songInfo.title,
          url: songInfo.video_url
        };
  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} has been added to the queue!`);
  }

      message.react("✅");
      message.guild.channels.cache.find(channel => channel.id == voiceChannel.channelID).join()
      
    }
}


async function execute(message, serverQueue) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  const songInfo = await ytdl.getInfo(args[1]);
  const song = {
    title: songInfo.title,
    url: songInfo.video_url
  };

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} has been added to the queue!`);
  }
}


*/