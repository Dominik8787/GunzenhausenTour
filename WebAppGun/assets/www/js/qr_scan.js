function qrscan(pageID){
	alert(pageID);
	
	//Barcode Scanner
	window.plugins.barcodeScanner.scan( 
				//Wenn Scann erfolgreich
				function(result) {
					//Holt Seitennamen aus der URL, indem er den ersten Teil der URL wegwirft (http://test.de/? ID)
				 	var res = result.text.substring(16); 
					//alert("We got a barcode\n" +	"Result: " + result.text + "\n res: "+ res);
                  	if(res == pageID) {      		
                  		alert("Textmatch!");
                  		window.localStorage.setItem( 'qrcode', pageID);
                  		window.location.href=pageID;			
                  	} else {
                  		//auch im else statement wg debugging
                  		window.localStorage.setItem( 'qrcode', pageID);
                  		
                  		alert("Oops! \n Da ist wohl was schief gegangen... \n Das ist nicht der richtige QR-Code!")
                  	}
				},
				function(error) {
					alert("Scanning failed: " + error)}
			);
	
}
