class Card {
    constructor() {
        this.index = Card.INDEX;
        this.description = null;
        this.picture = null;
        this.name = null;
        this.surname = null;
        this.color = null;

        Card.INDEX++;
    }

    setDescription(description) {
        this.description = description;
    }

    setPicture(picture) {
        this.picture = picture;
    }

    setName(name) {
        this.name = name;
    }

    setSurname(name) {
        this.surname = name;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add(`card-${this.index}`);
        const styleElem = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = `.card-${this.index}::before { filter: ${this.color};  }`;
        div.innerHTML = `
            <img class='picture' src=${this.picture} />
            <h4 class='name'>
                ${this.name}
                <small>
                    ${this.surname}
                </small>
            </h4>
            <div class='description'>
                ${this.description}
            </div>
        `;
        return div;
    }
}

Card.INDEX = 0;

export default Card;