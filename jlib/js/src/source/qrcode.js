var qrcode = { 
	img : "",
	imgw: "",
	imgh: "",
	get : function  (url,width,height) {
			width  = !!width  ? width  : 120 ;
			height = !!height ? height : 120 ;
			imgw =width;imgh=height;
			content = encodeURIComponent(url);
		  //return 'http://chart.apis.google.com/chart?cht=qr&chl=' + content + '&chs=' + width + 'x' + height;
		  this.img = 'http://chart.apis.google.com/chart?cht=qr&chl=' + content + '&chs=' + width + 'x' + height;
		  console.log(this.img);
		  return this;
	},
	render : function  (domid) {
		domid  = !!domid ? domid : 't1';

		var w =  window.innerWidth , h = window.innerHeight;

		var div1 = document.createElement("div");
		div1.setAttribute("id", "t1");

		document.body.appendChild(div1);
		var a1 =  document.getElementById('t1');
		a1.style.width= '100%';
		a1.style.height='100%';
		a1.style.zIndex = 9999;
		a1.style.backgroundColor = '#333';
		a1.style.opacity = 0.8;
		a1.style.position = 'fixed';
		a1.style.top=0;

		var div = "<div class='box-sizing' style='width:100%;height:"+ h+"px;'>";
		div+= "<img class='box-sizing' src='" +this.img + "' alt='' style='top:"+(h-imgh)/2+"px;left:"+((w-imgw)/2)+"px;position: absolute;opacoty:1;'><div id='qrcodeWord' style='top:"+((h-imgh)/2 )+"px;left:"+((w-imgw)/2 )+"px;font-size:1.2em;position: absolute;opacoty:1;padding-top:1em;'>請使用手機掃描QR Code</div></div>";
		document.getElementById(domid).innerHTML=div ;
	
		var tmp1 = document.getElementById('qrcodeWord');
		tmp1.style.left = ((w-imgw)/2)+(imgw-tmp1.clientWidth)/2 + 'px'; 
		return this;
	}
}



module.exports = qrcode;