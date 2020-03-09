    alert('starting');
    console.log('starting'),
    ble.scan([], 5, function(device) {
        console.log(JSON.stringify(device));
    }, function(error) {
        console.error(error);
    });
    console.log('done');
    