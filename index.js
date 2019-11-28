console.log("----------------------------");
console.log("Initializing");
console.log("----------------------------");
const SlackBot = require('slackbots');
const dotenv = require('dotenv')

dotenv.config()

const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'Igor'
})

console.log("Running");

bot.on('start', () => {
	const params = {
//		icon_emoji: ':robot_face:'
	}

	bot.postMessageToChannel(
		'general',
		'REBOOT',
        params
        );
	
})

bot.on('error', (err) => {
	console.log(err);
})

bot.on('message', (data) => {
  
  console.log("\n on.message")

  if(data.type !== 'message') {
  console.log("!= message")
    return;
  }

  if(data.subtype !== 'bot_message') {
  console.log("!= bot_message")
    handleMessage(data.text);
  }
})


function handleMessage(message) {
  console.log("handleMessage");

    runMessage(message);
}

function runMessage(message) {
  const params = {
//    icon_emoji: ':male-technologist:'
  }

	bot.postMessageToChannel(
		'general',
    message.toUpperCase(),
        params
        );
}