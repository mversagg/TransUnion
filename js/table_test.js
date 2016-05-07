let colors = [ 'purple', 'plum', 'monza',
	'medium_purple', 'cinnabar', 'chestnut_rose', 'tall_poppy', 'sm_blue',
  	'pict_blue', 'royal_blue', 'cool_green', 'gossip', 'salem', 'fire_bush',
  	'light_orange', 'mid_orange', 'dark_pink', 'turq', 'aqua', 'butter'];
//let icons = ['fa-blind', 'fa-binoculars', 'fa-bomb', 'fa-code', 'fa-eye', 'fa-send', 'fa-photo', 'fa-television', 'fa-tags'];
let icons = ['fa-graduation-cap', 'fa-glass', 'fa-book', 'fa-car', 'fa-briefcase', 'fa-usd', 'fa-home', 'fa-diamond', 'fa-rocket'];

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

		$('.fa').each(function(index) {
			let icon = $(this);
			icon.removeClass();
			icon.addClass('fa ' + icons[index]);
			icon.addClass('fa-2x');
		});
		/*
		if (index > 0) {
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

//this function will go through the array of icons and pick 
function setUpEvents(data)
{
	var event = [];
	//go through the array of icons and find the
	//random events we will use
	//i = tpye of event, grad, beer, car ect
	for(i = 0; i < data.length; i++)
	{
		randEvent = Math.floor((Math.random() * 2));

		event.push(allEvents[data[i]][randEvent]); 
	}

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
var x = "fuck this shit"
//This will contain all possible data for the life events
var life_events = 
{
	'fa-graduation-cap': {
	"0" : {
		"description" : "You began your college career...with a student loan! Woop woop!",
		"category" : "start_college",
		"action" : "ADD_NEW_STUDENT_LOAN",
		"value" : -10
	},
	"1" : {
		"description" : "You graduated college and managed to pay your loans on time. Mom is so proud.",
		"category" : "graduate_college",
		"action" : "PAY_LOANS_ON_TIME",
		"value" : 30
	},
	"2" : {
		"description" : "You graduated college, but had such a good time backpacking in Europe that you forgot to pay your loans on time.",
		"category" : "graduate_college",
		"action" : "PAY_STUDENT_LOANS_30_DAYS_LATE",
		"value" : -30
		}
	}, 
	'fa-glass': {
	"0" : {
		"description" : "You and everyone else partied a little too hardy for St. Fratty’s Day and brought down an entire garage. Now you need a loan for medical expenses.",
		"category" : "unexpected_medical_expense",
		"action" : "SEEK_LOANS",
		"value" : -10
	},
	"1" : {
		"description" : "You went to the pub for a proper pint and and met a CEO who offered you a better part-time job. Pay off some debt? I think yes.",
		"category" : "new_job-higher_income",
		"action" : "PAY_DOWN_DEBT",
		"value" : 100	
	},
	"2" : {
		"description" : "You drank a little too much and ended up late for work the next day, getting you fired and forcing you to settle for a lower paying job. You’re going to be late on that next loan payment.",
		"category" : "new_job-lower_income",
		"action" : "LATE_30_DAYS",
		"value" : -30
		}
	}, 
	'fa-book': {
	"0" : {
		"description" : "Submitted your english literature paper to the North American Writers competition and won $10,000",
		"category" : "win_large_sum",
		"action" : "NO_EFFECT",
		"value" : 0
	} ,
	"1" : {
		"description" : "A waiter took your card and copied it… so you reported it and put a Fraud lock on your TransUnion credit file.",
		"category" : "bad_waiter",
		"action" : "REPORTED",
		"value" : 0
	},
	"2" : {
		"description" : "Anonymous compromises Netflix and steals your information in the process..",
		"category" : "breach_at_netflix",
		"action" : "POSSIBLE_IDENTITY_STOLEN",
		"value" : -20
	}
},
	'fa-car': {
	"0": {
		"description" : "You paid your unexpected medical expenses back!",
		"category" : "unexpected_medical_expense",
		"action" : "PAY_EXPENSE",
		"value" : 55
	},
	"1": {
		"description" : "You got careless and got a DUI! Oh no!",
		"category" : "DUI",
		"action" : "NO_EFFECT",
		"value" : 0
	},
	"2": {
		"description" : "You got some new wheels!",
		"category" : "new_job-higher_income",
		"action" : "BUY_CAR",
		"value" : -10
		}
	}, 
	'fa-briefcase': {
	'0': {
		'description' : 'Your spouse has AMAZING credit!',
		'category' : 'marriage-amazing_spousal_credit',
		"action" : "EFFECTS_SCORE",
		"value" : 40
		},
	"1": {
		"description" : "Darn. You had to default on a loan...",
		"category" : "new_job-lower_income",
		"action" : "DEFAULT_ON_LOAN",
		"value" : -100
		},
	"2": {
		"description" : "Someone stole your credit card  and maxed it out!",
		"category" : "stolen_cc",
		"action" : "CREDIT_LIMIT_MAXED",
		"value" : -35
		}
	}, 
	'fa-usd': {
	"0": {
		"description" : "Your lovely ex trashes your credit!",
		"category" : "divorce",
		"action" : "EX_TRASHES_YOUR_CREDIT",
		"value" : -120
	},
	"1": {
		"description" : "You paid back some of your debt!",
		"category" : "new_job-higher_income",
		"action" : "PAY_DOWN_DEBT",
		"value" : 100
	},
	"2": {
		"description" : "Yay you bought a new house!",
		"category" : "new_job-higher_income",
		"action" : "BUY_HOUSE",
		"value" : -10
		}
	},
	'fa-home': {
	"0":{     
		"description" : "You took out a home equity line of credit!",
		"category" : "big_mortgage",
		"action" : "HOME_EQUITY_LINE",
		"value" : -6
		},
	"1":{     
		"description" : "You need to take out a loan for unexpected medical expenses!",
		"category" : "unexpected_medical_expenses",
		"action" : "SEEK_LOANS",
		"value" : -10
		},
	"2":{     
		"description" : "Your debit card was stolen but you reported it.",
		"category" : "stolen_debit_card",
		"action" : "REPORTED",
		"value" : 0
		}
	}, 
	'fa-diamond': {
	"0":{     
		"description" : "You get divorced.",
		"category" : "divorce",
		"action" : "NO_EFFECT_SCORE",
		"value" : 0
	},
	"1":{     
		"description" : "Yay you bought a new house!",
		"category" : "bad_spouse_credit",
		"action" : "NO_EFFECT_SCORE",
		"value" : 0
	},
	"2":{     
		"description" : "Your spouse has bad credit!",
		"category" : "bad_spouse_credit",
		"action" : "EFFECTS_SCORE",
		"value" : -40
		}
	}, 
	'fa-rocket': {
	"0":{     
		"description" : "Zombie apocalypse. Credit is now irrelevant.",
		"category" : "zombie_apocalypse",
		"action" : "CREDIT_IS_IRRELEVANT",
		"value" : 0
	},
	"1":{     
		"description" : "Breach at Netflix… your information is compromised. Your credit wasn’t affected.",
		"category" : "breach_at_netflix",
		"action" : "POSSIBLE_IDENTITY_STOLEN",
		"value" : 0
	},
	"2":{     
		"description" : "You forgot to shred your mail and sensitive information leaked...",
		"category" : "forgot_to_shred_mail",
		"action" : "IDENTITY_STOLEN",
		"value" : -30
	}
	}
};



