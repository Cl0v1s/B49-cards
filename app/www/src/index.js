import './../scss/main.scss';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';

import Discover from './Discover';
import CardFactory from './CardFactory';

import {
    init
} from './ui/HomeView';

window.addEventListener('load', async () => {
    const site = "https://clovis-portron.github.io/B49-cards/site";
    CardFactory.setSite(site);

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./src/cache-service.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    }

    const home = document.querySelector('b49-home');
    init(home);
});