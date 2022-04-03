class TimeSpan{
    constructor(hours,minutes,seconds){
        if (!Number.isInteger(hours)) {
            throw new RangeError ("Invalid hours: " + hours)
        }
        if (!Number.isInteger(minutes)) {
            throw new RangeError ("Invalid minutes: " + minutes)
        }
        if (!Number.isInteger(seconds)) {
            throw new RangeError ("Invalid seconds: " + seconds)
        }
        this.seconds = seconds+minutes*60+hours*3600
    }

    toString(){
        let secs = ("0"+this.seconds%60).slice(-2)
        let mins = ("0" + Math.floor((this.seconds/60)%60)).slice(-2)
        let hours = Number.parseFloat((this.seconds/3600)%60).toFixed(0)
        return `${hours}:${mins}:${secs}`
    }
}

console.log('' + new TimeSpan(7, 8, 5));