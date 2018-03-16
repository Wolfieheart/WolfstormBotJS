module.exports = (function() {
	
	let run = function(msg) {
		const embed = {
		    "title": "**WolfstormBot: DEVELOPER INSTANCE**",
		    "description": "A Discord.JS Bot written with :heart: and care by: Wolfstorm#0001",
		    "url": "https://github.com/Wolfst0rm/WolfstormBotJS/tree/develop",
		    "color": 9352558,
		    "timestamp": new Date(),
		    "footer": {
		        "icon_url": "https://avatars2.githubusercontent.com/u/18635695?s=460&v=4",
		        "text": "Coming Soon 2018/19"
		    },
		    "thumbnail": {
		        "url": "https://avatars2.githubusercontent.com/u/18635695?s=460&v=4"
		    },
		    "author": {
		        "name": "Wolfst0rm",
		        "url": "https://github.com/Wolfst0rm/",
		        "icon_url": "https://avatars2.githubusercontent.com/u/18635695?s=460&v=4"
		    },
		    "fields": [
		        {
		            "name": "__Features__",
		            "value": "Coming Soon!"
		        },
		        {
		            "name": "__Documentation__",
		            "value": "Coming Soon!"
		        },
		        {
		            "name": "__Pull Requests__",
		            "value": "Welcomed! Submit them [here](https://github.com/Wolfst0rm/WolfstormBotJS/pulls)",
		            "inline": true
		        },
		        {
		            "name": "__Issues?__",
		            "value": "Submit them via our [Issue Page](https://github.com/Wolfst0rm/WolfstormBotJS/issues/new)",
		            "inline": true
		        }
		    ]
		};
		msg.channel.send({ embed });
	}

	return {
		run: run
	}
})();