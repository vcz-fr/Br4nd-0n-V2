const {Base} = require(module.parent.path + "/base/main.js");

class MainClass extends Base {
	constructor(client) {
		super(client);
		this.name = "Restart";
		this.description = "Closes the bot's program";
		this.help = {
			"": "Exits the program"
		};
		this.command_text = "restart";
		this.color = 0xffffff;
		this.auth = [ process.env.ADMIN ];
	}

	command(message, args, kwargs) {
		message.reply("The bot will restart.")
			.then(() => process.exit(1));
	}
}

module.exports = exports = {MainClass}
