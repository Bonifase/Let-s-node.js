// When the if keyword is used, 
// we pass to javascript an expression which it can evaluate to true of false
//  as illustrated in the program below
// 

var getDieRoll = (diceSize) => {
    console.log("Rolling a dice")
    return Math.ceil(diceSize * Math.random());
};

var roll = getDieRoll(6)
// If construct
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

// while ... do construct
// while(roll < 4){
//     console.log(roll)
// }

do {
    var stars = (roll) => {
        for(var i = 0; i < roll; i++) {
        console.log("That is i", roll)
        return ("*");
    }};
    console.log("Your roll was " + roll, stars(roll))
} while(roll > 5)

// for loop
