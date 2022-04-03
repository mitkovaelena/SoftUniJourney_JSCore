let result = (function() {
    class Textbox {
    constructor(selector, regex) {
        this.selector = selector;
        this._elements = $(selector);
        this._invalidSymbols = regex;

        let that = this;
        $(selector).on('input change', function () {
            that.value = $(this).val();
        });
    }

    get value() {
        return $(this.selector).val();
    }

    set value(value) {
        $(this.selector).val(value);
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test($(this.selector).val());
    }
}

class Form {
    constructor(...textboxes) {                   //to array
        for (let t of textboxes){
            if(!Textbox.prototype.isPrototypeOf(t)){
                throw new Error('Argument is not an instance of TextBox class');
            }
        }
        this._element = $('<div>').addClass('form');
        this._textboxes = textboxes;
        for (let t of textboxes){
            this._element.append($(t.selector))
        }

    }

    submit() {
        let valid = true;
        for(let t of this._textboxes){
            if(t.isValid()){
                $(t.selector).css("border", "2px solid green")
            }
            else{
                $(t.selector).css("border", "2px solid red")
                valid =false;
            }
        }
        return valid
    }

    attach(selector){
        $(this._element).appendTo($(selector))
    }
}
    return {Textbox: Textbox, Form: Form}
})();

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.attach("#root");


