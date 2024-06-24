const cowsay = require("cowsay");
const info = require("./information");

console.log(
  cowsay.say({
    text: `I am ${info.name} from ${info.campus}`,
    e: "oO",
    T: "U ",
  })
);
