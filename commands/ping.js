module.exports = (function() {
	let run = function(msg) {
		msg.channel.send("PONG!");
	}

	return {
		run: run
	}
})();