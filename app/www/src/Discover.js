class Discover {
    constructor() {
        this.devices = [];
    }

    async start() {
        await this.scan();
    }

    async scan() {
        console.log('starting scan');
        await new Promise((resolve, reject) => {
            const time = 5;
            ble.startScan([], this.handleDevice.bind(this), reject);
            setTimeout(resolve, 5 * 1000);
        });
        ble.stopScan();
        console.log('scan done');
    }

    handleDevice(device) {
        console.log('device with id '+device.id+' discovered.');
        this.devices.push(device);
    }
}

export default Discover;