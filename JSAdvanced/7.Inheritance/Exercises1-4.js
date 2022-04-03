function Balloons() {
 class Balloon{
    constructor(color, gasWeight ){
        [this.color, this.gasWeight ] = [color, gasWeight]
    }

 }
    class PartyBalloon extends Balloon{
        constructor(color, gasWeight, ribbonColor , ribbonLength){
            super(color,gasWeight);
            this._ribbon = {
                color: ribbonColor,
                length:ribbonLength
            }
        }
        get ribbon(){
            return this._ribbon;
        }
    }
    class BirthdayBalloon extends PartyBalloon{
        constructor(color, gasWeight, ribbonColor , ribbonLength, text){
            super(color, gasWeight, ribbonColor , ribbonLength);
            this._text = text
        }
        get text(){
            return this._text;
        }
    }
    return { Balloon, PartyBalloon, BirthdayBalloon }
}

function People() {
    class Employee {
        constructor(name,age){
            if (new.target === Employee) {
                throw new TypeError("Cannot construct Abstract instances directly");
            }
            [this.name,this.age] = [name,age]
            this.salary = 0;

        }
        work(){
            let currentTask = this.tasks.shift();
            console.log(this.name+currentTask);
            this.tasks.push(currentTask);
        }
        collectSalary(){
            return `${this.name} received `
        }
    }

    class Junior extends Employee{
        constructor(name,age){
            super(name,age);
            this.tasks=[" is working on a simple task."];
        }
        collectSalary(){
            console.log(super.collectSalary() + `${this.salary} this month.`)
        }
    }

    class Senior extends Employee{
        constructor(name,age){
            super(name,age);
            this.tasks=[" is working on a complicated task.",
                " is taking time off work.",
                " is supervising junior workers."];
        }
        collectSalary(){
            console.log(super.collectSalary() + `${this.salary} this month.`)
        }
    }

    class Manager extends Employee{
        constructor(name,age){
            super(name,age);
            this.tasks=[" scheduled a meeting.",
                " is preparing a quarterly report."];
            this.dividend = 0;
        }
        collectSalary(){
            console.log(super.collectSalary() + `${Number(this.salary)+Number(this.dividend)} this month.`)
        }
    }
    return { Employee, Junior, Senior, Manager}
}

function Posts() {
    class Post{
        constructor(title, content ){
            [this.title, this.content ] = [title, content]
        }
        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes ){
            super(title, content );
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments =[];
        }
        addComment(comment){
            this.comments.push(comment)
        }
        toString(){
            let output = `${super.toString()}\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                output += "\nComments:";
                for (let c of this.comments) {
                    output += `\n * ${c}`
                }
            }
            return output;
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content );
            this.views = views;
        }
        view(){
            this.views++;
            return this;
        }
        toString(){
            return super.toString()+`\nViews: ${this.views}`

        }
    }
    return { Post, SocialMediaPost, BlogPost }
}

function Elemelons() {
    class Melon {
        constructor(weight,melonSort){
            if (new.target === Melon) {
                throw new TypeError('Abstract class cannot be instantiated directly');
            }
            [this.weight,this.melonSort] = [weight,melonSort]
            this.elementIndex = this.weight * this.melonSort.length;
            this.element =  String(this.constructor.name).substring(0,this.constructor.name.length-5);

        }
        toString(){
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

    class Watermelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort)
        }
    }
    class Firemelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort)
        }
    }
    class Earthmelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort)

        }
    }
    class Airmelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort)

        }
    }
    class Melolemonmelon extends Watermelon{
        constructor(weight,melonSort){
            super(weight,melonSort)
            this.element = "Water"
            this.elements = ["Fire", "Earth", "Air","Water"]
        }
        morph(){
            let elem = this.elements.shift();
            this.element = elem;
            this.elements.push(elem);
        }
    }
    return { Melon, Watermelon, Firemelon,Earthmelon,Airmelon,Melolemonmelon}
}

let result = Elemelons();
let wm = new result.Watermelon(24,"eli")
console.log(wm.toString())
