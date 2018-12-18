// a class is just a blueprint for creating objects tha share similar properties and methods
// a constructor function is a function called by new keyword to create an instance of an object
class Person{
    dance (){
        const dances = [
            'shoki', 
            'gweta',
            'sankoro',
            'gwaragwara',
            'odi'
        ];
        console.log('${this.name} is very nice')
}
constructor({name, age, eyeColor='black'} = {}) {
    this.name = name;
    this.age  = age;
    this.eyeColor = eyeColor;
}
}