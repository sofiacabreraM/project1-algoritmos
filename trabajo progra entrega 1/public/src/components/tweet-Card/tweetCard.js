class tweetCard extends HTMLElement {

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
        <link rel="stylesheet" href="./src/components/tweet-Card/tweetCard.css">
        <p>${this.message || ''}</p>
        `;
    }
}

customElements.define('tweet-card', tweetCard);
export default tweetCard;
