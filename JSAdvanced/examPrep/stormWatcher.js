let stormWatcher= (function () {
    let uniqueId = 0;

    return class Record {
        constructor(temperature, humidity, pressure, windSpeed) {
            [this.temperature, this.humidity, this.pressure, this.windSpeed] = [temperature, humidity, pressure, windSpeed]
            this.id = uniqueId++;
        }
        toString(){
            let forecast = "Not stormy"
            if(this.temperature < 20 && (this.pressure < 700 || this.pressure >900) && this.windSpeed >25)
                forecast = "Stormy"
            return `Reading ID: ${this.id}\nTemperature: ${this.temperature}*C\nRelative Humidity: ${this.humidity}%\nPressure: ${this.pressure}hpa\nWind Speed: ${this.windSpeed}m/s\nWeather: ${forecast}`
        }
    }
})()
