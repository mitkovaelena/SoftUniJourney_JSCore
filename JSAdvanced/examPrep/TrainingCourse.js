class TrainingCourse {
    constructor(title, trainer){
        this.title = title;
        this.trainer = trainer;
        this.topics = []
    }

    addTopic(title,date){
        let obj = {};
        obj.title = title;
        obj.date = date;
        this.topics.push(obj)

        this.topics.sort((a,b) => (a.date - b.date));

    }
    
    get firstTopic(){
        return this.topics[0]
    }

    get lastTopic(){
        return this.topics[this.topics.length-1]
    }

    toString(){
        let str = `Course "${this.title}" by ${this.trainer}\n`
        for(let i=0; i < this.topics.length; i++){
            if (i != 0) str+= "\n"
            str += ` * ${ this.topics[i].title} - ${ this.topics[i].date}`
        }
        return str;
    }
}

let js = new TrainingCourse("JS Intro", "Svetlin Nakov");
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);

js.addTopic("Maps", new Date(2016, 9, 6, 18, 0));
js.addTopic("JS Overview", new Date(2016, 8, 27, 18, 0));
js.addTopic("Program Logic", new Date(2016, 8, 29, 18, 0));
js.addTopic("Arrays", new Date(2016, 9, 3, 18, 0));
console.log("First topic: " + JSON.stringify(js.firstTopic));
console.log("Last topic: " + JSON.stringify(js.lastTopic));
console.log("" + js);

let php = new TrainingCourse("PHP Intro", "Ivan Yonkov")
    php.addTopic("Strings", new Date(2017, 2, 16, 18, 0))
    php.addTopic("PHP First Steps", new Date(2017, 2, 12, 18, 0))
    php.addTopic("Arrays", new Date(2017, 2, 14, 18, 0));
console.log("" + php);


