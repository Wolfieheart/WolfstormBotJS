module.exports = (function() {

    let run = function(msg) {
        const uptimeHrs = Math.floor(process.uptime() / (60 * 60));
        const uptimeMins = Math.floor(process.uptime() % (60 * 60) / 60);
        const uptimeSecs = Math.floor(process.uptime() % 60);

        msg.channel.send(`I have been alive for: **${uptimeHrs} Hours ${uptimeMins} Minutes and ${uptimeSecs} Seconds**`);
    }

    return {
        run: run
    }
})();
