$(document).ready(function(){


	
	console.log("it works.");


	// Function to turn image name (m) into background image (images/m.png) and set it as background in css
	var i = function(y){
	
		var z = ("url(images/" + y + ".png)");
		console.log(z);
		$(".window").css("backgroundImage", z);
		
	};
	
	
	// Starting image
	
	var m = "0n";
	i(m);
	
	console.log(m);
	
	// If user clicks on center panel
	
	$(".left").click(function(){
	
		if(m==="0n") {
			m="0w";
		}else if(m==="0w") {
			m="0s";
		}else if(m==="0s") {
			m="0e";
		}else if(m==="0e") {
			m="0n";
		}
		
		
		if(m==="1n") {
			m="1w";
		}else if(m==="1w") {
			m="1s";
		}else if(m==="1s") {
			m="1e";
		}else if(m==="1e") {
			m="1n";
		}
		
		
		if(m==="2n") {
			m="2w";
		}else if(m==="2w") {
			m="2s";
		}else if(m==="2s") {
			m="2e";
		}else if(m==="2e") {
			m="2n";
		}
		
		
		if(m==="3n") {
			m="3w";
		}else if(m==="3w") {
			m="3s";
		}else if(m==="3s") {
			m="3e";
		}else if(m==="3e") {
			m="3n";
		}
		
		
		if(m==="4n") {
			m="4w";
		}else if(m==="4w") {
			m="4s";
		}else if(m==="4s") {
			m="4e";
		}else if(m==="4e") {
			m="4n";
		}
		
		
		if(m==="5n") {
			m="5w";
		}else if(m==="5w") {
			m="5s";
		}else if(m==="5s") {
			m="5e";
		}else if(m==="5e") {
			m="5n";
		}
		
		if(m==="6n") {
			m="6w";
		}else if(m==="6w") {
			m="6s";
		}else if(m==="6s") {
			m="6e";
		}else if(m==="6e") {
			m="6n";
		}
		
		
		if(m==="7n") {
			m="7w";
		}else if(m==="7w") {
			m="7s";
		}else if(m==="7s") {
			m="7e";
		}else if(m==="7e") {
			m="7n";
		}
		
		
		if(m==="8n") {
			m="8w";
		}else if(m==="8w") {
			m="8s";
		}else if(m==="8s") {
			m="8e";
		}else if(m==="8e") {
			m="8n";
		}
		
		
		if(m==="9n") {
			m="0w";
		}else if(m==="9w") {
			m="9s";
		}else if(m==="9s") {
			m="9e";
		}else if(m==="9e") {
			m="9n";
		}
		
		
		
		if(m==="10n") {
			m="10w";
		}else if(m==="10w") {
			m="10s";
		}else if(m==="10s") {
			m="10e";
		}else if(m==="10e") {
			m="10n";
		}
		
		
		if(m==="11n") {
			m="11w";
		}else if(m==="11w") {
			m="11s";
		}else if(m==="11s") {
			m="11e";
		}else if(m==="11e") {
			m="11n";
		}
		
		
		if(m==="12n") {
			m="12w";
		}else if(m==="12w") {
			m="12s";
		}else if(m==="12s") {
			m="12e";
		}else if(m==="12e") {
			m="12n";
		}
		
		
		if(m==="13n") {
			m="13w";
		}else if(m==="13w") {
			m="13s";
		}else if(m==="13s") {
			m="13e";
		}else if(m==="13e") {
			m="13n";
		}
		
		
		if(m==="14n") {
			m="14w";
		}else if(m==="14w") {
			m="14s";
		}else if(m==="14s") {
			m="14e";
		}else if(m==="14e") {
			m="14n";
		}
		
		
		if(m==="16n") {
			m="16w";
		}else if(m==="16w") {
			m="16s";
		}else if(m==="16s") {
			m="16e";
		}else if(m==="16e") {
			m="16n";
		}
		
		
		if(m==="17n") {
			m="17nw";
		}else if(m==="17nw") {
			m="17w";
		}else if(m==="17w") {
			m="17sw";
		}else if(m==="17sw") {
			m="17s";
		}else if(m==="17sw") {
			m="17se";
		}else if(m==="17sw") {
			m="17e";
		}else if(m==="17sw") {
			m="17ne";
		}else if(m==="17sw") {
			m="17n";
		}
		
		
		if(m==="18f") {
			m="18b";
		}else if(m==="18b") {
			m="18f";
		}
		
		
		if(m==="19f") {
			m="19b";
		}else if(m==="19b") {
			m="19f";
		}
		
		
		if(m==="20f") {
			m="20b";
		}else if(m==="20b") {
			m="20f";
		}
		
		
		if(m==="21n") {
			m="21w";
		}else if(m==="21w") {
			m="21s";
		}else if(m==="21s") {
			m="21e";
		}else if(m==="21e") {
			m="21n";
		}
		
		
		if(m==="22n") {
			m="22w";
		}else if(m==="22w") {
			m="22s";
		}else if(m==="22s") {
			m="22e";
		}else if(m==="22e") {
			m="22n";
		}
		
		
		
		
		
		i(m);
		console.log("left");
	
	});

	
	
	
	
	$(".right").click(function(){
	
		if(m==="0n") {
			m="0e";
		}else if(m==="0e") {
			m="0s";
		}else if(m==="0s") {
			m="0w";
		}else if(m==="0w") {
			m="0n";
		}
		
		
		if(m==="1n") {
			m="1e";
		}else if(m==="1e") {
			m="1s";
		}else if(m==="1s") {
			m="1w";
		}else if(m==="1w") {
			m="1n";
		}
		
		
		if(m==="2n") {
			m="2e";
		}else if(m==="2e") {
			m="2s";
		}else if(m==="2s") {
			m="2w";
		}else if(m==="2w") {
			m="2n";
		}
		
		
		if(m==="3n") {
			m="3e";
		}else if(m==="3e") {
			m="3s";
		}else if(m==="3s") {
			m="3w";
		}else if(m==="3w") {
			m="3n";
		}
		
		
		if(m==="4n") {
			m="4e";
		}else if(m==="4e") {
			m="4s";
		}else if(m==="4s") {
			m="4w";
		}else if(m==="4w") {
			m="4n";
		}
		
		
		if(m==="5n") {
			m="5e";
		}else if(m==="5e") {
			m="5s";
		}else if(m==="5s") {
			m="5w";
		}else if(m==="5w") {
			m="5n";
		}
		
		if(m==="6n") {
			m="6e";
		}else if(m==="6e") {
			m="6s";
		}else if(m==="6s") {
			m="6w";
		}else if(m==="6w") {
			m="6n";
		}
		
		
		if(m==="7n") {
			m="7e";
		}else if(m==="7e") {
			m="7s";
		}else if(m==="7s") {
			m="7w";
		}else if(m==="7w") {
			m="7n";
		}
		
		
		if(m==="8n") {
			m="8e";
		}else if(m==="8e") {
			m="8s";
		}else if(m==="8s") {
			m="8w";
		}else if(m==="8w") {
			m="8n";
		}
		
		
		if(m==="9n") {
			m="0e";
		}else if(m==="9e") {
			m="9s";
		}else if(m==="9s") {
			m="9w";
		}else if(m==="9w") {
			m="9n";
		}
		
		
		
		if(m==="10n") {
			m="10e";
		}else if(m==="10e") {
			m="10s";
		}else if(m==="10s") {
			m="10w";
		}else if(m==="10w") {
			m="10n";
		}
		
		
		if(m==="11n") {
			m="11e";
		}else if(m==="11e") {
			m="11s";
		}else if(m==="11s") {
			m="11w";
		}else if(m==="11w") {
			m="11n";
		}
		
		
		if(m==="12n") {
			m="12e";
		}else if(m==="12e") {
			m="12s";
		}else if(m==="12s") {
			m="12w";
		}else if(m==="12w") {
			m="12n";
		}
		
		
		if(m==="13n") {
			m="13e";
		}else if(m==="13e") {
			m="13s";
		}else if(m==="13s") {
			m="13w";
		}else if(m==="13w") {
			m="13n";
		}
		
		
		if(m==="14n") {
			m="14e";
		}else if(m==="14e") {
			m="14s";
		}else if(m==="14s") {
			m="14w";
		}else if(m==="14w") {
			m="14n";
		}
		
		
		if(m==="16n") {
			m="16e";
		}else if(m==="16e") {
			m="16s";
		}else if(m==="16s") {
			m="16w";
		}else if(m==="16w") {
			m="16n";
		}
		
		
		if(m==="17n") {
			m="17ne";
		}else if(m==="17ne") {
			m="17e";
		}else if(m==="17e") {
			m="17se";
		}else if(m==="17se") {
			m="17s";
		}else if(m==="17sw") {
			m="17sw";
		}else if(m==="17sw") {
			m="17w";
		}else if(m==="17sw") {
			m="17nw";
		}else if(m==="17sw") {
			m="17n";
		}
		
		
		if(m==="18f") {
			m="18b";
		}else if(m==="18b") {
			m="18f";
		}
		
		
		if(m==="19f") {
			m="19b";
		}else if(m==="19b") {
			m="19f";
		}
		
		
		if(m==="20f") {
			m="20b";
		}else if(m==="20b") {
			m="20f";
		}
		
		
		if(m==="21n") {
			m="21e";
		}else if(m==="21e") {
			m="21s";
		}else if(m==="21s") {
			m="21w";
		}else if(m==="21w") {
			m="21n";
		}
		
		
		if(m==="22n") {
			m="22e";
		}else if(m==="22e") {
			m="22s";
		}else if(m==="22s") {
			m="22w";
		}else if(m==="22w") {
			m="22n";
		}
		
		
		
		
		
		i(m);
		console.log("left");
	
	});







});