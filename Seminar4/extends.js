class Student{
    constructor(name, age, grade){
        this.name=name;
        this.age=age;
        this.grade=grade;
    }

    greet() {
        console.log(`Hello! My name is ${this.name}`)
    }
}

class Teacher extends Student{
    constructor(name,age,grade,subject){
        super(name,age,grade);
        this.subject=subject;
    }

    teach(){
        console.log(`I teach ${this.subject}`)
    }
}

const student=new Student('Flavia',20,10);
console.log(student);

const teacher = new Teacher('Ana',45,3,'Matematica');
console.log(teacher);