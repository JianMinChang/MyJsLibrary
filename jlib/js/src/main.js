var jQuery = require('jquery');
var qrcode = require ('./source/qrcode');
var html5 = require ('./source/html5');
var ua = require('./source/ua');
var customgoogle = require('./source/customgoogle');
var util = require('./source/util');
var valid = require('./source/valid');
var datetime = require('./source/datetime');

window.jlib = {
	qrcode:qrcode,
	html5:html5,
	ua:ua,
	customgoogle:customgoogle,
	valid : valid,
	util:util,
	Datetime:datetime
};
