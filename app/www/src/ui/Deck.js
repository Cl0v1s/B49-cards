import { html, define, property, render } from 'hybrids';
import CardFactory from './../CardFactory';


export const Deck = {
    cards: [],

    render: render(
        ({ cards }) => html`
            <div class='cards' innerHTML=${cards.map(c => c.render()).join('')}>
            </div>
        `,
        { shadowRoot: false },
    ),
};

define('b49-deck', Deck);