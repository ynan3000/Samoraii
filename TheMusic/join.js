const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
//const client = new Client({ disableMentions: ``, partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

module.exports = {
    name: 'join',
    description: `Make the bot move to your channel!`,
    aliases: ["Join"],
    edesc: `Type this command forces the bot to join to your channel`,
    async execute(message) {
      let channel_info = message.member.guild.voiceStates.cache.find(user => user.id == message.author.id)
      if (!channel_info) return message.reply(new MessageEmbed()
          .setColor("#d10000")
          .setTitle(`🚫 You must be in a voice channel to use this command!`)
        );
      message.react("✅");
      message.guild.channels.cache.find(channel => channel.id == channel_info.channelID).join()
      
    }
}

