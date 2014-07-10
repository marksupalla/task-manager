var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');
var home = []
var play = []
var school = []
var option = prompt('home, play, school, or quit? ');

while(option !='quit'){
  var task = prompt('Task: ');

  if(option === 'home'){
    home.push(task);
  }else
  if(option === 'play'){
    play.push(task);
  }else{
    school.push(task);
}
  option = prompt('home, play, school, or quit? ');
}
console.log('HERE IS YOUR LIST OF TASKS: ');
console.log('Home: ' + chalk.red(home));
console.log('Play: ' + chalk.blue(play));
console.log('School: ' + chalk.green(school));

