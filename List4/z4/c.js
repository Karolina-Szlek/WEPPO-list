var moduleFirst = require('./a');

function ModuleThird() {
}

ModuleThird.hello = function () {
  console.log(" teraz w 3")
  moduleFirst.hello();
}

ModuleThird.hello2 = function () {
  console.log(" teraz w 3.2")
  moduleSecond.hello2();

};

module.exports = ModuleThird;