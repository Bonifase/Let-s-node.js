var gradeBook = {
    _grades : [],
    addGrade: (newGrade) => {
        gradeBook._grades.push(newGrade)
    },
    getCountOfGrades: () => {
        return gradeBook._grades.length
    },
    getAverage: () => {
        var total = 0
        for(var i = 0; i < gradeBook._grades.length; i++){
            total += gradeBook._grades[i]
        }
        console.log(gradeBook._grades[i])
        return total / gradeBook._grades.length
    },
    reset: () => {
        gradeBook._grades = []
    }
};

exports.book = gradeBook