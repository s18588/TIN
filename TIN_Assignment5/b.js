function Student(fname,lname,id,grades) {
    this.fname=fname;
    this.lname=lname;
    this.id=id;
    this.grades=grades;
    this.printer=function() {
        avgGrade = grades.reduce((acc, c) => acc + c, 0);
        avgGrade/=grades.length;
        console.log("Student: " + fname + " " + lname + " avg grade: " + avgGrade);
    }
}
let student = new Student("Michal", "Arent", 18588, [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]);
student.printer();