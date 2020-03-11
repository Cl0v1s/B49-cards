import './../scss/main.scss';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';

import Discover from './Discover';
import CardFactory from './CardFactory';

import './ui/HomeView';

(async function () {
    const site = "https://clovis-portron.github.io/B49-cards/site";
    CardFactory.setSite(site);

    const discover = new Discover();
    await discover.start();

    const promises = discover.devices.map(device => CardFactory.buildCardFromId(device));
    const cards = (await Promise.all(promises)).filter(e => e != null);
    CardFactory.save(cards);

    const element = document.createElement('b49-home');
    document.body.appendChild(element);
})();