var customgoogle = {
	map: {
		openmap : function  (lat,lon) {
			location.href = location.href ="http://maps.google.com/maps?z=16&q="+lat+','+lon+"&hl=zh-TW&sensor=false";
		},
		openmapPath :function  (startlat,startlon,endlat,endlon) {
			var mapurl = "http://maps.google.com/maps?z=16&saddr={startplace}&daddr={endplace}&hl=zh-TW&sensor=false";

			location.href =  mapurl.replace('{startplace}',startlat+','+startlon).replace('{endplace}',endlat+','+endlon);
		}
	},
	youtobe :{
		iframeOnlyOne : function(arg) {
			

			if (!!arg.id) {

	      var tag = document.createElement('script');

	      tag.src = "https://www.youtube.com/iframe_api";
	      var firstScriptTag = document.getElementsByTagName('script')[0];
	      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	      arg.width = !!arg.width ? arg.width : '640';
	      arg.height = !!arg.height ? arg.height : '360';
	      arg.videoId = !!arg.videoId ? arg.videoId : 'CQReTX2Fox4';

	      var player;

	      if (!window.onPlayerReady) {
		      window.onPlayerReady = function onPlayerReady(event) {
					//event.target.playVideo();
				  }
				}

				if (!window.onPlayerStateChange) {
					window.onPlayerStateChange = function onPlayerStateChange(event) {
				    switch (event.data) {
				      case 0:
				        // if (!finish) {
				        //   // finish = true;
				          
				        // }
				        console.log('youtube finish');
				        break;
				      case 1:
				      	console.log('youtube played');
				        // if (!played) {
				        //   // played = true;

				        // }
				        break;
				      case 2:
							// 暫停
				        break;
				    }
				  }
				};

			  if (!window.onYouTubeIframeAPIReady) {
		  		window.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
		        player = new YT.Player(arg.id, {
		          height: arg.height,
		          width: arg.width,
		          videoId: arg.videoId,
		          events: {
		          	'onReady': onPlayerReady,
	        			'onStateChange': onPlayerStateChange
		           
		          }
		        });
		      };
			  };


			};
		}
	}
};


module.exports = customgoogle;