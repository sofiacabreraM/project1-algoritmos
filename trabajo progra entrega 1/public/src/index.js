import * as components from "./components/export.js";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); 
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <profile-page></profile-page>
    <search-page></search-page>
    <notification-page></notification-page>
    <message-page></message-page>
    <home-page></home-page>
    <img-card></img-card>
    <tweet-card></tweet-card>
    <message-card></message-card>
    <post-card></post-card>
    <like-card></like-card>
    <feed-card></feed-card>
    `;
  }
}

customElements.define("app-container", AppContainer);