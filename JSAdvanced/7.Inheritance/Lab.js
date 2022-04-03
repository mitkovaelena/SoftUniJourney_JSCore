function personAndTeacher() {
    class Person {
        constructor(name, email){
            this.name=name;
            this.email=email;
        }
        toString(){
            let className = this.constructor.name;   //imeto na klasa
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name,email);
            this.subject=subject;
        }
        toString(){
            let newString = super.toString().slice(0, -1)   //do predposledniq
            return newString+`, subject: ${this.subject})`
        }
    }

    class Student extends Person{
        constructor(name, email, course){
            super(name,email)
            this.course=course;
        }
        toString(){
            let newString = super.toString().slice(0, -1)   //do predposledniq
            return newString+`, course: ${this.course})`
        }
    }
    return { Person, Teacher, Student }
}

function extendPrototype(className){
    className.prototype.species = "Human";
    className.prototype.toSpeciesString = function () { return `I am a ${this.species}. ${this.toString()}`}
}

function classHierarchy() {
    class Figure {
        constructor(){
            if (new.target === Figure) {
                throw new TypeError("Cannot construct Abstract instances directly");
            }
        }
        get area(){}
        toString(){}
    }

    class Circle extends Figure{
        constructor(radius){
            super()
            this.radius=radius;
        }
        get area() {
            return this.radius*this.radius*Math.PI;
        }
        toString(){
            return `${this.constructor.name} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure{
        constructor(width, height){
            super()
            this.width=width;
            this.height = height;
        }
        get area() {
            return this.width*this.height;
        }
        toString(){
            return `${this.constructor.name} - width: ${this.width}, height: ${this.height}`
        }
    }
    return { Figure, Circle, Rectangle}
}

//let f = new Figure();       //Error
let c = new Circle(5);
console.log(c.area);        //78.53981633974483
console.log(c.toString());  //Circle - radius: 5
let r = new Rectangle(3,4);
console.log(r.area);        //12
console.log(r.toString());
