function Arithmephile(input){
    input = input.map(Number)
    let products = [];
    for (let i = 0; i < input.length; i++) {
        let num = input[i];
       if(num>=0 && num<=9){
           let product = 1;
           for (let j = 1; j < Math.min(num+1,input.length-i); j++) {
            product *= input[i+j];
           }
           products.push(product)
       }
    }
products = products.sort((a,b)=>b-a);
    console.log(products[0]);
}

Arithmephile(["10",
    "20",
    "2",
    "30",
    "44",
    "123",
    "3",
    "56",
    "20",
    "24"])