class FeedCard extends HTMLElement {

    static get observedAttributes() {
        return ["message"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" }); 
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/feedCard/feedCard.css">
        <p>${this.message || ''}</p>
        `;
    }
}

customElements.define('feed-card', FeedCard);
export default FeedCard;