function scan(){
		document.getElementById("qrscan").addEventListener("click", function(){
			//alert("Test successful");
			window.plugins.barcodeScanner.scan( 
				function(result) { 
					alert("We got a barcode\n" +
                  			"Result: " + result.text + "\n" +
                  			"Format: " + result.format + "\n" +
                  			"Cancelled: " + result.cancelled);
				},
				function(error) {
					alert("Scanning failed: " + error)}
			)
		});
		}
window.onload=scan;