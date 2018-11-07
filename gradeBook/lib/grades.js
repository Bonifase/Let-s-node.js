var gradeBook = {
    _grades : [],
    addGrade: (newGrade) => {
        gradeBook._grades.push(newGrade)
    },
    getCountOfGrades: () => {
        return gradeBook._grades.length
    }
};

exports.book = gradeBook