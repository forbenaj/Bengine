class Player {
    constructor(element) {
        this.id;
        this.pos = {x:0,y:0}
        this.size = {w:0,h:0}
        this.img;
        this.element = element;
    }
}

let player = new Player(document.currentScript.parentNode)

function Bob(parent){
    console.log(parent)
}