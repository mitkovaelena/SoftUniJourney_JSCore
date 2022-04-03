function spyMaster(input){
 let specialKey = input.shift().trim().split(" ")[0];

    for (let line = 0; line < input.length; line++) {      
        let str =  input[line].split(" ");

        let validWordPattern = /^[!%\$#A-Z]{8,}[\.,]*$/
        let regExp = new RegExp("^" + specialKey + "$", "i")

        for (let i = 0; i < str.length; i++) {
            if(validWordPattern.test(str[i])){
                let j = i-1;
            while(str[j] != undefined && (str[j] == " " || str[j] == "")) j--;

                if(regExp.test(str[j])) {
                    str[i] = str[i].replace(/!/g, "1").replace(/%/g, "2").replace(/#/g, "3").replace(/\$/g, "4").toLowerCase();
                }
            }
        }
        str = str.join(" ")
        console.log(str)
    }
}

spyMaster(["specialKey",
    "SpeCIaLkeY,     SOM%%ETH$IN In this text the specialKey HELLOWORLD! is correct, but",
    "the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while",
    "SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!"])