var botkit = require('botkit');

// token情報の管理
if (!process.env.token) {
  console.log('Error: Specify token in environment');
  process.exit(1);
}

var controller = Botkit.slackbot({
    debug: false
});

// RTM化, エラーキャッチ
controller.spawn({
    token: process.env.token
}).startRTM(function(err){
    if (err) {
        throw new Error(err);
    }
});

// Hello World投稿
controller.hears('こんにちは',['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,'Hello World');
});