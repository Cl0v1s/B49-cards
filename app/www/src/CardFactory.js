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
        card.setPicture(`${CardFactory.SITE}/${id}/picture.png`);
        card.setName(content.name);
        card.setSurname(content.surname);
        card.setColor(content.color);
        card.setDescription(content.description);
        return card;
    }
}

CardFactory.SITE = null;

export default CardFactory;