import './../scss/main.scss';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';

import Discover from './Discover';
import CardFactory from './CardFactory';

import {init } from './ui/HomeView';

window.addEventListener('load', async () => {
    const site = "https://clovis-portron.github.io/B49-cards/site";
    CardFactory.setSite(site);

    const home = document.querySelector('b49-home');
    init(home);
});