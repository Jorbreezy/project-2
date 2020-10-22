"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _api = _interopRequireDefault(require("./routes/api"));

var app = (0, _express["default"])();
var PORT = 3000; // USE

app.use('API', _api["default"]);
app.listen(PORT, function () {
  return "Listening on port ".concat(PORT);
});