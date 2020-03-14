import { html, define, render } from 'hybrids';

import CardFactory from './../CardFactory';

export const back = (host) => {
    host.remove();
    const element = document.createElement('b49-home');
    element.cards = CardFactory.load();
    document.body.appendChild(element);
};

export const ShareView = {
    render: render(
        ({url}) => html`
            <img src=${url} />
            <button class='btn btn--float' onclick='${back}'>
                <i class="fa fas fa-undo fa-3x"></i>
            </button>
        `,
        { shadowRoot: false },
    ),
};

define('b49-share', ShareView);
