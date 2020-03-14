import { html, define, render } from 'hybrids';
import MatRipple from 'mat-ripple';

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
            <div class='code'>
                <img src=${url} />
            </div>
            <button class='btn btn--float' onclick='${back}'>
                <i class="fa fas fa-undo fa-3x"></i>
                <mat-ripple></mat-ripple>
            </button>
        `,
        { shadowRoot: false },
    ),
};

define('b49-share', ShareView);
