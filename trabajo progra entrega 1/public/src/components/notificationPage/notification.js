class NotificationPage extends HTMLElement {

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
        <link rel="stylesheet" href="./src/components/notificationPage/notification.css">
        <p>${this.message || ''}</p>
        `;
    }
}

customElements.define('notification-page', NotificationPage );
export default NotificationPage ;