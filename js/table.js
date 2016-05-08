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
let gameInterval;

$(function() {
	$('td').click(gameController);
});

function start(data) {
	if (chapterNumber - 1 === 1) {
		missedClicks = 0;
		gameTimer = 0;
	}

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

	gameInterval = window.setInterval(function() {
		if (!gameEnd) {
			gameTimer += 1;
			$('#gameTimer').text(gameTimer);
		} else {
			endGame(gameTimer, missedClicks);
			clearInterval(gameInterval);
		}
	}, 1000);
}

function showHint() {
	$('#hintBox').text(gameData[rankIndex].descrip);
	missedClicks += 2;
}

function endGame(t, mc) {
	clearInterval(gameInterval);
	if (chapterNumber <= 3) {
		$('#game_board').fadeOut(function() {
			$('.tracker').each(function() {
				$(this).removeClass();
				$(this).addClass('tracker fa');
			});
			createChapters(chapterNumber++);
		});
	} else {
		game_over(gameTimer, missedClicks);
		$('#game_board').fadeOut();
		$('.tracker').each(function() {
			$(this).removeClass();
			$(this).addClass('tracker fa');
		});
		chapterNumber = 2;
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