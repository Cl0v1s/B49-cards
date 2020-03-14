class Card {
    constructor(data = {}) {
        this.index = Card.INDEX;
        this.id = data.id;
        this.description = data.description;
        this.picture = data.picture;
        this.name = data.name;
        this.surname = data.surname;
        this.color = data.color;
        Card.INDEX++;
    }

    setId(id) {
        this.id = id;
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

    save() {
        return {
            picture: this.picture,
            name: this.name,
            surname: this.surname,
            description: this.description,
            color: this.color,
            id: this.id,
        }
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
        return div.outerHTML;
    }
}

Card.INDEX = 0;

export default Card;