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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_38_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDUxLFxuICAgICAgICAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY1LFxuICAgICAgICA5NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM1LFxuICAgICAgICA1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDk2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNixcbiAgICAgICAgMTM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NyxcbiAgICAgICAgODksXG4gICAgICAgIDY1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc0LFxuICAgICAgICA2MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk3LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgODMsXG4gICAgICAgIDc3LFxuICAgICAgICA4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODksXG4gICAgICAgIDcxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDczLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTksXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDg1LFxuICAgICAgICAyNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MixcbiAgICAgICAgNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM4LFxuICAgICAgICA1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5OSxcbiAgICAgICAgOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT0szZVlrMHR6cjFyNC9EQjlwYW44RTZuU2tuZjk1dUVHYWdQNWpFaG5rOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMFlYVWJzdFZRRm1sYmR3Nkh6dlg3QVwiLFxuICBcInBob25lSWRcIjogXCIwY2E5YmQyNi0wNTMyLTQ3MzUtYmU1ZC1mYjE4NjM2ZTI2MWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEyLFxuICAgICAgMzEsXG4gICAgICAxMTYsXG4gICAgICAxNjgsXG4gICAgICA0MixcbiAgICAgIDI0NyxcbiAgICAgIDExMyxcbiAgICAgIDE2MixcbiAgICAgIDE2MyxcbiAgICAgIDIxOSxcbiAgICAgIDE4MyxcbiAgICAgIDE5NCxcbiAgICAgIDM4LFxuICAgICAgMTE2LFxuICAgICAgMTkwLFxuICAgICAgMjEzLFxuICAgICAgMTk0LFxuICAgICAgMTI4LFxuICAgICAgMjksXG4gICAgICA0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICAzNCxcbiAgICAgIDEwMSxcbiAgICAgIDE1LFxuICAgICAgMjEzLFxuICAgICAgMjI4LFxuICAgICAgMTg5LFxuICAgICAgNzcsXG4gICAgICAyMzksXG4gICAgICAxMDYsXG4gICAgICAxMzMsXG4gICAgICA0OCxcbiAgICAgIDY5LFxuICAgICAgMCxcbiAgICAgIDI1LFxuICAgICAgMTUwLFxuICAgICAgNzQsXG4gICAgICAyNDQsXG4gICAgICAxNzYsXG4gICAgICAxMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNTNYNTYyTTNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzMwOTQwMTg6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkNocmlzIE1lZGlhXCIsXG4gICAgXCJsaWRcIjogXCI1MzY0ODcyMTczNTgzNzo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tXVXFMMEZFS2lMdkxVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidlE0V3p3ZWFkdU5OTTl6bENvcDJuQnRNbVcwUHFad1NXcFgzSFpVSVhCdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiMHJNcTFyZHkrMm5RejNFWXNyNXlBL2pHWUxsS2RSNkZjNzhnZHBSZjZFbE9SbCt2RnhORXFpdHBUR2ZDZVFoZW5ucUlNN04vV3dJbTdWRHJHbHpCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtQVBZUkpjdHVKTFlKU2loaVptWFJiblZUUUd0T0ZNd0ZxRGxsNFdhZWR2SExWblRlcWsvTEhhVmRlbW9HM2tRbHRmRkEyT2oyQXVOSTgxMW1VSFVoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTMzMDk0MDE4OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzQ2Mjg0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQUpJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBSkkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUd2lkL3RQck1YNmtRbEVWZktIMjVlWGZqZXY0QXd4Vmo2K3BkQlJDT3drPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NzA3NjE1MDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI3NDU3MzcyMThcIn0iCn0="  // PUT your SESSION_ID 


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
