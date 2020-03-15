import QrScanner from 'qr-scanner';
import QrScannerWorkerPath from '!!file-loader!./../../node_modules/qr-scanner/qr-scanner-worker.min.js';
QrScanner.WORKER_PATH = QrScannerWorkerPath;

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
        let video = document.createElement('video');
        video.classList.add('full-screen');
        document.body.appendChild(video);
        let qrScanner = null;
        let result = null;
        try {
            result = await new Promise((resolve, reject) => {
                qrScanner = new QrScanner(video, resolve);
                video.addEventListener('click', reject);
                qrScanner.start();
            });
        } catch(e) {
            result = null;
        }
        qrScanner.destroy();
        qrScanner = null;
        video.remove();
        video = null;

        /*let result = null;
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
        }*/
        if(result != null) {
            result = atob(result);
            this.devices = [result];
        }
        console.log('scan done');
    }
}

export default Discover;