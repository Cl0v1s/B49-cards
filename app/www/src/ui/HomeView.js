import { html, define, render } from 'hybrids';
import './Deck';

export const Home = {
    render: render(
        () => html`
            <b49-deck></b49-deck>
            <button class='btn btn--float'>
                <i class="fa fas fa-qrcode fa-lg"></i>
            </button>
        `,
        { shadowRoot: false },
    ),
};

define('b49-home', Home);