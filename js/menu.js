$(function() {
	console.log('MENU JS IS LOADED');
	$('#start_game_btn').click(start_game);
	$('#chapter2').prop('disabled', true);
	$('#chapter3').prop('disabled', true);
});

$('#tu_icon').fadeIn();

var countdown = false;
//var seconds_left = 11;
var seconds_left = 1;
var og_seconds = 11;
var map_icon_to_number = {};
var current_chapter = 0;
var score = 0;
var clicks_correct = 0;
var clicks_incorrect = 0;

	let chapter_icons = ['fa-graduation-cap', 'fa-glass',
	 'fa-book', 'fa-car', 'fa-briefcase', 
	 'fa-usd', 'fa-home', 'fa-diamond', 'fa-rocket'];


function start_game(event) {
	console.log('start game was logged');
	$('#menu_content').fadeOut(1000, function() {
			$('#chapter_menu').fadeIn(1200);
	});

	for (var i = 0; i < chapter_icons.length;i++) {
		icon = chapter_icons[i];
		map_icon_to_number[icon + ""] = Math.floor((3 * Math.random()) - 0.05);
	};
	createChapters(1);
};

var rank_array = [];
function createChapters(chapterNumber) {
	$('#chapter_menu').fadeIn(1200);
	$("#background").fadeIn();
	$('body').removeClass();
	$('body').addClass("trans_union_blue");
	var numChapters = chapterNumber * 3;
	$('#chapter_menu').empty();
	$('#chapter_menu').append("<div class='row'>" +
			"<div class='col-xs-12'>" +
				" <div class='col-xs-12'>" +
					"<img  id='chapters_icon' class='icon img-responsive'" +
					 "src='./img/grey_icon.png' ></img>" + 
				"</div></div></div>");
	$('#chapter_menu').append(
			"<div id='timer_count_down_div'>"
			+ "<h1 id='timer'>" +  seconds_left + "</h1>");
	temp_sorted = [];
	for (var game1 = 0; game1 < numChapters; game1++) {
		console.log(life_events[chapter_icons[game1] + ""]);
		console.log([map_icon_to_number[chapter_icons[game1] + ""]]);
		//temp sorted will contain the mappings of iconName to value
		temp_sorted.push([chapter_icons[game1], 
							life_events[chapter_icons[game1] + ""]
					 			[map_icon_to_number[chapter_icons[game1] + ""]] ['value']
					 ]);
	}
	temp_sorted.sort(function(a, b) {
		return b[1] - a[1];
	});
	rank_array = [];
	for (var each = 0; each < temp_sorted.length; each++) {
		console.log(temp_sorted[each][0] + ": " + temp_sorted[each][1]);
		var icon_object = {"rank": each, "icon" : temp_sorted[each][0],
		"score": temp_sorted[each][1]
		};
		rank_array.push(icon_object);
	}
	var count = 0;
	for (var i = 0; i < temp_sorted.length; i++) {
	$('#chapter_menu').append("<div id='row" +  i + "' class='row chapter_row'>" +
		"<div class='col-xs-4 chapter_icon_container'>" + 
			"<i class='fa " + temp_sorted[i][0] + " chapter_icon fa-4x'></i>" + 
			"</div>" + 
			"<div class='col-xs-8'>" +
				"<div class='chapter_btn_container'>" + 
					"<p class='icon_descrip'>" 
					 + life_events[temp_sorted[i][0] + ""]
					 [map_icon_to_number[chapter_icons[game1] + ""]]
					 ["description"] +  "</p>" + 
				"</div>" +
			"</div>" + 
		"</div>");
	}
	countdown = true;
	$("body").addClass("trans_union_blue");
	$("body").css("padding-bottom", "15px");
};

window.setInterval(function() {
	if (countdown) {
		seconds_left -= 1;
		$("#timer").text(seconds_left);
		if(seconds_left == 0) {
			$("#chapter_menu").fadeOut();
			$("#background").fadeOut();
			$('body').removeClass();
			$('body').addClass("background_white");

			countdown = false;
			rank_array.forEach(function(val){
				console.log("rank"  + ": " + val['rank'] );
				console.log("icon"  + ": " + val['icon'] );
				console.log("score"  + ": " + val['score'] )
			});
			$('#game_board').fadeIn();
			start(rank_array);
			seconds_left = og_seconds + 5;
		}
	}
}, 1000);


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


/**
		<div id='chapter_1_row' class='row chapter_row'>
			<div class='col-xs-2 chapter_icon_container'>
				<i class='fa fa-graduation-cap chapter_icon fa-4x'></i>
			</div>
			<div class='col-xs-8'>
				<div class='chapter_btn_container'>
					<p class='icon_descrip'> Description</p>
				</div>
			</div>
		</div>

*/


