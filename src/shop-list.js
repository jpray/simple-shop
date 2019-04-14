import { BaseElement, html } from "./toolkit";
import "./shop-list.scss";

class ShopList extends BaseElement {
    render() {
        return html`
            shop list
        `;
    }
}

customElements.define("shop-list", ShopList);