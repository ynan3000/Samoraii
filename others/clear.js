const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);


module.exports = {
    name: 'clear',
    description: `Allows you to delete a specific number of messages!`,
    aliases: ["Clear"],
    edesc: `Type this command allows you to delete a specific number of messages, Usage: ${PREFIX}clear <NUMBER OF MESSAGES>`,
    async execute(message, args) {

        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(new MessageEmbed()
          .setColor("#d10000")
          .setTitle(`🚫 You aren't allowed to use this command!`)
        );
        if (!args[0]) return message.reply(new MessageEmbed()
          .setColor("#d10000")
          .setTitle(`🚫 Please add the amount of messages that you want to delete!`)
        );
        if (isNaN(args[0])) return message.reply(new MessageEmbed()
          .setColor("#d10000")
          .setTitle(`🚫 Please add a number!`)
        );
        if (args[0] > 150) return message.reply(new MessageEmbed()
          .setColor("#d10000")
          .setTitle(`🚫 You can't delete higher than 150 messages!`)
        );
        if (args[0] < 1) return message.reply(new MessageEmbed()
          .setColor("#d10000")
          .setTitle(`🚫 You have to delete at least 1 message!`)
        );

        message.react("✅");
        await message.channel.messages.fetch({Limit: args[0]}).then(messages =>{
            args[0] = args[0] - - 1
            message.channel.bulkDelete(args[0]);
        });
            args[0] = args[0] - 1
            message.channel.send(new MessageEmbed()
            .setColor("#0b89f3")
            .setTitle(`✅ Successfully deleted **\`${args[0]}\`** messages.`))
    }
}