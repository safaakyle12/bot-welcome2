const express = require('express');
const app = express();

const path = require('path');
const port = 3000;

  
 
 app.get('/', (req, res) => res.send('<meta http-equiv="refresh" content="0; URL=https://www.youtube.com/embed/q3i_QYCqmWY"/>'));
app.listen(port, () => 
  console.log('safaa made this and wadi3'))





const editor = require("editor-canvas");

const Discord = require("discord.js");
const { Client, MessageActionRow, MessageButton, MessageEmbed, MessageSelectMenu, Intents, GatewayIntentBits, Partial } = require("discord.js");
const db2 = require("pro.db")
const { QuickDB } = require("quick.db");
const db = new QuickDB();
const config = require("./config.js");




const { prefix } = require("./database.json");

const client = new Discord.Client({
  intents: new Discord.Intents(32767),
  restTimeOffset: 0,
  allowedMentions: { parse: ["everyone", "roles", "users"], repliedUser: false }, partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]
});
module.exports = client;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

const ms = require("ms");





 



client.on('messageCreate', async (message) => {
if(message.author.bot) return;
const db3 = await db2.get("prefix")
const dba = `${config.prefix}` && db3
  if (message.content.toLowerCase().startsWith(dba + "help")) {
    let embed = new Discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL({dynamic:true}))
    .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
    .setDescription(` 
Home Menu
Pls Select a category to 
view all commands of Welcome.`)
    .setColor("#b0b58d")
    .setFooter(message.guild.name, message.guild.iconURL({dynamic:true}))
    .setTimestamp()
    let row = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageButton()
        .setLabel("welcome Commands")
        .setStyle("PRIMARY")
        .setCustomId("1"),
      new Discord.MessageButton()
      .setLabel("owners Commands")
      .setStyle("PRIMARY")
      .setCustomId("2"),
       
    )
    let row2 = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageButton()
        .setLabel("Support Server")
        .setStyle("LINK")
        .setURL(`https://discord.gg/perdeve`),
        
    )
    message.reply({embeds:[embed],components:[row,row2]})
}
})

client.on("interactionCreate", async interaction => {
    if(interaction.customId === "1"){
        let embed = new Discord.MessageEmbed()
        .setThumbnail(interaction.guild.iconURL({dynamic:true}))
        .setAuthor(interaction.user.tag,interaction.user.avatarURL({dynamic:true}))
        .setDescription(`
                       **${prefix}channel-wlc** - تحديد شات الترحيب.

                       **${prefix}image-wlc** - تحديد صورة الترحيب.

                       **${prefix}message-wlc** - تحديد رسالة الترحيب.

                       **${prefix}toggle-wlc** - تشغيل وايقاف الترحيب.

                       **${prefix}setting wlc** - اظهار جميع اعدادات الترحيب.

                       **${prefix}t** - لتجربه احداثيات الترحيب.
                               `)
        .setColor("#b0b58d")
        .setFooter(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
        .setTimestamp();
        await interaction.reply({embeds:[embed], components: [],ephemeral:true});
    } else if (interaction.customId === '2') {
        let embed = new Discord.MessageEmbed()
        .setThumbnail(interaction.guild.iconURL({dynamic:true}))
        .setAuthor(interaction.user.tag,interaction.user.avatarURL({dynamic:true}))
        .setDescription(`
                       **${prefix}setavatar** - لتغيير صورة البوت. 

                       **${prefix}setprefix** - لتغيير بريفكس البوت. 

                       **${prefix}setname** - لتغيير اسم البوت. 

                       **${prefix}setgame** - لتغيير حالة البوت.

                     
                               `)
        .setColor("#b0b58d")
        .setFooter(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
        .setTimestamp();
        await interaction.reply({embeds:[embed], components: [],ephemeral:true});
    } else if (interaction.customId === '3') {
        let embed = new Discord.MessageEmbed()
        .setThumbnail(interaction.guild.iconURL({dynamic:true}))
        .setAuthor(interaction.user.tag,interaction.user.avatarURL({dynamic:true}))
        .setDescription(`
**${prefix}setavatar** - لتغيير صورة البوت. 

**${prefix}setprefix** - لتغيير بريفكس البوت. 

**${prefix}setname** - لتغيير اسم البوت. 

**${prefix}setgame** - لتغيير حالة البوت.

**${prefix}embed** - لارسال رسالة على شكل امبد. 

**${prefix}say** - لارسال رسالة الى شات معين. 

**${prefix}image** - لارسال صوره في الشات.
        `)
        .setColor("#b0b58d")
        .setFooter(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
        .setTimestamp();
        await interaction.reply({embeds:[embed], components: [],ephemeral:true});
   
    }
});


client.login(process.env.token)


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setStatus(config.status);
  client.user.setActivity(config.activity.name, { type: config.activity.type, url: config.activity.url });
});





	
 
////////////////////////////////


   //////////////////////////////// SAFAA /////////////////////////////////////////////




// perry / sys







process.on("unhandledRejection", error => {
  return console.log(error)
});

setTimeout(() => {
  if (!client || !client.user) {
    console.log("Process Kill")
    process.kill(1);
  } else {
    console.log("You have logged in")
  }
}, 3*1000*60);

const fetch = require('node-fetch');

// ...


const { inviteTracker } = require("discord-inviter");
const Canvas = require("canvas");
const fs = require("fs");


const tracker = new inviteTracker(client);



// ...



// ...

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  const db3 = await db2.get("prefix");
  const dba = `${config.prefix}` && db3;

  if (message.content.toLowerCase().startsWith(dba + "image-wlc")) {
    const attachment = message.attachments.first();
    if (!attachment) {
      return message.reply("Please attach a welcome image.");
    }

    const imageUrl = attachment.url;

    // حفظ رابط الصورة في قاعدة البيانات
    await db.set("welcomeImageUrl", imageUrl);

    return message.reply("Done Add image welcome");
  }


  if (message.content.toLowerCase().startsWith(dba + "test") || message.content == dba + `t`) {
    client.emit("guildMemberAdd", message.member);
  }
});

