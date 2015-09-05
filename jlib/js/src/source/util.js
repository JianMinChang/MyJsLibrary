var util = (function() {
	var _this = {
		_array: {},
		param: function() {

			var AllVars = window.location.search.substring(1);
			var Vars = AllVars.split("&");
			for (var i = 0; i < Vars.length; i++) {
				var Var = Vars[i].split("=");
				_this._array[Var[0]] = Var[1];
			}
			return _this._array;
		},
		QueryString: function(name) {
			var a = _this.param();
			var str = "";
			for (var o in a) {
				if (o == name) {
					str = a[o];
				};
			}
			return str;
		}
	};
	return {
		QueryString: _this.QueryString
	};
}());


module.exports = util;