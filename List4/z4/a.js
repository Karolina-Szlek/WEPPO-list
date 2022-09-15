function ModuleFirst() {
}

module.exports = ModuleFirst;

var moduleSecond = require('./b');

ModuleFirst.hello = function () {
  console.log('Finaly here!');
};