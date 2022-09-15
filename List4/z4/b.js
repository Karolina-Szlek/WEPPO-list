var moduleThird = require('./c');

function ModuleSecond() {
}
ModuleSecond.hello = function () {
  console.log("dopiero w 2")
  moduleThird.hello2();
}

ModuleSecond.hello2 = function () {
  console.log("dopiero w 2.2")
  moduleThird.hello();
};

module.exports = ModuleSecond;