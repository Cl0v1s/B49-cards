import Discover from './Discover';
import CardFactory from './CardFactory';

(async function () {
    const site = "https://clovis-portron.github.io/B49-cards/site";
    CardFactory.setSite(site);

    const discover = new Discover();
    await discover.start();

    const promises = discover.devices.map(device => CardFactory.buildCardFromId(device.id));
    const cards = (await Promise.all(promises)).filter(e => e != null);
    console.log(cards);
})();