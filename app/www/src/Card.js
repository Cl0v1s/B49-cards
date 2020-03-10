class Card {
    constructor() {
        this.description = null;
        this.picture = null;
    }

    setDescription(description) {
        this.description = description;
    }

    setPicture(picture) {
        this.picture = picture;
    }

    render() {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <img class='picture' src=${this.picture} />
            <div class='description'>
                ${this.description}
            </div>
        `;
        return div;
    }
}

export default Card;