class Rectangle{
    constructor(width, height,color){
        [this.width, this.height, this.color]=[width,height,color];
    }
    calcArea(){
        return this.width*this.height;
    }
}

function getPersons() {
    class Person{
        constructor(firstName,lastName,age,email){
            [this.firstName,this.lastName,this.age,this.email] = [firstName,lastName,age,email]
        }
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    return[
        new Person("Maria","Petrova",22,"mp@yahoo.com"),
        new Person("SoftUni"),
        new Person("Stephan","Nikolov",25),
        new Person("Peter","Kolev",24,"ptr@gmail.com")
    ]
}

class Circle{
    constructor(radius){
        this.radius = radius
    }
    get diameter(){
        return this.radius*2;
    }
    set diameter(diameter){
        this.radius = diameter/2;
    }
    get area(){
        return Math.PI*this.radius*this.radius;
    }
}

class Piont{
    constructor(x, y){
        [this.x, this.y]=[x,y];
    }
    static distance(a,b){
        return Math.sqrt((a.x-b.x)*(a.x-b.x)+(a.y-b.y)*(a.y-b.y))
    }
}

(function() {
    let Suits = {
        CLUBS: "\u2663",
        DIAMONDS: "\u2666",
        HEARTS: "\u2665",
        SPADES: "\u2660"
    };
    
    let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    class Card {
        constructor(face, suit) {
            if (!Faces.includes(face)) {
                throw new Error("Invalid card face: " + face)
            }
            if (!Object.keys(Suits).map(
                    k => Suits[k]).includes(suit)) {
                throw new Error("Invalid card suit: " + suit)
            }
            [this._face, this._suit] = [face, suit]
        }

        get face() {
            return this._face
        }

        set face(face) {
            if (!Faces.includes(face)) {
                throw new Error("Invalid card face: " + face)
            }
            this._face = face
        }

        get suit() {
            return this._suit
        }

        set suit(suit) {
            if (!Object.keys(Suits).map(
                    k => Suits[k]).includes(suit)) {
                throw new Error("Invalid card suit: " + suit)
            }
            this._suit = suit
        }

        toString() {
            return `${this._face} ${this._suit}`
        }
    }
    return{Suits, Card}
})()