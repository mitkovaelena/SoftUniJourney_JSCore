function radicalMarketing(input) {
    let peopleSubscribers = new Map();
    let peopleSubscribtions = new Map();
    for (let command of input) {
        let person, subscribed;
        let subscribers = new Set();
        let subscriptions = new Set();
        if(command.indexOf("-")>=0) {

            [person, subscribed] = command.split("-")
            if (peopleSubscribers.has(subscribed) && peopleSubscribers.has(person)) {
                subscribers = peopleSubscribers.get(subscribed)
                subscriptions = peopleSubscribtions.get(person)

                if (subscribed != person) {
                    subscribers.add(person);
                    subscriptions.add(subscribed);
                }
                peopleSubscribers.set(subscribed, subscribers);
                peopleSubscribtions.set(person, subscriptions)
            }
        }
            
        else{
             person = command.trim();
            if(!peopleSubscribers.hasOwnProperty(person) ) {
                peopleSubscribers.set(person, subscribers);
                peopleSubscribtions.set(person, subscriptions)
            }
        }
    }

    let sortable = [];
    for (let [k,v] of peopleSubscribers) {
        sortable.push([k, peopleSubscribers.get(k),peopleSubscribtions.get(k)])
    }

    sortable.sort(
        function(a, b) {
            return b[1].size - a[1].size || b[2].size - a[2].size;
        }
    )
    
    console.log(sortable[0][0])
    let n = 1;
    for(let s of sortable[0][1])
        console.log(`${n++}. ${s}`)
}

radicalMarketing(["A",
    "B",
    "C",
    "D",
    "A-B",
    "B-C",
    "A-C",
    "D-C",
    "C-A",
    "B-A",
    "D-A"])