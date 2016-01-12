require.ensure(['./a'], function(require) {
  var content = require('./a');
  document.open();
  document.write('<p>' + content + '</p>');
  document.close();
});
