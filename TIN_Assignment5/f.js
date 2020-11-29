class Person {

    constructor(fname,lname) {
        this.fname=fname;
        this.lname=lname;
    }

    get name() {
        return this.fname + " " +this.lname;
    }

    set name(name) {
        this.fname=name[0];
        this.lname=name[1];
    }

    printer(){
        console.log("Person: " + this.fname + " " + this.lname);
    }
}

class Student extends Person {


    constructor(fname, lname, id, grades) {
        super(fname, lname);
        this.id=id;
        this.grades=grades;
    }

    get avgGrade(){
        let avgGrade = 0;
        avgGrade = this.grades.reduce((acc, c) => acc + c, 0);
        avgGrade/=this.grades.length;
        return avgGrade;
    }

    printer(){
        console.log("Student: " + this.fname + " " + this.lname + " avg grade: " + this.avgGrade);
    }
}

let person = new Person("Jan","Kowalski");
person.printer();
let student = new Student("Jon","kowolski",1323,[3,3,3,3]);
student.printer();