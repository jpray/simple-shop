import { BaseElement, html } from "./toolkit";
import { subscribeToRouteChanges } from "./router";

import "./app-header";
import "./shop-home";
import "./shop-list";

class SimpleShop extends BaseElement {

    constructor() {
        super();
        this._page = "";
    }

    static get properties() {
        return {
            _page: {
                type: String
            }
        }
    }

    connectedCallback() {
        super.connectedCallback();
        this._routerUnsubscribe = subscribeToRouteChanges((routerState) => {
            switch (routerState.route.path) {
                case "/":
                    this._page = "home";
                    break;
                case "/list":
                    this._page = "list";
                    break;
                default: 
                    // handle unknown route
                    this._page = "home";
            }
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this._routerUnsubscribe();
    }

    render() {
        return html`
            <app-header></app-header>
            <main>
                ${this._page === "home" ? html`<shop-home></shop-home>` : html``}
                ${this._page === "list" ? html`<shop-list></shop-list>` : html``}
            </main>
        `;
    }
}

customElements.define("simple-shop", SimpleShop);