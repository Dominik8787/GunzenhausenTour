window.onload = function() {
	document.addEventListener("deviceready", function() {
		// var audio = new Array();
		// audio[1] = new Media("android_asset/www/audio/a1.mp3");
		// audio[2] = new Media("/android_asset/www/audio/a2.mp3");
		// audio[3] = new Media("/android_asset/www/audio/a3.mp3");
		// audio[4] = new Media("/android_asset/www/audio/a4.mp3");
		// audio[5] = new Media("/android_asset/www/audio/a5.mp3");
		// audio[6] = new Media("/android_asset/www/audio/all.mp3");

		var link = "#page07_r_01";
		$(document).ready(function() {
			/*
			 * Die Variable, die der Funktion grscan() mitgegeben wird bestimmt
			 * die erwartete Glocke. Um die richtige Reihenfolge festzulegen,
			 * die Namen g1, g2, g3,... entsprechend tauschen.
			 */
			$("#qrscan1").click(function() {
				link = "#page07_r_02";
				qrscan("g1");
			});
			$("#qrscan2").click(function() {
				link = "#page07_r_03";
				qrscan("g2");
			});
			$("#qrscan3").click(function() {
				link = "#page07_r_04";
				qrscan("g3");
			});
			$("#qrscan4").click(function() {
				link = "#page07_r_05";
				qrscan("g4");
			});
			$("#qrscan5").click(function() {
				link = "#page07_r_06";
				qrscan("g5");
			});
		});

		function qrscan(glocke) {
			// Barcode Scanner
			window.plugins.barcodeScanner.scan(
			// Wenn Scan erfolgreich
			function(result) {
				var res = result.text.substring(37);
				var a = res.substring(1);
				if (res === glocke) {
					if (link === "#page07_r_06") {
						// audio[6].play();
					} else {
						// audio[a].play();
					}
					window.location.href = link;

				} else {
					// audio[a].play();
					window.location.href = "#page07_r_falsch";
				}
			}, function(error) {
				alert("Scanning failed: " + error);
			});
		}

	}, false);
};