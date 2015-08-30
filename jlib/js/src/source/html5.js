var html5 ={
	location:{
		Position : "",
		getlocation : function  () {

			var showPosition  = function showPosition(a){
				window.jlib.html5.location.Position = a.coords.latitude +','+a.coords.longitude;
				console.log(a.coords.latitude +','+a.coords.longitude);
		  	}

			if (navigator.geolocation){
		    	navigator.geolocation.getCurrentPosition(showPosition,this.getlocationshowError);
		    }
		    else{
		    	alert("Geolocation is not supported by this browser.");
			  	return "";
			}
		},

		getlocationshowError : function(error) {
			switch(error.code){
			    case error.PERMISSION_DENIED:
			      alert("User denied the request for Geolocation.");
			      break;
			    case error.POSITION_UNAVAILABLE:
			      alert("Location information is unavailable.");
			      break;
			    case error.TIMEOUT:
			      alert("The request to get user location timed out.");
			      break;
			    case error.UNKNOWN_ERROR:
			      alert("An unknown error occurred.");
			      break;
	    	}
		}


	},

	webstorage : {

			localStorage : {
				set : function  (key,value) {
					localStorage.setItem(key, value);
					return this;
				},
				get : function (key) {
					return localStorage.getItem(key);
				},
				remove : function(key) {
					localStorage.removeItem(key);
					return this;
				}
			},

			sessionStorage :{
				set : function  (key,value) {
					sessionStorage.setItem(key, value);
					return this;
				},
				get : function (key) {
					return sessionStorage.getItem(key);
				},
				remove : function(key) {
					sessionStorage.removeItem(key);
					return this;
				}
			}
	}
};



module.exports = html5;