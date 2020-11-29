function Student(fname,lname,id,grades) {
    this.fname=fname;
    this.lname=lname;
    this.id=id;
    this.grades=grades;

    Object.defineProperties(this, {
        "avg": {
            "get": function() {
                avgGrade = grades.reduce((acc, c) => acc + c, 0);
                avgGrade/=grades.length;
                return avgGrade;
            }
        },
        "name" : {
           "get": function() {
               return this.fname + " " +this.lname;
           },
           "set": function(name) {
               this.fname=name[0];
               this.lname=name[1];
           }
        }
    })

    this.printer=function() {
        console.log("Student: " + fname + " " + lname + " avg grade: " + this.avg);
    }
}
let student = new Student("Michal", "Arent", 18588, [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]);
student.printer();
