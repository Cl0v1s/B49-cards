class Discover {
    constructor() {
        this.devices = [];
    }

    async start() {
        await this.scan();
    }

    async scan() {
        console.log('starting scan');
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                alert("We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled);
            },
            function (error) {
                alert("Scanning failed: " + error);
            }
        );

        /*console.log(window.QRScanner);
        if(window.QRScanner) {
            const text = await new Promise((resolve) => {
                var done = function(err, status){
                    if(err){
                      console.error(err._message);
                    } else {
                      console.log('QRScanner is initialized. Status:');
                      console.log(status);
                    }
                  };
                  
                QRScanner.prepare(done);
                QRScanner.show();
                QRScanner.getStatus(function(status){
                    console.log(status);
                });
                QRScanner.scan((err, text) => resolve(text));
            });
            alert(text);
        } else {
            this.devices = ["clovis.portron", "clovis.portron"];
        }*/


        console.log('scan done');
    }
}

export default Discover;