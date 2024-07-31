const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349133094018";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_04_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDk1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjAxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDg2LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIzLFxuICAgICAgICA1OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgODgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU1LFxuICAgICAgICA1MSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNixcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMixcbiAgICAgICAgMjI2LFxuICAgICAgICA0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI3LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDAsXG4gICAgICAgIDkyLFxuICAgICAgICA4NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOCxcbiAgICAgICAgNTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDksXG4gICAgICAgIDYwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDksXG4gICAgICAgIDkwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODksXG4gICAgICAgIDc3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMSxcbiAgICAgICAgMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtSi83OGJwY1A1Yjl6Z2gybS9TcmdJYXpsRytBL3Jxc25OeHdmL1MrcUVNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIcmxNX3pYUlJFQzNiZk9QUTUzNURnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFkY2ZhOTU1LThmYzEtNDhkMS05YTE0LWM4ZTQyZjM4OTk4Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMCxcbiAgICAgIDU1LFxuICAgICAgMzksXG4gICAgICAyMTIsXG4gICAgICAxODIsXG4gICAgICAyMjEsXG4gICAgICAxOTQsXG4gICAgICAxNyxcbiAgICAgIDQ2LFxuICAgICAgMTIxLFxuICAgICAgMTg5LFxuICAgICAgMjMyLFxuICAgICAgMTgyLFxuICAgICAgMTE0LFxuICAgICAgNjAsXG4gICAgICAyMTcsXG4gICAgICA1MyxcbiAgICAgIDUzLFxuICAgICAgNDgsXG4gICAgICA2N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzYsXG4gICAgICAyMzcsXG4gICAgICAxNTcsXG4gICAgICAxNjQsXG4gICAgICAxNTcsXG4gICAgICAxNzcsXG4gICAgICAyOCxcbiAgICAgIDIxMSxcbiAgICAgIDYwLFxuICAgICAgMTQ3LFxuICAgICAgNDQsXG4gICAgICAyLFxuICAgICAgMjUzLFxuICAgICAgNjAsXG4gICAgICAyOCxcbiAgICAgIDYzLFxuICAgICAgMTk1LFxuICAgICAgMjEsXG4gICAgICAxMjgsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSlExUTU2UkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzMwOTQwMTg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNocmlzIE1lZGlhXCIsXG4gICAgXCJsaWRcIjogXCI1MzY0ODcyMTczNTgzNzozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tTVXFMMEZFUHVGcTdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidlE0V3p3ZWFkdU5OTTl6bENvcDJuQnRNbVcwUHFad1NXcFgzSFpVSVhCdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJRQTkzQVI2eHkxRkpjWmxBSHFaVHpTOGVOTXZZOXQ5UUFiQ0tJN29LZVVZcFJmRVhGYzRtT1pRb2tkek82ZHFWQklydHlRZGlrazJybzJUWG5aU3pDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwWDNwSHlFd1JQUmx4NlNULzlGb2h4QndKeWxYYWVUSnBCVGorZUg1a2xKaWE1b1ExUEpZSkVrQlVJOHNWWjdFSDdrWUVDbU1hOEVzWXhSQzJhODVoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTMzMDk0MDE4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDY3MDcxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
