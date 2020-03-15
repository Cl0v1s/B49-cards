import Card from './Card';

class CardFactory {
    static setSite(site) {
        CardFactory.SITE = site;
    }

    static async ping(id) {
        const response = await fetch(`${CardFactory.SITE}/${id}/content.json`);
        return response;
    }

    static async buildCardFromId(_id) {
        const id = _id.replace(/:/g, '-');
        let content = await CardFactory.ping(id);
        if(content.ok == false) {
            return null;
        }
        content = await content.json();
        const card = new Card();
        card.setId(content.id);
        await card.setPicture(`${CardFactory.SITE}/${id}/picture.png`);
        card.setName(content.name);
        card.setSurname(content.surname);
        card.setColor(content.color);
        card.setDescription(content.description);
        return card;
    }

    static save(_cards) {
        const cards = _cards.filter(e => e != null);
        window.localStorage.setItem('cards', JSON.stringify(cards));
    }

    static load() {
        let cards = window.localStorage.getItem('cards');
        cards = cards ? JSON.parse(cards) : [];
        return cards.map(c => new Card(c)).filter(e => e != null);
    }
}

CardFactory.SITE = null;

export default CardFactory;