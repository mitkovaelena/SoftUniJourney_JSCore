function requestValidator(obj) {
if(!obj.hasOwnProperty("method") || (obj.method != "GET" && obj.method != "POST" && obj.method != "CONNECT" && obj.method != "DELETE"))
    throw Error("Invalid request header: Invalid Method")
    let regex = /^(\*)$|^[a-zA-Z0-9\.]+$/g

    if(!obj.hasOwnProperty("uri") || !regex.test(obj.uri))
        throw Error("Invalid request header: Invalid URI")
    if(!obj.hasOwnProperty("version") || (obj.version != "HTTP/0.9" && obj.version != "HTTP/1.0" &&obj.version != "HTTP/1.1" &&obj.version != "HTTP/2.0" ))
        throw Error("Invalid request header: Invalid Version")
    let regex2 = /[<>\\\&\'\"]+/
    if(!obj.hasOwnProperty("message") || regex2.test(obj.message))
        throw Error("Invalid request header: Invalid Message")
    return obj;
}

requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
})
