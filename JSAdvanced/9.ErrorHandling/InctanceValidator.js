class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        if(!typeof clientId === "string" || !typeof Number(clientId) == "number" || clientId.length != 6)
            throw TypeError("Client ID must be a 6-digit number")
        if(!(/[a-zA-Z0-9]+@[a-zA-Z\.]+/).test(email))
            throw TypeError("Invalid e-mail")
        if(firstName.length <3 || firstName.length >20 )
            throw TypeError("First name must be between 3 and 20 characters long")
        let regex = /[^A-Za-z]/
        if(regex.test(firstName))
            throw TypeError("First name must contain only Latin characters")
        if(lastName.length <3 || lastName.length >20 )
            throw TypeError("Last name must be between 3 and 20 characters long")
        if(regex.test(lastName))
            throw TypeError("Last name must contain only Latin characters")
        [this.clientId, this.email, this.firstName, this.lastName ] = [clientId, email, firstName, lastName ]
        this.products = [];
    }
}

let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')