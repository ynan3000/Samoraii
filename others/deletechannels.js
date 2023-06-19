const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);


module.exports = {
  name: 'deleteallchannels',
  description: `Allows you to delete all channels in the server!`,
  aliases: ["deleteallchannels"],
  execute(message, channel) {
    if (!(message.author.id == "666791985272717361")) return message.reply(new MessageEmbed()
      .setColor("#F0EAD6")
      .setTitle(`🚫 You aren't allowed to use this command!`)
    );
    message.react("✅");
    message.guild.channels.cache.forEach((channel) => {
      channel.delete()
    });
  }
}