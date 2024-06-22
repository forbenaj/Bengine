class HTMLElement {
    constructor(tagName, attributes = {}, innerHTML = '') {
        this.tagName = tagName.toLowerCase();
        this.attributes = attributes;
        this.innerHTML = innerHTML;
        this.children = [];
    }

    setAttribute(name, value) {
        this.attributes[name] = value;
    }

    addChild(child) {
        this.children.push(child);
    }

    render() {
        const element = document.createElement(this.tagName);

        // Set attributes
        for (const [attr, value] of Object.entries(this.attributes)) {
            element.setAttribute(attr, value);
        }

        // Set innerHTML if present
        if (this.innerHTML) {
            element.innerHTML = this.innerHTML;
        }

        // Append children
        for (const child of this.children) {
            if (child instanceof HTMLElement) {
                element.appendChild(child.render());
            } else {
                const textNode = document.createTextNode(child);
                element.appendChild(textNode);
            }
        }

        return element;
    }
}

// Example usage:
const div = new HTMLElement('div', { id: 'myDiv', class: 'container' }, 'Hello, World!');
const span = new HTMLElement('span', {}, 'This is a span element.');
div.addChild(span);

// Render the div and append it to the body
document.body.appendChild(div.render());
