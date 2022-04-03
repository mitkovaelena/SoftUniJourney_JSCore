let fibonacci = (function () {
    let arr = [1];
    return function (n) {
        for (let i = 1; i < Number(n); i++) {
            let next = 0;
            if(i==1) next = 1;
            else next = (arr[i-2]+arr[i-1])
            arr.push(next);
        }
        return arr;
    }
})();


function listProcesor(commands) {
    let commandProcessor = (function () {
        let arr = []
        return{
            add: (n) =>  arr.push(n),
            remove: function (n){
                while(true) {
                    let ind = arr.indexOf(n)
                    if (ind >= 0)arr.splice(ind, 1)
                    else break;
                }},
            print: () => console.log(arr.join(","))
        }
    })();

    for (let cmd of commands) {
        let [cmdName, arg] = cmd.split(' ');
        commandProcessor[cmdName](arg);
    }
}

listProcesor(['add hello', 'add again', 'remove hello', 'add again', 'print'])