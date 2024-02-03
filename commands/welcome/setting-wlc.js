const { Discord, MessageEmbed } = require("discord.js");
const { prefix } = require("../../config.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
    name: "setting",
    description: "جميع الاعدادات",
    aliases: [],
    usage: `{prefix}setting`,
    examples: `{prefix}setting`,
    
    category: "owner",
  botPermission: [],
  authorPermission: [],
  cooldowns: [],
  ownerOnly: true,
    type: "ownerShip",
    run: async (client, message, args) => {

        if (!args[0]) return;

       if (args[0] == "wlc") {
            let on = await db.get(`togg_${message.guild.id}`);
            if (on === null) on = false;
            if (on == true) on = 'On';
            if (on == false) on = 'Off';
            let msg = (await db.get(`messagew_${message.guild.id}`)) || 'Welcome [username], invite: [inviter]';
            let ch = (await db.get(`channel_${message.guild.id}_wlc`)) || 'None';
            const settings = new MessageEmbed()
                .setTitle("Settings welcome")
                .setColor(message.guild.me.displayHexColor)
                .setThumbnail(message.guild.iconURL({ dynamic: true, format: "png" }))
                .addField('Welcome Mode', `\`${on}\``)
                .addField('Welcome Channel', `${ch} | <#${ch}>`)
                .addField('Welcome Message', msg)
                .setTimestamp()
            await message.reply({ embeds: [settings] })

        }
      
    }
}