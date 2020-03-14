import { html, define, render } from 'hybrids';
import MatRipple from 'mat-ripple';
import './Deck';
import './ShareView';


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

const emit = async (host) => {
    const cards = CardFactory.load();
    const discover = new Discover();
    const url = await discover.emit(cards[0]);
    document.querySelector('b49-home').remove();
    const share = document.createElement('b49-share');
    share.url = url;
    document.body.appendChild(share);
}

export const Home = {
    cards: CardFactory.load(),
    render: render(
        ({cards}) => html`
            <b49-deck cards=${cards}></b49-deck>
            <button class='btn btn--float' onclick=${scan}>
                <i class="fa fas fa-qrcode fa-3x"></i>
                <mat-ripple></mat-ripple>
            </button>
            <button class='btn btn--float btn--outline' onclick=${emit}>
                <i class="fa fas fa-share-alt-square fa-2x"></i>
                <mat-ripple></mat-ripple>
            </button>
        `,
        { shadowRoot: false },
    ),
};

define('b49-home', Home);