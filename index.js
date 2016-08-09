'use strict';

var dispatchItModule = require('./php/src/MyApp/dispatchIt.php')();

// Hook stdout and stderr up to the DOM
dispatchItModule.getStdout().on('data', function (data) {
    document.body.insertAdjacentHTML('beforeEnd', data + '<br>');
});
dispatchItModule.getStderr().on('data', function (data) {
    document.body.insertAdjacentHTML('beforeEnd', data + '<br>');
});

dispatchItModule.execute();
