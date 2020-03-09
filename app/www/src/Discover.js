class Discover {
    constructor() {
        this.devices = [];
    }

    async start() {
        await this.scan();
    }

    async scan() {
        console.log('starting scan');
        if (window.ble != null) {
            await new Promise((resolve, reject) => {
                const time = 5;
                ble.startScan([], this.handleDevice.bind(this), reject);
                setTimeout(resolve, 5 * 1000);
            });
            ble.stopScan();
        } else {
            this.devices = [{
                    id: '5D-B4-EA-74-0D-5D'
                },
                {
                    id: '57:B0:EC:CF:67:2F'
                }
            ]
        }
        console.log('scan done');
    }

    handleDevice(device) {
        console.log('device with id ' + device.id + ' discovered.');
        this.devices.push(device);
    }
}

export default Discover;