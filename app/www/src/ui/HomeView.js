import { html, define, render } from 'hybrids';
import './Deck';

import Discover from './../Discover';
import CardFactory from './../CardFactory';

const scan = async (host) => {
    const discover = new Discover();
    await discover.start();

    const promises = discover.devices.map(device => CardFactory.buildCardFromId(device));
    let cards = (await Promise.all(promises)).filter(e => e != null);
    cards = cards.concat(CardFactory.load());
    CardFactory.save(cards);
    host.cards = cards;
}

export const Home = {
    cards: CardFactory.load(),
    render: render(
        ({cards}) => html`
            <b49-deck cards=${cards}></b49-deck>
            <button class='btn btn--float' onclick=${scan}>
                <i class="fa fas fa-qrcode fa-3x"></i>
            </button>
        `,
        { shadowRoot: false },
    ),
};

define('b49-home', Home);