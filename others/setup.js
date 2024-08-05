const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `setup`,
  description: `Creates default channels for the server`,
  execute(message, client) {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(new MessageEmbed()
      .setColor("#F0EAD6")
      .setTitle(`🚫 You aren't allowed to use this command!`)
    );


    //react with approve emoji
    message.react("✅");
    //send the Ping embed

    message.guild.channels.create("Information", {
      type: "category",
    })
    message.guild.channels.create("Giveaways", {
      type: "category",
    })
    message.guild.channels.create("Community", {
      type: "category",
    })
    message.guild.channels.create("Voice Channels", {
      type: "category",
    })
    message.guild.channels.create("Service Area", {
      type: "category",
    })
    message.guild.channels.create("Entertainment Area", {
      type: "category",
    })
    message.guild.channels.create("👋︱𝒲𝑒𝓁𝑜𝒸𝓂𝑒", {
      type: "text",
    })
    message.guild.channels.create("📢︱𝓐𝓷𝓷𝓸𝓾𝓷𝓬𝓮𝓶𝓮𝓷𝓽𝓼", {
      type: "text",
    })
    message.guild.channels.create("🚨︱𝓡𝓾𝓵𝓮𝓼", {
      type: "text",
    })
    message.guild.channels.create("🔗︱𝓛𝓲𝓷𝓴𝓼", {
      type: "text",
    })
    message.guild.channels.create("🎉︱ᴄᴏᴍᴍᴜɴɪᴛʏ-ɢɪᴠᴇᴀᴡᴀʏ", {
      type: "text",
    })
    message.guild.channels.create("🌍︱𝔾𝕖𝕟𝕖𝕣𝕒𝕝-ℂ𝕙𝕒𝕥", {
      type: "text",
    })
    message.guild.channels.create("📷︱𝕄𝕖𝕕𝕚𝕒", {
      type: "text",
    })
    message.guild.channels.create("💬︱𝔼𝕟𝕘𝕝𝕚𝕤𝕙-ℂ𝕙𝕒𝕥", {
      type: "text",
    })
    message.guild.channels.create("💬︱𝔸𝕣𝕒𝕓𝕚𝕔-ℂ𝕙𝕒𝕥", {
      type: "text",
    })
    message.guild.channels.create("💬︱𝕋𝕦𝕣𝕜𝕚𝕤𝕙-ℂ𝕙𝕒𝕥", {
      type: "text",
    })
    message.guild.channels.create("🤖︱𝔹𝕠𝕥-𝕊𝕡𝕒𝕞", {
      type: "text",
    })
    message.guild.channels.create("🔍︱𝔾𝕦𝕚𝕝𝕕-ℝ𝕖𝕔𝕣𝕦𝕚𝕥𝕞𝕖𝕟𝕥", {
      type: "text",
    })
    message.guild.channels.create("🏴︱Ｇｅｎｅｒａｌ Ｃｈａｎｎｅｌ", {
      type: "voice",
    })
    message.guild.channels.create("🕵︱2  /  2", {
      type: "voice",
    })
      .then((channel) => {
        channel.setUserLimit(2)
      })
    message.guild.channels.create("🕵︱3  /  3", {
      type: "voice",
    })
      .then((channel) => {
        channel.setUserLimit(3)
      })
    message.guild.channels.create("🕵︱4  /  4", {
      type: "voice",
    })
      .then((channel) => {
        channel.setUserLimit(4)
      })
    message.guild.channels.create("🎵︱𝓡𝓮𝓺𝓾𝓮𝓼𝓽-𝓜𝓾𝓼𝓲𝓬", {
      type: "text",
    })
    message.guild.channels.create("🎵︱𝓜𝓾𝓼𝓲𝓬-𝓒𝓱𝓪𝓷𝓷𝓮𝓵", {
      type: "voice",
    })
    message.guild.channels.create("⌨︱ ＡＦＫ", {
      type: "voice",
    })




  }
}


