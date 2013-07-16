$(document).ready(function() {
	/* weiter button wird versteckt, bis das spiel geschafft ist */
	
	//localStorage.setItem("qrcode", "02lab01.html");
	$("#WeiterButtonConnectTheDots").hide();
	
	/*die linien werden auf dem canvas gezeichnet */
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	/* storchenbild wird geladen, aber noch versteckt bis das spiel gewonnen ist */
    var imageObj = new Image();
    imageObj.src = 'img/storch.gif';
	context.fillStyle = 'black';
	context.strokeWidth = 5;

	/* startvariablen werden gesetzt */
	var started = false;
	var coords = [];
	var clickCount = 0;
	var alertCount = 0;
	var tween = null;
	var oldPoint;
	var newPoints = [];
	var drawPoints = [];
	
	/* objekt punkt bekommt literale */
	
	var Punkt = {
		x : 0,
		y : 0
	};

	/* koordinaten werden abgefragt und in ein array gespeichert */
	
	for ( var i = 0; i !== 17; i++) {

		var p = Object.create(Punkt);
		p.x = parseInt($("#punkt" + i).css("left")) + 5;
		p.y = parseInt($("#punkt" + i).css("top")) + 5;
		coords.push(p);
	}

	/* wird bei jedem klick auf einen punkt ausgeführt */
	
	function clickHandler() {
		//Check ob das Spiel beendet ist (punkt 16 hat KLasse active und wird noch mal geklickt)
		 if ($('#punkt16').is('.active') ) {
			 	
				
				 $("#WeiterButtonConnectTheDots").show();
				 context.globalAlpha = 0;
				 var imgFadeInter = setInterval(function(){
				
				 context.globalAlpha += 0.01;
				 context.drawImage(imageObj, 10, 10, 320, 480);
				 if(context.globalAlpha == 1){ 
					 clearInterval(imgFadeInter); 
				 }
				 }, 16); 
				 };


		var index = $(this).index();

		$(this).addClass("active");
		$("#punkt" + (index - 1)).removeClass("active");
		$("#punkt" + (index + 1)).addClass("active");
		$("#punkt" + (index + 1)).removeClass("unclickable");
		drawPoints[clickCount] = coords[index];
		clickCount++;
		alertCount++;
		if (alertCount === 20) {
			alert("folge den rot leuchtenden Punkten!");
			window.location.reload();
		}
		console.log(clickCount);

		if (!started) {
			started = true;
			oldPoint = coords[index];
			console.log(oldPoint);
		} else if (clickCount === 2) {

			clickCount = 1;
			newPoints = oldPoint;
			drawLine(drawPoints);

		}
	}
		
	$(".punkt").click(clickHandler);	
	$("#punkt0").addClass("active");
	
	function drawLine(points) {
		$(".punkt").off("click");

		context.beginPath();
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
	}
	;

	animate();

});
