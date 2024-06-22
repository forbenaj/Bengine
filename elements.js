class BengineElement {
    constructor() {
        //this.tagName = tagName;
        this.attributes = {};
    }
    initialize() {
        for(i=0;i<this.attributes.length;i++){
            let name = this.attributes[i].name
            let value = this.attributes[i].value
        }
    }
}

class GameElement extends BengineElement {
    constructor(id, attributes) {
        super();
        this.tagName = 'game'
        this.id = id;
        this.attributes = attributes;
    }
}

class SceneElement extends BengineElement {
    constructor(id, attributes) {
        super();
        this.tagName = 'scene'
        this.id = id;
        this.attributes = attributes;
    }
}

class BackgroundElement extends BengineElement {
    constructor(id, attributes) {
        super();
        this.tagName = 'background'
        this.id = id;
        this.attributes = attributes;
    }
}

class GameObjectElement extends BengineElement {
    constructor(id, attributes) {
        super();
        this.id = id;
        this.attributes = attributes;
    }
}

class PlayerElement extends GameObjectElement {
    constructor(id, attributes) {
        super();
        this.tagName = 'player'
        this.id = id;
        this.attributes = attributes;
    }
}

class ItemElement extends GameObjectElement {
    constructor(id, attributes) {
        super();
        this.tagName = 'item'
        this.id = id;
        this.attributes = attributes;
    }
}

class NPCElement extends GameObjectElement {
    constructor(id, attributes) {
        super();
        this.tagName = 'npc'
        this.id = id;
        this.attributes = attributes;
    }
}

var bengineElements = {
    game: GameElement,
    scene: SceneElement,
    background: BackgroundElement,
    player: PlayerElement,
    item: ItemElement,
    npc: NPCElement
}

var bengine = []

function initializeElements(){
    for (let tagName in bengineElements) {
        if (bengineElements.hasOwnProperty(tagName)) {

            const elementsOfType = document.getElementsByTagName(tagName);
    
            for (let i = 0; i < elementsOfType.length; i++) {
               let element = elementsOfType[i]
                bengine.push(new bengineElements[tagName](element.id,element.attributes))
            }
        }
    }
}

document.addEventListener('DOMContentLoaded',()=>initializeElements())