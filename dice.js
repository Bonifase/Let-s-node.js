// Objests allow us to group related data and functions in a container
// Ojects have names, members, have state(data that object stores) which are also called properties
// accessind an object property that does not exist returns undefined

// creating an object die
 var die = {
     size: 6,
     totalRoles: 0,
     roll: () => {
        console.log("Rolling a dice")
        die.totalRoles += 1
        return Math.ceil(die.size * Math.random());
    }
 };
 
exports.game = die ;