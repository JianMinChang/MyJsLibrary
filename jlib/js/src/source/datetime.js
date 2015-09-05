var DateTime =( function () {
	var _this = {
		date : "",
		setTime: function  (date) {
			if (!!date) {
				_this.date = new Date(date);
			}
			return _this;
		},

		yyyy_dd_mm: function (obj) {
			var date = new Date(obj);
			return date.getUTCFullYear() + "/" + ((date.getUTCMonth() + 1) < 10 ? "0" + (date.getUTCMonth() + 1) : (date.getUTCMonth() + 1)) + "/" + date.getUTCDate();
		},
		yyyy_dd_mm_hh_mm_ss: function (obj) {
			var date = new Date(obj);
			return date.getUTCFullYear() + "/" + ((date.getUTCMonth() + 1) < 10 ? "0" + (date.getUTCMonth() + 1) : (date.getUTCMonth() + 1)) + "/" + date.getUTCDate()
			+ " "
			+ (date.getUTCHours() < 10 ? "0" + date.getUTCHours() : date.getUTCHours()) + ":"
			+ (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":"
			+ (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
		},
		ToString: function  (format) {
			var str = "" ; 
			if (  _this.date !=  undefined &&  typeof(_this.date) == "object") {
				switch(format) {
					case  "yyyy/mm/dd":
						str = _this.yyyy_dd_mm(_this.date);
						break;
					case "yyyy/mm/dd hh:mm:ss":
						str  = _this.yyyy_dd_mm_hh_mm_ss(_this.date);
						break;
				}
			}
			return str;
		},
		CompareValue : function  (dateInit,dateEnd) {
			if (dateInit!= undefined && dateEnd!= undefined ) {
				var timeInit = new Date(dateInit), timeEnd = new Date(dateEnd); 

				var timeBetween = timeEnd - timeInit ;

				if (timeBetween>0) {
					return 1;
				} else {
					if (timeBetween == 0) {
						return 0;
					} else {
						return -1;
					}
				}
			}
			else{
				return null;
			}
		},
		CompareObject : function  (dateInit,dateEnd) {
			if (dateInit!= undefined && dateEnd!= undefined ) {
				var timeInit = new Date(dateInit), timeEnd = new Date(dateEnd); 

				var timeBetween = new Date(timeEnd - timeInit) ;

				var a = Math.floor(timeBetween/3600000);
				var getDay = Math.floor(a / 24) , getHour = Math.floor(a % 24) , getMin = timeBetween.getMinutes() , getSec =timeBetween.getSeconds();
				return {
					getDay : getDay,
					getHour :getHour,
					getMin : getMin,
					getSec : getSec
				};
			}
			else{
				return null;
			}
		},
	}


	return {
		setTime : _this.setTime,
		ToString : _this.ToString,
		CompareValue : _this.CompareValue,
		CompareObject : _this.CompareObject
	} 
	
}());


module.exports = DateTime;