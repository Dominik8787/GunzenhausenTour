var item_value;
item_value = window.localStorage.getItem('qrcode');

/* logik zur weiterleitungsfunktion. wenn der wert im localstorage ungleich 0 ist, erscheint der weiter button
danach wird je nach wert die variable für die weiterleitungsaddresse gesetzt. */

$(document).ready(function() {
	$("#weiterButton").hide();
	console.log(item_value)
	if (item_value !== null) {
		console.log("ungleich null")
		$("#weiterButton").show();
	}
});

