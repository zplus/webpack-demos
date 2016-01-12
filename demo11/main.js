var load = require('bundle-loader!./a.js');

load(function(file) {
  document.open();
  document.write('<p>' + file + '</p>');
  document.close();
});
