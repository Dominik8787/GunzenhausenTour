$(document).ready(function()
{
    var link = "#page07_r_01";
    // Die Variable, die der Funktion grscan() mitgegeben wird bestimmt die erwartete Glocke.
    // Um die richtige Reihenfolge festzulegen, die Namen g1, g2, g3,... entsprechend tauschen.
    $("#qrscan1").click(function() {
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
        alert(glocke);
        //Barcode Scanner
        window.plugins.barcodeScanner.scan(
                //Wenn Scan erfolgreich
                        function(result) {
                            //Holt Seitennamen aus der URL, indem er den ersten Teil der URL wegwirft (http://www.stadttour.gunzenhausen.de?pageName)
                            var res = result.text.substring(37);
                            alert("We got a barcode\n" + "Result: " + result.text + "\n res: " + res);
                            if (res === glocke) {
                                alert("Textmatch!");
                                window.location.href = link;
                            } else {
                                window.location.href = "#page07_r_fehler";
                                alert("Oops! \n Da ist wohl was schief gegangen... \n Das ist nicht der richtige QR-Code!");
                            }
                        },
                        function(error) {
                            alert("Scanning failed: " + error);
                        }
                );
    }
});