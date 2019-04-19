import { BaseElement, html } from "./toolkit";
import "./shop-home.scss";

class ShopHome extends BaseElement {
    render() {
        return html`
            <h1>Home</h1>
            <div>
                Checkout our <a href="#/list">list of items</a>
            </div>
        `;
    }
}

customElements.define("shop-home", ShopHome);