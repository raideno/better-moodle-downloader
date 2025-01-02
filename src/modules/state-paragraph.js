export class StateParagraph {
    constructor(id) {
        this.paragraph = document.getElementById(id);

        if (this.paragraph === null)
            throw new Error(`No element with the id ${id} was found.`);

        if (this.paragraph.tagName !== "P")
            throw new Error(`The element with the id ${id} isn't a paragraph.`);
    }

    get element() {
        return this.paragraph;
    }

    HideText() {
        this.SetText("");
        this.SetTheme(StateParagraph.INFO_THEME);
    }

    SetText(text) {
        this.paragraph.innerText = text;
    }

    SetTheme(theme) {
        switch (theme) {
            case StateParagraph.ERROR_THEME:
                this.paragraph.style.color = "red";
                break;
            case StateParagraph.WARNING_THEME:
                this.paragraph.style.color = "orange";
                break;
            case StateParagraph.INFO_THEME:
                this.paragraph.style.color = "blue";
                break;
            case StateParagraph.SUCCESS_THEME:
                this.paragraph.style.color = "green";
                break;
            default:
                this.paragraph.style.color = "black";
                break;
        }
    }

    SetTextAndTheme(text, theme) {
        this.SetText(text);
        this.SetTheme(theme);
    }

    static get ERROR_THEME() {
        return "error";
    }

    static get WARNING_THEME() {
        return "warning";
    }

    static get INFO_THEME() {
        return "info";
    }

    static get SUCCESS_THEME() {
        return "success";
    }
}