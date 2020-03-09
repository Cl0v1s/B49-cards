import Card from './Card';

class CardFactory {
    static setSite(site) {
        CardFactory.SITE = site;
    }

    static async ping(id) {
        const response = await fetch(`${CardFactory.SITE}/${id}/content.txt`);
        return response;
    }

    static async buildCardFromId(_id) {
        const id = _id.replace(/:/g, '-');
        const content = await CardFactory.ping(id);
        if(content.ok == false) {
            return null;
        }
        const card = new Card();
        card.setPicture(`${CardFactory.SITE}/${id}/picture.png`);
        card.setDescription(await content.text());
        return card;
    }
}

CardFactory.SITE = null;

export default CardFactory;