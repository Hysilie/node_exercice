let userInformation = require('./information');


var cowsay = require("cowsay");

console.log(cowsay.say({
    text : (`I'm ${userInformation.name} and I study at ${userInformation.campus}`),
    e : "OO",
    T : "U "
}));
