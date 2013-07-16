GunzenhausenTour
================

Stadtour App für die Stadt Gunzenhausen mit PhoneGap


ACHTUNG, NEUER WORKFLOW:

- für jeden Bearbeiter (auch möglich: jede Aufgabe) neuen Branch erstellen  
	Eclipse: Team > Switch to > new Branch  
		Remote Master  und merge auswählen  

- Pull:
	Eclipse: Team > Synchronize Workspace  
		neue Dateien erscheinen in ihren Pfaden  
		nochmal Pull aus den Symbolen in der Leiste oben wählen  
	(evtl. muss erst bei Team > Remote > Fetch from... der Remote Master als Origin   
	und der lokale Branch als Destination eingestellt werden (force update zur Sicherheit aus))  

- Push:  
	Eclipse: Team > Commit, dann Commit & Push  
	github: eigenen lokalen Branch auswählen und oben rechts Pull Request auswählen  
		danach Request nocheinmal mit dem Balken bestätigen  
		Pull Request an der Seite auswählen, eigenes Request wählen und mit dem grünen   
		Button mergen und bestätigen  
		-> Commit wird zum Master Branch hinzugefügt  



Seiten/ Stations Template
==========================================================================================
==========================================================================================
	<!DOCTYPE html>
	<html>
	<head>
	<meta charset="utf-8" />
	<title>Stadttour</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="css/jquery.mobile-1.3.0.min.css" />
	<link rel="stylesheet" href="css/stadttour.css" />
	<script src="js/jquery-1.9.1.min.js"></script>
	<script src="js/stadttour.js"></script>
	<script src="js/jquery.mobile-1.3.0.min.js"></script>
	<script src="cordova.js"></script>
	<script src="js/barcodescanner.js"></script>
	<script src="js/qr_scan.js"></script>
	<script> <!-- Löst QR Code Scanner aus-->
	function scan() {$("#qrscan").click(function() {qrscan("testID");});}
	window.onload=scan;
	</script>
	<style type="text/css">.inhalt {background-image: url(img/hg/hg01.jpg); } </style> <!-- Individuelles Hintergrundbild für Station fest -->
	</head>
	
	<body>
	<!--Startseite -->
	<div data-role="page" id="pageXX_01" class="page"> <!-- id = page[Nr der Station]_[Nr der Subpage] -->
	  <div class="inhalt right" data-role="content">
			<div class="sbText">
				<div>
					<p>Sprechblasentext</p>
				</div>
				<a href="#pageXX_02" data-prefetch="true" class="weiterButton" data-role="button" data-theme="a">Weiter</a> <!-- Link zur nächsten Seite -->
			</div>
			<img class="chara" src="img/chara/markgraf1.gif" alt="chara"/> <!-- Charakterbild -->
		</div> <!-- /content-->
		<div class="footer ui-bar" data-role="footer" data-position="fixed">
			<a href="#moreinfo" data-prefetch="true" data-role="button">Infos zum Ort</a>
			<a href="#help" data-prefetch="true" data-role="button">Hilfe!</a>
		</div> <!-- /footer-->
	</div> 	<!-- /page -->
	
	
	<!--Seite 2-->
	<div data-role="page" id="pageXX_02" class="page"> <!-- id = page[Nr der Station]_[Nr der Subpage] -->
		<div class="inhalt left" data-role="content">
			<div class="sbText">
				<div>
					<p>Sprechblasentext</p>
				</div>
				<a href="#pageXX_03" data-prefetch="true" class="weiterButton" data-role="button" data-theme="a">Weiter</a> <!-- Link zur nächsten Seite -->
			</div>
			<img class="chara" src="img/chara/markgraf3.gif" alt="chara"/> <!-- Charakterbild -->
		</div> <!-- /content-->
		<div class="footer ui-bar" data-role="footer" data-position="fixed">
			<a href="#moreinfo" data-prefetch="true" data-role="button">Infos zum Ort</a>
			<a href="#help" data-prefetch="true" data-role="button">Hilfe!</a>	
		</div> <!-- /footer-->
	</div> 	<!-- /page -->
	
	<!--Rätselseite -->
	<div data-role="page" id="pageXX_XX" class="page">
		<div class="inhalt left" data-role="content">
			<div class="raetsel_text">
				<h1>Rätseltitel</h1>
				<p>Rätseltext</p>
			<a href="#page00_06" id="qrscan" data-role="button" data-theme="a">Scannen!</a><!-- Button zum Auslösen der QR-Scan Funktion -->
			</div>
		</div> <!-- /content-->
		<div class="footer ui-bar" data-role="footer" data-position="fixed">
			<a href="#moreinfo" data-prefetch="true" data-role="button">Infos zum Ort</a>
			<!--<a href="#help" data-prefetch="true" data-role="button">Hilfe!</a>-->
		</div> <!-- /footer-->
	</div> 	<!-- /page -->
		
		
	<!-- Mehr Infos Zur Station / Triviaseite -->	
	<div data-role="page" id="moreinfo" class="page">
		<div class="inhalt" data-role="content">
			<div class="infotext">
				<h1>Infotext</h1>
				<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore... </p>
			</div>
		</div> <!-- /content-->
		<div class="footer ui-bar" data-role="footer" data-position="fixed">
		</div> <!-- /footer-->
	</div> 	<!-- /page -->
		
		
	<!-- Hilfeseite -->
	<div data-role="page" id="help" class="page">
		<div class="inhalt" data-role="content">
			<div class="sbText">
			<p>Gibt es ein Problem? Vielleicht kann ich ja mit einem Hinweis helfen...</p>
			<p>Aber falls nicht, würdet ihr das Problem bitte melden?</p>
			</div>
			<img class="chara" src="img/chara/markgraf1.gif" alt="chara" />
		</div> <!-- /content-->
		<div class="footer ui-bar" data-role="footer" data-position="fixed">
			<a href="#pageXX_hint" data-prefetch="true" data-role="button">Hinweis, bitte!</a>
			<a href="notify.html" data-role="button">Problem melden</a>
		</div> <!-- /footer-->
	</div> 	<!-- /page -->
	
	
	<!-- Hinweisseite -->
	<div data-role="page" id="hint" class="page">
		<div class="inhalt" data-role="content">
			<div class="sbText">
			<p>Hinweistext</p>
			</div>
			<img class="chara" src="img/chara/markgraf1.gif" alt="chara" />
		</div> <!-- /content-->
		<div class="footer ui-bar" data-role="footer" data-position="fixed">
		</div> <!-- /footer-->
	</div> 	<!-- /page -->
	
	</body>
	</html>

==========================================================================================
==========================================================================================
