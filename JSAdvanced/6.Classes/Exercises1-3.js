class Request{
    constructor(method="",uri="",version="",message="",response=undefined,fulfilled=false){
        [this.method,this.uri,this.version,this.message,this.response,this.fulfilled]=
            [method,uri,version,message,response,fulfilled];
    }
}

function ticketSort(input,sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            [this.destination, this.price, this.status] =
                [destination, Number(price), status];
        }
    }

    let tickets = [];
    for(let t of input){
        let [dest,price,status] =t.split("|")
        let tckt = new Ticket(dest,price,status);
        tickets.push(tckt);
    }

    tickets.sort(function(a, b){
        let a1= a[sortingCriteria], b1= b[sortingCriteria];
        if(a1== b1) return 0;
        return a1> b1? 1: -1;
    });
    return tickets;
}

class Rat{
    constructor(name){
        this.name = name
        this.unitedRats = [];
    }
    unite(otherRat){
        if(Rat.prototype.isPrototypeOf(otherRat))
        this.unitedRats.push(otherRat)
    }
    getRats(){
        return this.unitedRats
    }
    toString(){
        let united = "";
        for(let r of this.unitedRats){
            united += `\n##${r.name}`
        }
        return `${this.name}${united}`
    }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
