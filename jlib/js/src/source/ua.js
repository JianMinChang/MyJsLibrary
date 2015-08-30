var ua = {
	getInfo : function () {
		var ua = navigator.userAgent;

		var IsPC =  ( ua.indexOf('Windows NT') >0  || ua.indexOf("Intel Mac") > 0)  ?  true : false;
		
		var patten = {
			MaciOS: "Intel Mac OS X",
			MobileiOS : "iPhone OS|iPhone OS|iPad; CPU OS|iPad; CPU OS|iPad;U;CPU OS|iPad;U;CPU OS|iPad; U; CPU OS|iPad; U; CPU OS",
			Android: "Android",
			WindowPhone : "Windows Phone",
			WinodwPC: "Windows NT"
		}

		var OS = "";
		var rex  = "";


		for (prop in patten) {
			rex = new RegExp(patten[prop]);

			if (rex.test(ua) == true) {
				OS = prop;
			}
		}

		var OSVersion ="";

		var OSVersionP = {
			IOSRegex : "iPhone OS [0-9]_[0-9]_[0-9]|iPhone OS [0-9]_[0-9]|iPad; CPU OS [0-9]_[0-9]_[0-9]|iPad; CPU OS [0-9]_[0-9]|iPad;U;CPU OS [0-9]_[0-9]_[0-9]|iPad;U;CPU OS [0-9]_[0-9]|iPad; U; CPU OS [0-9]_[0-9]_[0-9]|iPad; U; CPU OS [0-9]_[0-9]",
			AndroidRegex : "Android [0-9].[0-9].[0-9]|Android [0-9].[0-9]|Android[0-9].[0-9].[0-9]|Android[0-9].[0-9]",
			WindowPhoneRegex : "Windows Phone [0-9].[0-9]"
		}
		
		for (pa in OSVersionP) {		
			rex = new RegExp(OSVersionP[pa]);
			if (rex.test(ua) == true) {
				OSVersion = rex.exec(ua)[0].replace("_",".");
			}
		}

		return {
			IsPC : IsPC,
			OS :OS,
			OSVersion: OSVersion
		}; 
	}
}

module.exports = ua;