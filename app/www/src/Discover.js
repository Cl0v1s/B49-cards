class Discover {
    constructor() {
        this.devices = [];
    }

    async start() {
        await this.scan();
    }

    async scan() {
        console.log('starting scan');
        let result = null;
        if(window.cordova && cordova.plugins && cordova.plugins.barcodeScanner) {
            try {
                result = await new Promise((resolve, reject) => cordova.plugins.barcodeScanner.scan(resolve, reject));
                if(result.cancelled) result = null;
                else {
                    result = result.text;
                }
            } catch(e) {
                console.error(e);
                alert('Impossible de démarrer l\'appareil photo.');
                result = null;
            }
        } else {
            result = "clovis.portron";
        }
        if(result != null) {
            this.devices = [result];
        }
        console.log('scan done');
    }
}

export default Discover;