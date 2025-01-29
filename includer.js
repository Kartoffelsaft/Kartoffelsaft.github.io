class IncludeHTML extends HTMLElement {
    static observedAttributes = ["src"];

    constructor() {
        super();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "src") {
            fetch(newValue).then((response) => {
                response.text().then((content) => {
                    this.innerHTML = content;
                });
            });
        }
    }
}

customElements.define("include-html", IncludeHTML);
