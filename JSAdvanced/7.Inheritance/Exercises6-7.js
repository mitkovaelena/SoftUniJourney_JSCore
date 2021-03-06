function createComputerHierarchy() {

    class Keyboard{
        constructor(manufacturer , responseTime ){
            this.manufacturer = manufacturer;
            this.responseTime=responseTime
        }
    }

    class Monitor{
        constructor(manufacturer , width,height ){
            this.manufacturer = manufacturer;
            this.width=width
            this.height = height;
        }
    }

    class Battery{
        constructor(manufacturer , expectedLife ){
            this.manufacturer = manufacturer;
            this.expectedLife=expectedLife
        }
    }

    class Computer{
        constructor(manufacturer , processorSpeed,ram,hardDiskSpace ){
            if (new.target === Computer) {
                throw new Error
            }
            this.manufacturer = manufacturer;
            this.processorSpeed=processorSpeed
            this.ram = ram;
            this.hardDiskSpace=hardDiskSpace
        }
    }

    class Laptop extends Computer{
        constructor(manufacturer , processorSpeed,ram,hardDiskSpace,weight , color,battery ){
            if (!(battery instanceof Battery)) {
                throw new TypeError
            }
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color=color
            this.battery = battery;
        }
        get battery(){
            return this._battery
        }
        set battery(val){
            if (!(val instanceof Battery)) {
                throw new TypeError
            }
            this._battery = val
        }
    }

    class Desktop extends Computer{
        constructor(manufacturer , processorSpeed,ram,hardDiskSpace,keyboard , monitor ){
            if (!(keyboard instanceof Keyboard)) {
                throw new TypeError
            }
            if (!(monitor instanceof Monitor)) {
                throw new TypeError
            }
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor=monitor
        }
        get keyboard (){
            return this._keyboard
        }
        set keyboard(val){
            if (!(val instanceof Keyboard)) {
                throw new TypeError
            }
            this._keyboard = val
        }

        get monitor(){
        return this._monitor
        }

        set monitor(val){
            if (!(val instanceof Monitor)) {
                throw new TypeError
            }
            this._monitor = val
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        }

        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4)
        }

        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace  > Math.floor(this.ram * this.processorSpeed)
        }
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            return (this.manufacturer == this.keyboard.manufacturer)&&(this.manufacturer == this.monitor.manufacturer);
        }

        classToExtend.prototype.isClassy = function () {
            return (this.battery.expectedLife >= 3 && this.weight < 3)&&(this.color == "Black" || this.color == "Silver");
        }
    }
    return {
        computerQualityMixin,
        styleMixin
    }
}


