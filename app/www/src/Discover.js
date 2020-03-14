class Discover {
    constructor() {
        this.devices = [];
    }

    async start() {
        await this.scan();
    }

    async emit(card) {
        const id = btoa(card.id);
        const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${id}`);
        const blob = await response.blob();
        return URL.createObjectURL(blob);
    }

    async scan() {
        console.log('starting scan');
        let result = null;
        if(window.cordova && cordova.plugins && cordova.plugins.barcodeScanner) {
            try {
                result = await new Promise((resolve, reject) => cordova.plugins.barcodeScanner.scan(resolve, reject));
                if(result.cancelled) result = null;
                else {
                    result = atob(result.text);
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