class Card {
    constructor(data = {}) {
        this.index = Card.INDEX;
        this.id = data.id;
        this.description = data.description;
        this.picture = data.picture;
        this.name = data.name;
        this.surname = data.surname;
        this.color = data.color;
        this.plainImage = data.plainImage;
        Card.INDEX++;
    }

    setId(id) {
        this.id = id;
    }

    setDescription(description) {
        this.description = description;
    }

    async analysePictureType() {
        const img = new Image();
        img.src=this.picture;
        await new Promise(resolve => (img.onload = resolve));
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
        const pixelData = canvas.getContext('2d').getImageData(0, 0, 1, 1).data;
        if(pixelData[3]>=255) this.plainImage = true;
        console.log(pixelData);
        console.log(this.plainImage);
    }

    async setPicture(picture) {
        const response = await fetch(picture);
        const blob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(blob); 
        await new Promise(resolve => (reader.onloadend = resolve));
        this.picture = reader.result;
        await this.analysePictureType();        
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
            plainImage: this.plainImage
        }
    }

    render() {
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add(`card-${this.index}`);
        div.style.backgroundColor = this.color;
        div.innerHTML = `
            <img class='picture ${this.plainImage ? 'picture-plain' : ''}' src=${this.picture} />
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