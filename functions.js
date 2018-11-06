// Program to simulate the roll of the dice

var getDieRoll = () => {
    console.log("Rolling a dice")
    return Math.ceil(6 * Math.random());
};

var firstDie  = getDieRoll();
var secondDie = getDieRoll();
 console.log(firstDie);
 console.log(secondDie);
 console.log("Total: ", firstDie+secondDie)