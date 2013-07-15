$(document).ready(function() {
	var link = "#page07_r_01";
	// Die Variable, die der Funktion grscan() mitgegeben wird bestimmt die
	// erwartete Glocke.
	// Um die richtige Reihenfolge festzulegen, die Namen g1, g2, g3,...
	// entsprechend tauschen.
	$("#qrscan1").click(function() {
		$("audio#a1")[0].play();
		$("audio#all")[0].play();
		qrscan("g1");
		link = "#page07_r_02";
	});
	$("#qrscan2").click(function() {
		qrscan("g2");
		link = "#page07_r_03";
	});
	$("#qrscan3").click(function() {
		qrscan("g3");
		link = "#page07_r_04";
	});
	$("#qrscan4").click(function() {
		qrscan("g4");
		link = "#page07_r_05";
	});
	$("#qrscan5").click(function() {
		qrscan("g5");
		link = "#page07_r_06";
	});

	function qrscan(glocke) {
		// Barcode Scanner
		window.plugins.barcodeScanner.scan(
		// Wenn Scan erfolgreich
		function(result) {
			// Holt Seitennamen aus der URL, indem er den ersten Teil der URL
			// wegwirft (http://www.stadttour.gunzenhausen.de?pageName)
			var res = result.text.substring(37);
			var audio = "audio#a" + res.substring(1); // wird code mit
														// res="g1" aufgerufen
														// wird audio#1
														// abgespielt.
			if (res === glocke) {
				if (link === "#page07_r_06"){
					$("audio#all")[0].play();
				}
				else {
					$(audio)[0].play();
				}
				window.location.href = link;

			} else {
				$(audio)[0].play();
				window.location.href = "#page07_r_fehler";
			}
		}, function(error) {
			alert("Scanning failed: " + error);
		});
	}
});