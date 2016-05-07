let colors = [ 'purple', 'plum', 'monza',
	'medium_purple', 'cinnabar', 'chestnut_rose', 'tall_poppy', 'sm_blue',
  	'pict_blue', 'royal_blue', 'cool_green', 'gossip', 'salem', 'fire_bush',
  	'light_orange', 'mid_orange', 'dark_pink', 'turq', 'aqua', 'butter'];
let icons = ['fa-blind', 'fa-binoculars', 'fa-bomb', 'fa-code', 'fa-eye', 'fa-send', 'fa-photo', 'fa-television', 'fa-tags'];

$(function() {
	$('td').click(gameController);
	randomize();
});

function randomize() {
	shuffle(icons);
	shuffle(colors);

	$('.tile').each(function(index) {
		let tile = $(this);
		let temp = $(this);
		temp.removeClass();
		temp.addClass('tile ' + colors[index]);

		$('.tile_icon').each(function(index) {
			let icon = $(this);
			icon.removeClass();
			icon.addClass('fa ' + icons[index]);
			icon.addClass('fa-2x');
		});

		/*if (index > 0) {
			setTimeout(function() {
				tile.fadeOut(200, function() {
					let temp = $(this);
					temp.removeClass();
					temp.addClass('tile ' + colors[index]);

					$('.fa').each(function(index) {
						let icon = $(this);
						icon.removeClass();
						icon.addClass('fa ' + icons[index]);
					});

					tile.fadeIn(200);
				});
			}, delay);

			delay += INCR;
		} else {
			tile.fadeOut(200, function() {
				let temp = $(this);
				temp.removeClass();
				temp.addClass('tile ' + colors[index]);

				$('.fa').each(function(index) {
					let icon = $(this);
					icon.removeClass();
					icon.addClass('fa ' + icons[index]);
				});
				tile.fadeIn(200);
			});
		}*/
	});
}

function gameController(event) {
	randomize();

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