function onDeviceReady() {
	item_value = window.localStorage.getItem( 'qrcode' );	
	alert(item_value)
	//test
}

/* var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
var submitval = "newEntry";

function onDeviceReady() {
	db.transaction(populateDB, dbErrorHandler, getEntries);
}

 function populateDB(tx) {
    //tx.executeSql('DROP TABLE IF EXISTS status');
	tx.executeSql('CREATE TABLE IF NOT EXISTS status (id unique, text)');
	tx.executeSql('INSERT OR IGNORE INTO status (id, text) VALUES (1, "erster Eintrag")');
	console.log("Database Populated ");
}

 function getEntries() {
	 db.transaction(function(tx)
			{tx.executeSql("select id, text from status",[], renderEntries, dbErrorHandler);}, dbErrorHandler);
	console.log('entries queried' );
} 

 function DBupdate() {
		db.transaction(function(tx) {
		tx.executeSql('UPDATE status SET text = ?  WHERE id = 1; ', [submitval], getEntries, dbErrorHandler);});
	    alert("updated mit neuem wert");
	} 
 
function renderEntries(tx,results){
	 console.log("render entries");
	 if (results.rows.length == 0) {
		 alert("nix in der Datenbank"); } else {
	 var s = "";
	 for(var i=0; i<results.rows.length; i++) {
	 s += results.rows.item(i).text ; }
		 alert(s);
		 
	 }}

function dbErrorHandler(err){
	 alert("DB Error: "+err.message + "\nCode="+err.code);} */


