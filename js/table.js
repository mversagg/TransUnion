let colors = [ 'purple', 'plum', 'monza',
	'medium_purple', 'cinnabar', 'chestnut_rose', 'tall_poppy', 'sm_blue',
  	'pict_blue', 'royal_blue', 'cool_green', 'gossip', 'salem', 'fire_bush',
  	'light_orange', 'mid_orange', 'dark_pink', 'turq', 'aqua', 'butter'];
let gameIcons = ['fa-graduation-cap', 'fa-glass',
	 'fa-book', 'fa-car', 'fa-briefcase', 
	 'fa-usd', 'fa-home', 'fa-diamond', 'fa-rocket'];
let rankIndex = 0;
let gameData;
let gameTimer = 0;
let gameEnd = false;
let missedClicks = 0;
let chapterNumber = 2;

$(function() {
	$('td').click(gameController);
});

function start(data) {
	rankIndex = 0;
	gameEnd = false;
	gameData = data;
	shuffle(gameIcons);
	shuffle(colors);

	$('#gameNumber').text(chapterNumber - 1);

	$('.tile').each(function(index) {
		let tile = $(this);
		let temp = $(this);
		temp.removeClass();
		temp.addClass('tile ' + colors[index]);

		$('.tile_icon').each(function(index) {
			let icon = $(this);
			icon.removeClass();
			icon.addClass('tile_icon fa ' + gameIcons[index]);
			icon.addClass('fa-2x');
		});
	});

	window.setInterval(function() {
		if (!gameEnd) {
			gameTimer += 1;
			$('#gameTimer').text(gameTimer);
		} else {
			endGame(gameTimer, missedClicks);
		}
	}, 1000);
}

function endGame(t, mc) {
	createChapter(chapterNumber++);

	if (chapterNumber > 3) {
		gameOver(t, mc);
	}
}

function randomize() {
	shuffle(gameIcons);
	shuffle(colors);

	$('.tile').each(function(index) {
		let temp = $(this);
		temp.removeClass();
		temp.addClass('tile ' + colors[index]);
		
		$('.tile_icon').each(function(iIndex) {
			let icon = $(this);
			icon.removeClass();
			icon.addClass('tile_icon fa ' + gameIcons[iIndex] + ' fa-2x');
		});
	});
}

function gameController(event) {
	let row = event.currentTarget.dataset.row;
	let col = event.currentTarget.dataset.col;
	let clickIcon = $(event.currentTarget.childNodes[0])[0].classList[2];
	console.log(clickIcon);
	
	if (clickIcon === gameData[rankIndex].icon) {
		$('.tracker').each(function() {
			let track = $(this);
			if (track.data('rank') == rankIndex) {
				track.addClass(clickIcon);
			}
		});
		rankIndex += 1;
	} else {
		missedClicks += 1;
	}

	if (rankIndex === gameData.length) {
		gameEnd = true;
	} else {
		randomize();
	}
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}