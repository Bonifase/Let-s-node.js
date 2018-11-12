var book = require("../lib/grades").book

exports["setUp"] = (callable) => {
    book.reset();
    callable();
}

exports["Can average grades"] = (test) => {
    book.addGrade(90); 
    book.addGrade(50);
    var average = book.getAverage();
    test.equal(average, 70);
    test.done() ;
}
exports["Can add new grade"] = (test) => {
    book.addGrade(80);
    var count = book.getCountOfGrades();
    test.equal(count, 1);
    test.done();
}
