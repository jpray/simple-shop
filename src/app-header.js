import { BaseElement, html } from "./toolkit";
import "./app-header.scss";

class AppHeader extends BaseElement {
    render() {
        return html`
            header
            <ul>
                <li>
                    <a href="#/home">Home</a>
                </li>
                <li>
                    <a href="#/list">List</a>
                </li>
            </ul>
        `;
    }
}

customElements.define("app-header", AppHeader);