function AJAXrequester(input) {
     let hashPattern = input.pop();
     let times = Number(hashPattern[0])
     let letters = hashPattern.split("").filter(x => x != Number(x))

    for (let i = 0; i < input.length; i++) {
        let method = input[i++]
        let credentials = input[i++]
        let content = input[i]

        let creditPattern =  /^Credentials: (Basic|Bearer) [A-Za-z0-9]+$/;
        let methodPattern =  /^Method: (GET|POST|PUT|DELETE)$/;
        let contentPattern =  /^Content: [A-Za-z0-9\.]*$/;

        let occs = [];
        for (let k = 0; k < letters.length; k++) {
            let hashRegEx = new RegExp(letters[k], "gi"); //i?
            let matches = (credentials.split(" ")[2].match(hashRegEx) || []).length
            occs.push(matches);
        }

        if(!creditPattern.test(credentials) ||!methodPattern.test(method) ||!contentPattern.test(content))
             console.log("Response-Code:400")

        else if(credentials.split(" ")[1] == "Basic" && method.split(" ")[1] != "GET")
             console.log(`Response-Method:${method.split(" ")[1]}&Code:401`)

        else if ( !occs.includes(times))
            console.log(`Response-Method:${method.split(" ")[1]}&Code:403`)
        else
             console.log(`Response-Method:${method.split(" ")[1]}&Code:200&Header:${credentials.split(" ")[2]}`)
    }

}

AJAXrequester(['Method: GET',
'Credentials: Bearer asqqd918',
'Content: uqsqers.asd.1782452.278asd',
'Method: POST',
'Credentials: Bearer 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas',
'Content: Johnathan',
'2qs'])