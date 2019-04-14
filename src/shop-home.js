import { BaseElement, html } from "./toolkit";
import "./shop-home.scss";

class ShopHome extends BaseElement {
    render() {
        return html`
            shop home
        `;
    }
}

customElements.define("shop-home", ShopHome);