import { BaseElement, html } from "./toolkit";
import { getItems } from "./shared/items.service";
import "./shop-list.scss";


class ShopList extends BaseElement {

    static get properties() {
        return {
            items: {
                type: Array
            }
        }
    }

    constructor() {
        super();
        this.items = [];
    }

    async connectedCallback() {
        super.connectedCallback();
        this.items = await getItems();
    }

    render() {
        return html`
            <h1>List of Items</h1>
            <ul>
                ${this.items.map((item) => {
                    return html`
                    <li>
                        ${item}
                    </li>
                    `
                })}
            </ul>
        `;
    }
}

customElements.define("shop-list", ShopList);