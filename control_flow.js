// When the if keyword is used, we pass to javascript an expression which it can evaluate to true of false
// 

var getDieRoll = (diceSize) => {
    console.log("Rolling a dice")
    return Math.ceil(diceSize * Math.random());
};

var roll = getDieRoll(6)

if (roll >= 5){
    console.log("Great roll!")
}
else if (roll <= 1) {
    console.log("That was a terrible roll")
}
else {
    console.log("That was ok roll")
}
console.log("You rolled " + roll)