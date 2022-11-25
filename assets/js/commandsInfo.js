var commandsName = {
    0: "account",
    1: "ban",
    2: "banip",
    3: "botinfo",
    4: "deop",
    5: "dynip",
    6: "execute",
    7: "file",
    8: "help",
    9: "list",
    10: "log",
    11: "motd",
    12: "op",
    13: "pardon",
    14: "pardonip",
    15: "ram",
    16: "restart",
    17: "servers",
    18: "start",
    19: "status",
    20: "stop",
    21: "unwhitelist",
    22: "whitelist"
}
var commandsDescription = {
    0: "Get information about your exaroton account.",
    1: "Ban a Minecraft player on your server.",
    2: "Ban the IP of a Minecraft player on your server.",
    3: "Get information about the bot.",
    4: "Remove operators rights from players on your server.",
    5: "Get the Dinamic IP (DynIP) of your server.",
    6: "Execute a Minecraft command on your server.",
    7: "Get the content of text files on your server.",
    8: "Display the list of commands or get information about a single command.",
    9: "Get player list contents of your server.",
    10: "Upload the log of your server to https://mclo.gs/ and share the link.",
    11: "Get or change your server MOTD. MOTD generator: https://motd.gg/",
    12: "Grant a player operator rights on your server.",
    13: "Remove the ban of a player on your server.",
    14: "Remove the ban of an IP on your server.",
    15: "Get or change the RAM on your server.",
    16: "Restart your Minecraft server.",
    17: "Get the list of servers on your exaroton account.",
    18: "Start your Minecraft server.",
    19: "Create an embed to display the status of your server.",
    20: "Stop your Minecraft server.",
    21: "Remove Minecraft players from the whitelist/allowlist on your server.",
    22: "Add Minecraft players to the whitelist/allowlist on your server."
}
var commandsUsage = {
    0: "/account",
    1: "/ban &ltserver name|ID|address&gt &ltMinecraft player&gt",
    2: "/ban-ip &ltserver name|ID|address&gt &ltIP&gt",
    3: "/botinfo",
    4: "/deop &ltserver name|ID|address&gt &ltMinecraft player&gt",
    5: "/dynip &ltserver name|ID|address&gt",
    6: "/execute &ltserver name|ID|address&gt &ltMinecraft command&gt",
    7: "/file &ltserver name|ID|address&gt &ltfile name&gt",
    8: "/help [&ltcommand&gt]",
    9: "/list &ltserver name|ID|address&gt &ltonline players|whitelist|ops|banned players|banned IPs&gt",
    10: "/log &ltserver name|ID|address&gt",
    11: "/motd &ltserver name|ID|address&gt [&ltnew MOTD&gt]",
    12: "/op &ltserver name|ID|address&gt &ltMinecraft player&gt",
    13: "/pardon &ltserver name|ID|address&gt &ltMinecraft player&gt",
    14: "/pardon-ip &ltserver name|ID|address&gt &ltIP&gt",
    15: "/ram &ltserver name|ID|address&gt [&ltnew RAM&gt]",
    16: "/restart &ltserver name|ID|address&gt.",
    17: "/servers",
    18: "/start &ltserver name|ID|address&gt",
    19: "/status &ltserver name|ID|address&gt",
    20: "/stop &ltserver name|ID|address&gt",
    21: "/unwhitelist &ltserver name|ID|address&gt &ltMinecraft player&gt",
    22: "/whitelist &ltserver name|ID|address&gt &ltMinecraft player&gt"
}
var commandsPermission = {
    0: "none",
    1: "none",
    2: "none",
    3: "none",
    4: "none",
    5: "none",
    6: "none",
    7: "none",
    8: "none",
    9: "none",
    10: "none",
    11: "none",
    12: "none",
    13: "none",
    14: "none",
    15: "none",
    16: "none",
    17: "none",
    18: "none",
    19: "none",
    20: "none",
    21: "none",
    22: "none"
}

async function createTable(){
    let tableBody = document.querySelector(".tableBody");
    for(let i = 0; i < Object.keys(commandsName).length; i++){
        tableBody.innerHTML += `
        <tr>
            <td>${commandsName[i]}</td>
            <td>${commandsDescription[i]}</td>
            <td>${commandsUsage[i]}</td>
            <td>${commandsPermission[i]}</td>
        </tr>
        `;
    }
}
createTable();