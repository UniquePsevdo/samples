let Button = function(content){
    this.content = content;
}

Button.prototype.click = function(){
    console.log(`${this.content} clicked`);
}

let button = new Button('add');
// button.click()   // will work

let looseClick = button.click;
looseClick();       // will not work
let findClick = button.click.bind(button);
findClick()         // will work again