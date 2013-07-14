$(document).ready(function() {
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.fillStyle = 'black';
context.strokeWidth = 5;

var started = false;
var coords = [];
var clickCount = 0;
var alertCount = 0;
var tween = null;
var oldPoint;
var newPoints = [];
var drawPoints = [];

var Punkt = {
	x : 0,
	y : 0
};

for ( var i = 0; i !== 16; i++) {

	var p = Object.create(Punkt);
	p.x = parseInt($("#punkt" + i).css("left")) + 5;
	p.y = parseInt($("#punkt" + i).css("top")) + 5;
	coords.push(p);

}

function clickHandler() {

	var index = $(this).index();

	$(this).addClass("active");
	$("#punkt" + (index - 1)).removeClass("active");
	$("#punkt" + (index + 1)).addClass("active");
	// console.log("Index " + index);
	// console.log("X-achse: " + coords[index].x);
	drawPoints[clickCount] = coords[index];
	clickCount++;
	alertCount++;
	if (alertCount === 20) {
		alert("folge den rot leuchtenden Punkten!");
		window.location.reload();
	}
	console.log(clickCount);
	// console.log("drawPoints"+ drawPoints[1]);

	if (!started) {
		started = true;
		oldPoint = coords[index];
		console.log(oldPoint);
	} else if (clickCount === 2) {
		// drawPoints[0].x, drawPoints[0].y = drawPoints[1].x, drawPoints[1].y;
		clickCount = 1;
		newPoints = oldPoint;
		drawLine(drawPoints);
		// zuletzt angeklickter punkt = basispunkt;

		// drawPoints = [];
	}
}

$(".punkt").click(clickHandler);
$("#punkt0").addClass("active");

function drawLine(points) {
	$(".punkt").off("click");

	context.beginPath();
	// context.moveTo(points[0].x, points[0].y);
	context.moveTo(oldPoint.x, oldPoint.y);
	var endPoint = {
		x : oldPoint.x,
		y : oldPoint.y
	};

	tween = new TWEEN.Tween(endPoint).to({
		x : points[1].x,
		y : points[1].y
	}, 1000).easing(TWEEN.Easing.Linear.None).onUpdate(function() {

		context.lineTo(endPoint.x, endPoint.y);
		context.closePath();
		context.stroke();

	}).start();

	tween.onComplete(function() {
		$(".punkt").click(clickHandler);
	});
	oldPoint = points[1];
}

function animate() {
	requestAnimationFrame(animate);

	TWEEN.update();
};

animate();
});