// A set is am iterable that holds unique values
// Add is used to add value to a set
// Has is used to check if a value exist in a set
let classroom = new Set()
let stevej = {'name': "s", 'age': 22},
    stevep = {'name': "s", 'age': 22},
   jane = {'name': "j", 'age': 23};

classroom.add(stevej);
classroom.add(stevep);
classroom.add(jane);

if (classroom.has(stevej)) console.log("user exist");
console.log("size: ", classroom.size);
classroom.delete(jane);
console.log("size: ", classroom.size);
//craete array from a set
let arrayofStudents = Array.from(classroom);
console.log("Array of stdents: ", arrayofStudents)

// craete a set fro existing array
let alumni = new Set(arrayofStudents);
console.log("Set of stdents: ", alumni)

// Map is a special kind of object used with hash tables
// set methosd is used to add objects to a map, it takes in key-value pair as arguments 
// clear is used to remove the object without destriying is
// get is used get elements, classroom.get("key")

let classRoom = new Map();
let steveJj = {'name': "s", 'age': 22},
    stevePp = {'name': "s", 'age': 22},
   janee = {'name': "j", 'age': 23};

classRoom.set(steveJj, steveJj);
classRoom.set(stevePp, stevePp);
classRoom.set(janee, janee)

console.log("size: ", classRoom.size);
if (classRoom.has(steveJj)) console.log("stevej exist");