import { BaseElement, html } from "./toolkit";

class SimpleShop extends BaseElement {
    render() {
        return html`
            Hello SimpleShop
        `;
    }
}

customElements.define("simple-shop", SimpleShop);