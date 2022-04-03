function QueryStringsMess(input) {

    for(let line of input){
        line = line.split(/[\?\&]/);
        let fields = new Map();
        let field ;
        let value;
        for(let l of line){
            if(l.indexOf("=")>0){
                [field, value] = l.split("=");
                field = field.replace(/\+/g, " ")
                field = field.replace(/\%20/g, " ")
                field = field.replace(/\s+/g, " ")
                value = value.replace(/\+/g, " ")
                value = value.replace(/\%20/g, " ")
                value = value.replace(/\s+/g, " ")
                field = field.trim();
                value = value.trim();

                let valueArr = [];
                if (fields.has(field))
                    valueArr = fields.get(field);
                valueArr.push(value);
                fields.set(field, valueArr)
            }
        }
        let log = "";
        for(let [f,v] of fields){
            log+= `${f}=[${v.join(", ")}]`
        }
        console.log(log)
    }
}

QueryStringsMess(["fantasy=lord%20of%the%rings&fantasy=the%20%20hobbit&fantasy=harry+potter+and++++the+++deathly%20hallows%20&autor=j.k.rowling&autor=j.r.r.tolkien",    "fantasy=a%20%20dance+with+the+drag000ns&shitbooks=twilight+++"])