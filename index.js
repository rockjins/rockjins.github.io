var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.resolve('./')));
  app.listen(8000, function() {
      console.log('Server run at 8000')
});
