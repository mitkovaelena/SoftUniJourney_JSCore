function makeCandy(arr) {
    class Candy{
        constructor(topping, filling, spice){
            [this.topping, this.filling, this.spice] = [topping, filling, spice]
        }
    }

    let candies = []

    let regex = ['hazelnut', 'caramel', 'strawberry', 'blueberry', 'yogurt', 'fudge']
    for(let item of arr){
        let [topping, filling, spice] = item.split(":");
        if(item.split(":").length != 3) continue;
        if(topping != 'milk chocolate' && topping != 'white chocolate' && topping != 'dark chocolate' ) continue;
        let fillingSplit = filling.split(",")
        if(fillingSplit.length>3) continue;
        let out = false;
        for (let i = 0; i < fillingSplit.length; i++) {
           if(!regex.includes(fillingSplit[i]) && fillingSplit[i] != "")
               out = true;
        }
        if(out == true) continue;

        if(spice == "poison" || spice == 'asbestos') continue;

        if(filling=="") filling=null;
        if(spice == "") spice=null

        let candy = new Candy(topping,filling,spice)
        candies.push(candy)
    }
    return candies
}

console.log(makeCandy([
        'milk chocolate:hazelnut,caramel,jkj:pumpkin',
        'dark chocolate::chips',
        'white chocolate::poison',  // invalid
        'white chocolate:fudge:',
        'frosting:yogurt:frosting', // invalid
        'dark chocolate:blueberry:rock crystals'
    ])
)