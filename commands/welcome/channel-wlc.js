const { MessageEmbed } = require("discord.js")
const { QuickDB } = require("quick.db");
const db = new QuickDB();;
const { prefix, owner } = require("../../config.js");
module.exports = {
    name: "channel-wlc",
    description: "تحديد الشات الترحيب",
    aliases: [""],
    usage: `{prefix}channel-wlc \`[#chat , ID]\``,
    examples: `{prefix}channel-wlc`,
    
    
  category: "owner",
  botPermission: [],
  authorPermission: [],
  cooldowns: [],
  ownerOnly: true,
    type: "welcome",
    run: async (client, message, args) => {

      
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if (!channel) {
            return message.channel.send(`> **Please Mention the channel first**`)

        }
        await db.set(`channel_${message.guild.id}_wlc`, channel.id);
        await db.set(`togg_${message.guild.id}`, true);
        message.channel.send(`✅ **Channel is setup as ${channel}**`)

    }
}