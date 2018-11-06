// Program to simulate the roll of the dice.
// The scope of a variable is essentially where the variable is available.
// A variable is undefined when it is declared but never assigned any value.

var getDieRoll = (diceSize) => {
    console.log("Rolling a dice")
    return Math.ceil(diceSize * Math.random());
};
var showResult = () => {
    console.log(firstDie);
    console.log(secondDie);
    console.log("Total: ", firstDie+secondDie)
}

var firstDie  = getDieRoll(6);
var secondDie = getDieRoll(6);
showResult();
