/*
const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);


module.exports = {
    name: 'leaveserver',
    description: `Removes your bot from a specific server!`,
    async execute(message, args, client) {
        if (!args[0]) return message.reply(new MessageEmbed()
          .setColor("#d10000")
          .setTitle(`🚫 Please add the server id!`)
        );
        message.react("✅");
    var guildID = client.guilds.cache.get(args[0])
    await guildID.leave();
    }
}
*/