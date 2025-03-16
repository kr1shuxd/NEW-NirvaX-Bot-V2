require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "BOTTOKEN", // <==== PASTE YOU TOKEN
    prefix: process.env.PREFIX || "+", // <==== SET YOU PRERIX BOT [ OWNER COMMANDS ]
    color: process.env.EMBED_COLOR || "#ff0000", // <==== YOU EMBEDED HEX COLOR
    owner: process.env.OWNER_ID || "1282344443109838903, 1035523468650872883", // <==== BOTS OWNER ID
    guildLogs: process.env.GUILD_LOGS || "000000000000000", // <==== YOUR SERVER JOIN LEFT LOGS CHANNEL ID
    leaveTimeout: process.env.LEAVE_TIMEOUT || "20000", // <==== SET LEAVE TIMEOUT WHEN BOT WAS ALONE || 1000 = 1sec
    disableYouTube: parseBoolean(process.env.DISABLE_YOUTUBE || "false"), // <==== SET "TRUE OR FALSE" | ENABLE/DISABLE YOUTUBE FEATURES. DISABLING THIS WILL MAKE "AUTOPLAY" COMMANDS USELESS!!!

    // ⬇⬇⬇ PORU DETAILS
    playSource: process.env.PLAY_SOURCE || "ytsearch", // <==== SET YOUR PLAY SOURCE || "ytsearch","ytmsearch","scsearch"
    poruOptions: {
        defaultPlatform: process.env.DEFAULT_SOURCE || "ytsearch", // <==== SET DEFAULT SOURCE || "ytsearch","ytmsearch","scsearch"
        clientID: process.env.SPOTIFY_ID || "f71a3da30e254962965ca2a89d6f74b9", // <==== SPOTIFY CLIENT ID
        clientSecret: process.env.SPOTIFY_SECRET || "199a619d22dd4e55a4a2c1a7a3d70e63", // <==== SPOTIFY CLIENT SECRET
        reconnectTries: 5, // <==== TOTAL ATTEMPS TO TRY IF RECONNECT FAILED. YOU CAN CHANGE IT TO "Infinity" FOR UNLIMITED ATTEMPS.
        playlistLimit: 2, // <==== 1 = 100 TRACKS
        albumLimit: 2, // <==== 1 = 50 TRACKS
        artistLimit: 2, // <==== 1 = 50 TRACKS
        searchMarket: "us",
    },
    nodes: [
        {
            name: process.env.NODE_NAME1 || "Node 1", // lavalink node name (anything you want)
            host: process.env.NODE_HOST1 || "robinz_lavalink.4tunez.xyz", // <==== LAVALINK NAME HOST
            port: parseInt(process.env.NODE_PORT1 || "2333"), // <==== LAVALINK PORT
            password: process.env.NODE_PASSWORD1 || "youshallnotpass", // <==== PASSWORD/AUTH
            secure: parseBoolean(process.env.NODE_SECURE1 || "false"), // <==== LAVALINK SECURE "true/false"
        }
    ],

    // ⬇⬇⬇ LINK BOTS DETAILS
    mongoUri: process.env.MONGO_URI || "mongodb+srv://shiva:shiva@discordbot.opd5w.mongodb.net/?retryWrites=true&w=majority", // <==== YOUR MONGODB LINK
    supportUrl: process.env.SUPPORT_URL || "https://dsc.gg/nirvax", // <==== YOUR SUPPORT SERVER LINK
    voteUrl: process.env.VOTE_URL || "https://dsc.gg/nirvax", // <==== YOUR VOTE URL
    inviteUrl: process.env.INVITE_URL || "https://discord.com/oauth2/authorize?client_id=1297474705867145287&permissions=603221717739584&integration_type=0&scope=bot", // <==== YOUR BOT INVITE LINK
    imageUrl: process.env.IMAGE_URL || "https://cdn.discordapp.com/attachments/1350357128409382912/1350403135633494048/standard.gif?ex=67d7452c&is=67d5f3ac&hm=2e757f510498dcbda5408844f864d13911aec47d0a245b0a01c6f2fd5eab8af5&", // <==== YOUR IMAGE LINK 
};

function parseBoolean(value) {
    if (typeof value === "string") {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}


/**
 * @INFO
 * Bot Coded by Science Gear | https://www.youtube.com/c/ScienceGearYT
 * @INFO
 *  Muzio Bot | https://dsc.gg/sciencegear
 * @INFO
 * Don't Remove Credits
 * @INFO
 */
