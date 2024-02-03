const { MessageEmbed } = require("discord.js")
const { QuickDB } = require("quick.db");
const db = new QuickDB();;
const { prefix, owner } = require("../../config.js");
module.exports = {
  name: "toggle-wlc",
  description: "تشغيل وايقاف الترحيب",
  aliases: ["tog"],
  usage: `{prefix}toggle`,
  examples: `{prefix}toggle`,
  
category: "owner",
  botPermission: [],
  authorPermission: [],
  cooldowns: [],
  ownerOnly: true,
  type: "welcome",
  run: async (client, message, args) => {

    
    let on = await db.get(`togg_${message.guild.id}`);
    message.channel.send(`> Welcome Mood : ${on ? '`Closed`' : '`Activated`'}`)
    await db.set(`togg_${message.guild.id}`, on ? false : true);

  }
}