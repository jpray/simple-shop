import { LitElement, html } from "lit-element";

class BaseElement extends LitElement {
    // returning "this" turns off shadow DOM for our custom elements
    // which makes styling and events more intuitive
    createRenderRoot() {
        return this;
    }
}

export { BaseElement, html };