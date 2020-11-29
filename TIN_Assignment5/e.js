class Student{


    constructor(fname,lname,id,grades) {
        this.fname=fname;
        this.lname=lname;
        this.id=id;
        this.grades = grades;
    }

    get avgGrade(){
        let avgGrade = 0;
        avgGrade = this.grades.reduce((acc, c) => acc + c, 0);
        avgGrade/=this.grades.length;
        return avgGrade;
    }

    get name() {
        return this.fname + " " +this.lname;
    }

    set name(name) {
        this.fname=name[0];
        this.lname=name[1];
    }

    printer(){
        console.log("Student: " + this.fname + " " + this.lname + " avg grade: " + this.avgGrade);
    }
}
let student = new Student("Michal", "Arent", 18588, [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]);
student.printer();