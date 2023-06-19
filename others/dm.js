const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: 'dm',
  description: `Allows you to dm someone in the server!`,
  aliases: ["dm"],
  edesc: `Type this command allows you to dm someone in the server, Usage: ${PREFIX}dm <Mention The User> <Mention The Message>.`,

  async execute(message, args) {
    let dUser =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.get(args[0]);
    if (!dUser) return message.channel.send("Can't find user!");
    if (!message.member.hasPermission('SEND_MESSAGES'))
      return message.reply(new MessageEmbed()
        .setColor("#d10000")
        .setTitle(`🚫 You can't you that command!`)
      );
    let dMessage = args.join(' ').slice(22);
    if (dMessage.length < 1) return message.reply(new MessageEmbed()
      .setColor("#c04900")
      .setTitle(`🚫 You must supply a message!`)
    );
    message.react("✅");
    dUser.send(`${dUser} sent you: ${dMessage}`);

    message.author.send(
      `${message.author} You have sent your message to ${dUser}`
    );
  }
}