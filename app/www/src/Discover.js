class Discover {
    constructor() {
        this.devices = [];
    }

    async start() {
        await this.scan();
    }

    async scan() {
        console.log('starting scan');
        console.log(window.QRScanner);
        if(window.QRScanner) {
            const text = await new Promise(resolve => QRScanner.scan((err, text) => resolve(text)) && QRScanner.show());
            alert(text);
        } else {
            this.devices = ["clovis.portron", "clovis.portron"];
        }
        
        console.log('scan done');
    }
}

export default Discover;