// ...

tracker.on("guildMemberAdd", async (member, inviter, invite, error) => {
  if (error) return console.error(error);

  let on = await db.get(`togg_${member.guild.id}`);
  if (on == true) {
    // استخدام رابط الصورة المحفوظ في قاعدة البيانات
    const imageUrl = await db.get("welcomeImageUrl");
    if (!imageUrl) return console.error("No welcome image URL found in the database.");

    const WelcomeImage = await Canvas.loadImage(imageUrl);


    const leftright = welcomeSettings.leftright; // يمين ويسار الصورة
    const upkdown = welcomeSettings.upkdown; // فوق تحت الصورة
    const ksize = welcomeSettings.ksize; // حجم الصورة
    const namleftright04 = welcomeSettings.nameleftright04; // يمين ويسار الأسم
    const namupdown14 = welcomeSettings.namupdown14; // فوق وتحت الأسم
    let textsize = welcomeSettings.textsize; // حجم الخط

     const { registerFont } = require('canvas');
     registerFont('arial.ttf', { family: `Roboto` });

     const canvas = Canvas.createCanvas(500, 156); // أبعاد صورة الترحيب

     const ctx = canvas.getContext('2d');

    // ...

    ctx.drawImage(WelcomeImage, 0, 0, canvas.width, canvas.height);
    ctx.font = `${textsize}px Arial`;
    ctx.shadowColor = 'rgba(22, 22, 22, 1)';
    ctx.shadowOffsetY = 2;
    ctx.shadowBlur = 5;
    ctx.fillStyle = welcomeSettings.ColorName;

  
    const textVerticalPosition = namupdown14 + ksize + 10; //

    ctx.fillText(member.user.username, namleftright04, textVerticalPosition);

    // ...


     ctx.beginPath();
     ctx.arc(leftright, upkdown, ksize / 2, 0, Math.PI * 2, true);
     ctx.closePath();
     ctx.clip();

     const avatarUser = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png', size: 4096 }));

     ctx.drawImage(
       avatarUser,
       leftright - welcomeSettings.avatarUserleftright,
       upkdown - welcomeSettings.avatarUserupkdown,
       ksize,
       ksize
     );

     const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome_.png');

     let cha = await db.get(`channel_${member.guild.id}_wlc`);
     if (cha === null) return;
     const channel = member.guild.channels.cache.find(ch => ch.id === cha);
     if (!channel) return;
     let words = await db.get(`messagew_${member.guild.id}`);
     if (words === null) words = `Welcome [user], Friend: [inviter]`;
     let sowner = words.replace('[sowner]', member.guild.owner);
     let s = sowner.replace('[server]', member.guild.name);
     let u = s.replace('[user]', member);
     let n = u.replace('[username]', member.user.username);
     let h = n.replace('[inviter]', inviter);
     let m = h.replace('[invitername]', inviter.username);
     let all = m.replace('[count]', member.guild.memberCount);

     // إرسال الصورة والرسالة
     await channel.send({ files: [attachment], content: `${all}` });
   }
 });




// ...

// قم بتحميل الإعدادات من الملف إذا كان متاحًا

const settingsFilePath = 'database.json';

// وظيفة لتحميل الإعدادات من الملف
function loadSettingsFromFile() {
  try {
    const data = fs.readFileSync(settingsFilePath);
    return JSON.parse(data);
  } catch (error) {
    console.error("Error loading settings from file:", error);
    return {};
  }
}

// وظيفة لحفظ الإعدادات في الملف
function saveSettingsToFile(settings) {
  try {
    const data = JSON.stringify(settings, null, 2);
    fs.writeFileSync(settingsFilePath, data);
  } catch (error) {
    console.error("Error saving settings to file:", error);
  }
}

// قم بتحميل الإعدادات من الملف إذا كانت متاحة
let welcomeSettings = loadSettingsFromFile();

// ... الكود الباقي ...

client.on('messageCreate', async (message) => {
  // ...

  const db3 = await db2.get("prefix");
  const dba = `${config.prefix}` && db3;

  if (message.content.toLowerCase().startsWith(dba + "setwelcomesetting")) {
    const args = message.content.split(" ");
    if (args.length !== 3) {
      return message.reply("Usage: !setwelcomesetting <settingName> <settingValue>");
    }

    const settingName = args[1];
    const settingValue = parseFloat(args[2]);

    if (isNaN(settingValue)) {
      return message.reply("Invalid setting value. Please enter a valid number.");
    }

    // تحديث قيمة الإعداد
    welcomeSettings[settingName] = settingValue;

    // حفظ الإعدادات في الملف
    saveSettingsToFile(welcomeSettings);

    return message.reply(`Setting ${settingName} updated to ${settingValue}. Current settings: ${JSON.stringify(welcomeSettings, null, 2)}`);
  }

  // ... الكود الباقي ...
});
