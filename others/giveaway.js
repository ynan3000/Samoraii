const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `ga`,
  description: `Creates channel to start giveaway!`,
  async execute(message, args) {
    if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.reply(new MessageEmbed()
      .setColor("#d10000")
      .setTitle(`🚫 You aren't allowed to use this command!`)
    );
    if (!args[0]) return message.reply(new MessageEmbed()
          .setColor("#d10000")
          .setTitle(`🚫 Please add the channel name!`)
    );   
    //react with approve emoji
    message.react("✅");

    //ᴀ ʙ ᴄ ᴅ ᴇ ꜰ ɢ ʜ ɪ ᴊ ᴋ ʟ ᴍ ɴ ᴏ ᴘ Q ʀ ꜱ ᴛ ᴜ ᴠ ᴡ x ʏ ᴢ
    let everyoneRole = message.guild.roles.cache.find(r => r.name === '@everyone');
    message.guild.channels.create(`『🎉』**\`${args[0].replace('a', 'ᴀ').replace('b', 'ʙ').replace('c', 'ᴄ').replace('d', 'ᴅ').replace('e', 'ᴇ').replace('f', 'ꜰ').replace('g', 'ɢ').replace('h', 'ʜ').replace('i', 'ɪ').replace('j', 'ᴊ').replace('k', 'ᴋ').replace('l', 'ʟ').replace('m', 'ᴍ').replace('n', 'ɴ').replace('o', 'ᴏ').replace('p', 'ᴘ').replace('q', 'Q').replace('r', 'ʀ').replace('s', 'ꜱ').replace('t', 'ᴛ').replace('u', 'ᴜ').replace('v', 'ᴠ').replace('w', 'ᴡ').replace('x', 'x').replace('y', 'ʏ').replace('z', 'ᴢ').replace('A', 'ᴀ').replace('B', 'ʙ').replace('C', 'ᴄ').replace('D', 'ᴅ').replace('E', 'ᴇ').replace('F', 'ꜰ').replace('G', 'ɢ').replace('H', 'ʜ').replace('I', 'ɪ').replace('J', 'ᴊ').replace('K', 'ᴋ').replace('L', 'ʟ').replace('M', 'ᴍ').replace('N', 'ɴ').replace('O', 'ᴏ').replace('P', 'ᴘ').replace('Q', 'Q').replace('R', 'ʀ').replace('S', 'ꜱ').replace('T', 'ᴛ').replace('U', 'ᴜ').replace('V', 'ᴠ').replace('W', 'ᴡ').replace('X', 'x').replace('Y', 'ʏ').replace('Z', 'ᴢ').replace('a', 'ᴀ').replace('b', 'ʙ').replace('c', 'ᴄ').replace('d', 'ᴅ').replace('e', 'ᴇ').replace('f', 'ꜰ').replace('g', 'ɢ').replace('h', 'ʜ').replace('i', 'ɪ').replace('j', 'ᴊ').replace('k', 'ᴋ').replace('l', 'ʟ').replace('m', 'ᴍ').replace('n', 'ɴ').replace('o', 'ᴏ').replace('p', 'ᴘ').replace('q', 'Q').replace('r', 'ʀ').replace('s', 'ꜱ').replace('t', 'ᴛ').replace('u', 'ᴜ').replace('v', 'ᴠ').replace('w', 'ᴡ').replace('x', 'x').replace('y', 'ʏ').replace('z', 'ᴢ').replace('A', 'ᴀ').replace('B', 'ʙ').replace('C', 'ᴄ').replace('D', 'ᴅ').replace('E', 'ᴇ').replace('F', 'ꜰ').replace('G', 'ɢ').replace('H', 'ʜ').replace('I', 'ɪ').replace('J', 'ᴊ').replace('K', 'ᴋ').replace('L', 'ʟ').replace('M', 'ᴍ').replace('N', 'ɴ').replace('O', 'ᴏ').replace('P', 'ᴘ').replace('Q', 'Q').replace('R', 'ʀ').replace('S', 'ꜱ').replace('T', 'ᴛ').replace('U', 'ᴜ').replace('V', 'ᴠ').replace('W', 'ᴡ').replace('X', 'x').replace('Y', 'ʏ').replace('Z', 'ᴢ').replace('a', 'ᴀ').replace('b', 'ʙ').replace('c', 'ᴄ').replace('d', 'ᴅ').replace('e', 'ᴇ').replace('f', 'ꜰ').replace('g', 'ɢ').replace('h', 'ʜ').replace('i', 'ɪ').replace('j', 'ᴊ').replace('k', 'ᴋ').replace('l', 'ʟ').replace('m', 'ᴍ').replace('n', 'ɴ').replace('o', 'ᴏ').replace('p', 'ᴘ').replace('q', 'Q').replace('r', 'ʀ').replace('s', 'ꜱ').replace('t', 'ᴛ').replace('u', 'ᴜ').replace('v', 'ᴠ').replace('w', 'ᴡ').replace('x', 'x').replace('y', 'ʏ').replace('z', 'ᴢ').replace('A', 'ᴀ').replace('B', 'ʙ').replace('C', 'ᴄ').replace('D', 'ᴅ').replace('E', 'ᴇ').replace('F', 'ꜰ').replace('G', 'ɢ').replace('H', 'ʜ').replace('I', 'ɪ').replace('J', 'ᴊ').replace('K', 'ᴋ').replace('L', 'ʟ').replace('M', 'ᴍ').replace('N', 'ɴ').replace('O', 'ᴏ').replace('P', 'ᴘ').replace('Q', 'Q').replace('R', 'ʀ').replace('S', 'ꜱ').replace('T', 'ᴛ').replace('U', 'ᴜ').replace('V', 'ᴠ').replace('W', 'ᴡ').replace('X', 'x').replace('Y', 'ʏ').replace('Z', 'ᴢ').replace('a', 'ᴀ').replace('b', 'ʙ').replace('c', 'ᴄ').replace('d', 'ᴅ').replace('e', 'ᴇ').replace('f', 'ꜰ').replace('g', 'ɢ').replace('h', 'ʜ').replace('i', 'ɪ').replace('j', 'ᴊ').replace('k', 'ᴋ').replace('l', 'ʟ').replace('m', 'ᴍ').replace('n', 'ɴ').replace('o', 'ᴏ').replace('p', 'ᴘ').replace('q', 'Q').replace('r', 'ʀ').replace('s', 'ꜱ').replace('t', 'ᴛ').replace('u', 'ᴜ').replace('v', 'ᴠ').replace('w', 'ᴡ').replace('x', 'x').replace('y', 'ʏ').replace('z', 'ᴢ').replace('A', 'ᴀ').replace('B', 'ʙ').replace('C', 'ᴄ').replace('D', 'ᴅ').replace('E', 'ᴇ').replace('F', 'ꜰ').replace('G', 'ɢ').replace('H', 'ʜ').replace('I', 'ɪ').replace('J', 'ᴊ').replace('K', 'ᴋ').replace('L', 'ʟ').replace('M', 'ᴍ').replace('N', 'ɴ').replace('O', 'ᴏ').replace('P', 'ᴘ').replace('Q', 'Q').replace('R', 'ʀ').replace('S', 'ꜱ').replace('T', 'ᴛ').replace('U', 'ᴜ').replace('V', 'ᴠ').replace('W', 'ᴡ').replace('X', 'x').replace('Y', 'ʏ').replace('Z', 'ᴢ').replace('a', 'ᴀ').replace('b', 'ʙ').replace('c', 'ᴄ').replace('d', 'ᴅ').replace('e', 'ᴇ').replace('f', 'ꜰ').replace('g', 'ɢ').replace('h', 'ʜ').replace('i', 'ɪ').replace('j', 'ᴊ').replace('k', 'ᴋ').replace('l', 'ʟ').replace('m', 'ᴍ').replace('n', 'ɴ').replace('o', 'ᴏ').replace('p', 'ᴘ').replace('q', 'Q').replace('r', 'ʀ').replace('s', 'ꜱ').replace('t', 'ᴛ').replace('u', 'ᴜ').replace('v', 'ᴠ').replace('w', 'ᴡ').replace('x', 'x').replace('y', 'ʏ').replace('z', 'ᴢ').replace('A', 'ᴀ').replace('B', 'ʙ').replace('C', 'ᴄ').replace('D', 'ᴅ').replace('E', 'ᴇ').replace('F', 'ꜰ').replace('G', 'ɢ').replace('H', 'ʜ').replace('I', 'ɪ').replace('J', 'ᴊ').replace('K', 'ᴋ').replace('L', 'ʟ').replace('M', 'ᴍ').replace('N', 'ɴ').replace('O', 'ᴏ').replace('P', 'ᴘ').replace('Q', 'Q').replace('R', 'ʀ').replace('S', 'ꜱ').replace('T', 'ᴛ').replace('U', 'ᴜ').replace('V', 'ᴠ').replace('W', 'ᴡ').replace('X', 'x').replace('Y', 'ʏ').replace('Z', 'ᴢ').replace('a', 'ᴀ').replace('b', 'ʙ').replace('c', 'ᴄ').replace('d', 'ᴅ').replace('e', 'ᴇ').replace('f', 'ꜰ').replace('g', 'ɢ').replace('h', 'ʜ').replace('i', 'ɪ').replace('j', 'ᴊ').replace('k', 'ᴋ').replace('l', 'ʟ').replace('m', 'ᴍ').replace('n', 'ɴ').replace('o', 'ᴏ').replace('p', 'ᴘ').replace('q', 'Q').replace('r', 'ʀ').replace('s', 'ꜱ').replace('t', 'ᴛ').replace('u', 'ᴜ').replace('v', 'ᴠ').replace('w', 'ᴡ').replace('x', 'x').replace('y', 'ʏ').replace('z', 'ᴢ').replace('A', 'ᴀ').replace('B', 'ʙ').replace('C', 'ᴄ').replace('D', 'ᴅ').replace('E', 'ᴇ').replace('F', 'ꜰ').replace('G', 'ɢ').replace('H', 'ʜ').replace('I', 'ɪ').replace('J', 'ᴊ').replace('K', 'ᴋ').replace('L', 'ʟ').replace('M', 'ᴍ').replace('N', 'ɴ').replace('O', 'ᴏ').replace('P', 'ᴘ').replace('Q', 'Q').replace('R', 'ʀ').replace('S', 'ꜱ').replace('T', 'ᴛ').replace('U', 'ᴜ').replace('V', 'ᴠ').replace('W', 'ᴡ').replace('X', 'x').replace('Y', 'ʏ').replace('Z', 'ᴢ')}\`**`,{
      type: "text",
      parent: "1174791761214836790",
      permissionOverwrites: [{
                id: everyoneRole.id,
                deny: ["SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ADD_REACTIONS", "ATTACH_FILES", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS"]
            }
      ],
    })
  }
}


