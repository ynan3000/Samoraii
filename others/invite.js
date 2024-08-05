const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `invite`,
  description: `Allows you to create an invitation to the server.`,
  aliases: ["latency"],
  cooldown: 2,
  edesc: "Type this command to see how fast the Bot can response to your messages / commands inputs!",
  async execute (message, args, client) {
    if (!(message.author.id == "666791985272717361")) return message.reply(new MessageEmbed()
      .setColor("#F0EAD6")
      .setTitle(`🚫 You aren't allowed to use this command!`)
    );
        message.react("✅");
  let invite = await message.channel.createInvite(
  {
    maxAge: 10 * 60 * 1000, // maximum time for the invite, in milliseconds
    maxUses: 1 // maximum times it can be used
  },
  `Requested with command by ${message.author.tag}`
)
.catch(console.log);

  message.reply(invite ? `Here's your invite: ${invite}` : "There has been an error during the creation of the invite.");
}
}