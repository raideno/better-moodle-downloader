export class Button {
    constructor(id) {
        this.button = document.getElementById(id);

        if (this.button === null)
            throw new Error(`No element with the id ${id} was found.`);

        if (this.button.tagName !== "BUTTON")
            throw new Error(`The element with the id ${id} isn't a button.`);
    }

    get element() {
        return this.button;
    }

    SetDisabled(disabled) {
        this.button.disabled = disabled;

        this.button.removeAttribute("disabled");
    }

    SetText(text) {
        this.button.innerText = text;
    }

    SetLoadingState(loading) {
        if (loading) {
            this.button.setAttribute("data-old-text", this.button.innerHTML);

            this.button.innerText = "Loading...";
        } else {
            this.button.innerText = this.button.getAttribute("data-old-text");

            this.button.setAttribute("data-old-text", "");
        }
    }
}