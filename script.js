class Player extends HTMLElement{
    static get observedAttributes() {
        return ['text', 'color']; // List all attributes to observe
    }
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');

        const content = document.createElement('span');
        content.textContent = this.getAttribute('text') || 'Default text';

        const style = document.createElement('style');
        style.textContent = `
            .wrapper {
                padding: 10px;
                background: lightblue;
                border: 1px solid blue;
                border-radius: 5px;
            }
        `;

        this.shadowRoot.append(style, wrapper);
        wrapper.append(content);

        if (this.hasAttribute('text')) {
            this.content.textContent = this.getAttribute('text');
        } else {
            this.content.textContent = 'Default text';
        }

        if (this.hasAttribute('color')) {
            this.wrapper.style.backgroundColor = this.getAttribute('color');
        }
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'text') {
            this.content.textContent = newValue;
        } else if (name === 'color') {
            this.wrapper.style.backgroundColor = newValue;
        }
    }
}


customElements.define('player-', Player);