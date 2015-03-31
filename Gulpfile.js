var fs = require('fs');
var tasks_folder = './lib/gulp/';
var tasks = fs.readdirSync(tasks_folder);

tasks.forEach(function(task) {
  require(tasks_folder + task);
});
