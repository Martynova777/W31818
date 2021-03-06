var field = document.querySelector(".field");
var ball = document.querySelector(".ball");
var player = document.querySelector(".player");
var playerX = 0;
var x = 0;
var y = 0;
var resolution = {
	x: true,
	y: true
};
var timer;

function setBallPosition(xPos, yPos) {
	x = xPos;
	y = yPos;
	ball.style.left = xPos + "px";
	ball.style.top = yPos + "px";
}

function moveBall() {
	if(resolution.x) {
		x++;
		if(x == 390) {
			resolution.x = false;
		}
	}

	if(!resolution.x) {
		x--;
		if(x == 0) {
			resolution.x = true;
		}
	}

	if(resolution.y) {
		y++;
		if(y == 190) {
			resolution.y = false;
		}
	}

	if(!resolution.y) {
		y--;
		if(y == 0) {
			resolution.y = true;
		}
	}

	collision();

	ball.style.top = y + "px";
	ball.style.left = x + "px";
}

document.addEventListener("keydown", function(e) {
	switch(e.keyCode) {
		case 38:
			playerX <= 0 ? playerX = 0 : playerX-=10;
			break;
		case 40:
			playerX >= 150 ? playerX = 150 : playerX+=10;
			break;
	}

	player.style.top = playerX + "px";
})

function collision() {
	if(ball.offsetTop > player.offsetTop
		&& ball.offsetTop < player.offsetTop + player.offsetHeight
		&& ball.offsetLeft < player.offsetLeft + player.offsetWidth) {
		resolution.x = true;
	}

	if(ball.offsetLeft <= 0) {
		gameOver();
	}
}

function gameOver() {
	clearInterval(timer);
	console.log("Game over");
	alert("Game over");
	var gameStatus = confirm("Let's start ?");

	if(gameStatus) {
		setBallPosition(field.offsetWidth/2, field.offsetHeight/2);
		timer = setInterval(moveBall, 10);
	}

}

setBallPosition(field.offsetWidth/2, field.offsetHeight/2);
timer = setInterval(moveBall, 10);