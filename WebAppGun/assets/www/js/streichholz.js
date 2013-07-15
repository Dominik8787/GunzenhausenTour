/*
 * Das Streichholzspiel ist gewonnen, wenn bestimmte Hölzer an den richtigen Plätzen sind.
 * Die Variablen x, a, b, c, d halten die Anzahl der Streichhölzer fest, die sich gerade in diesen Bereichen befinden.
 * Die Regeln:
 * -immer nur ein Holz gleichzeitig bewegen (vorrat)
 * -nur zwei Züge, sonst Neustart
 */

var vorrat = 0, move = 0;
var i = 0;
var x = 7, a = 2, b = 2, c = 2, d = 2;

$(document).ready(function()
{
    var h = $("#holzwrapper").width();
    alert (h);
    $("#holzwrapper tr:nth-child(2n) img").css("height", h/6);
    $("#holzwrapper td:nth-child(2n) img").css("width", h/6);
    alert($("td:nth-child(2n) img").css("width"));
    init();
    $(".holz").click(function() {
        if (vorrat !== 1 && $(this).css("opacity") === "1") { //nehmen
            $(this).css("opacity", "0");
            i = 1;
            tracker($(this).attr("class"), -i);
        }
        else if (vorrat !== 0 && $(this).css("opacity") === "0") { //legen
            $(this).css("opacity", "1");
            i = -1;
            tracker($(this).attr("class"), -i);
        }
    });
    $("button").click(function() {
        init();
    });
});

/*
 * Funktion stellt Ausgangssituation her.
 */
function init() {
    $(".holz").css("opacity", "1");
    $("td.start img").css("opacity", "0");
    vorrat = 0, move = 0;
    i = 0;
    x = 7, a = 2, b = 2, c = 2, d = 2;
    gibAnweisung(move);
}

/*
 * Prüfen auf Sieg.
 */
function ende() {
    if (x === 9 && (a === 0 || b === 0 || c === 0 || d === 0)) {
        alert("Sehr gut!");
		window.location.href="05saum01.html#page05_09";
    }
    else {
        alert("Versuchs noch einmal!");
        init();
    }
}

/*
 * Gibt je nach Spielzug aus, was gerade zu tun ist.
 */
function gibAnweisung(move) {
    switch (move) {
        case 0:
            $("#anweisung").html("Tippe das Streichholz an, das du verschieben möchtest!");
            break;
        case 1:
            $("#anweisung").html("Tippe an die leere Stelle, wohin du das Streichholz verschieben willst!");
            break;
        case 2:
            $("#anweisung").html("Tippe das zweite Streichholz an, das du verschieben möchtest!");
            break;
        case 3:
            $("#anweisung").html("Tippe an die leere Stelle, wohin du das Streichholz verschieben willst!");
            break;
    }
}

/*
 * Wird bei jedem Klick ausgeführt, der ein Nehmen/Legen eines Streichholzes verursacht.
 */
function tracker(group, i) {
    move += 1;
    gibAnweisung(move);
    vorrat += i;
    switch (group) {
        case "holz x":
            x += i;
            break;
        case "holz a":
            a += i;
            break;
        case "holz b":
            b += i;
            break;
        case "holz c":
            c += i;
            break;
        case "holz d":
            d += i;
            break;
    }
    if (move === 4) {
        ende();
    }
}
