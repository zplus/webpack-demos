require('./assets/css/app.css');
var h1 = document.createElement('h1');
h1.innerHTML = (__DEV__) ? appCfg.devTitle : appCfg.title;
document.body.appendChild(h1);


var $ = require('jquery');
$('h1').css({
    'color': appCfg.color,
    'font-size': '13px'
});

/*image loader*/
var img1 = document.createElement('img');
img1.src = require('./assets/images/big.png');
document.body.appendChild(img1);

var img2 = document.createElement('img');
img2.src = require('./assets/images/small.png');
document.body.appendChild(img2);