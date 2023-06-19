const Discord = require(`discord.js`);
const fetch = require("node-fetch");
const { Client, Collection, MessageEmbed, MessageAttachment } = require(`discord.js`);
const { readdirSync } = require(`fs`);
const { join } = require(`path`);
const db = require('quick.db');
const { keep_alive } = require("./keep_alive");
const { PREFIX, AVATARURL, BOTNAME, } = require(`./config.json`);
const figlet = require("figlet");
const client = new Client({ disableMentions: ``, partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const TOKEN = process.env['token']
client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);

//this fires when the BOT STARTS DO NOT TOUCH
client.on(`ready`, () => {
  client.login(TOKEN);
  client.guilds.cache.forEach(guild => {
  console.log(`The project is ready for the following server!`);
  console.log(`Server Name | Server ID`);
  console.log(`${guild.name} | ${guild.id}`);
  })
  ///////////////////////////////
  ////////////IFCHEMPTY//////////
  //remove everything in between those 2 big comments if you want to disable that the bot leaves when ch. or queue gets empty!
  setInterval(() => {
    let member;
    client.guilds.cache.forEach(async guild => {
      
      member = await client.guilds.cache.get(guild.id).members.cache.get(client.user.id)
      //if not connected
      if (!member.voice.channel)
        return;
      //if alone 
      if (member.voice.channel.members.size === 0) { return member.voice.channel.leave(); }
    });


    client.user.setActivity(`|| Prefix is: ${PREFIX}, Hope you having a nice day!`, {
      type: "STREAMING",
      url: "https://www.twitch.tv/1samoraii"
    });


  }, (5000));
  ////////////////////////////////
  ////////////////////////////////
  figlet.text(`Project is ready!`, function(err, data) {
    if (err) {
      console.log('Something went wrong');
      console.dir(err);
    }
    console.log(`═════════════════════════════════════════════════════════════════════════════`);
    console.log(data)
    console.log(`═════════════════════════════════════════════════════════════════════════════`);
  })

});
//DO NOT TOUCH
client.on(`warn`, (info) => console.log(info));
//DO NOT TOUCH
client.on(`error`, console.error);
//DO NOT TOUCH

client.on(`message`, async (message) => {
  if (message.author.bot) return;

  //getting prefix 
  let prefix = await db.get(`prefix_${message.guild.id}`)
  //if not prefix set it to standard prefix in the config.json file
  if (prefix === null) prefix = PREFIX;

  //information message when the bot has been tagged
  if (message.content.includes(client.user.id)) {
    message.reply(new Discord.MessageEmbed().setColor("#0b89f3").setAuthor(`${message.author.username}, My Prefix is ${prefix}, to get started; type ${prefix}help`, message.author.displayAvatarURL({ dynamic: true })));
  }
  //An embed announcement for everyone but no one knows so fine ^w^
  if (message.content.startsWith(`${prefix}embed`)) {
    //define saymsg
    const saymsg = message.content.slice(Number(prefix.length) + 5)
    //define embed
    const embed = new Discord.MessageEmbed()
      .setColor("#0b89f3")
      .setDescription(saymsg)
      .setFooter("Have a nice day!", client.user.displayAvatarURL())
    //delete the Command
    message.delete({ timeout: 300 })
    //send the Message
    message.channel.send(embed)
  }
commandFiles = readdirSync(join(__dirname, `others`)).filter((file) => file.endsWith(`.js`));
for (const file of commandFiles) {
  const command = require(join(__dirname, `others`, `${file}`));
  client.commands.set(command.name, command);
}
  //command Handler DO NOT TOUCH

  
  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
  if (!prefixRegex.test(message.content)) return;
  const [, matchedPrefix] = message.content.match(prefixRegex);
  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
  if (!command) return;
  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }
  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;
  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        new MessageEmbed().setColor("#0b89f3")
          .setTitle(`:x: Please wait \`${timeLeft.toFixed(1)} seconds\` before reusing the \`${prefix}${command.name}\`!`)
      );
    }
  }
  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  try {
    command.execute(message, args, client);
  } catch (error) {
    console.error(error);
    message.reply(new MessageEmbed().setColor("#0b89f3")
      .setTitle(`:x: There was an error executing that command.`)).catch(console.error);
  }


});


