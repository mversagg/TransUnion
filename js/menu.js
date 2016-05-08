
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

let chapter_icons = ['fa-graduation-cap', 'fa-glass',
	 'fa-book', 'fa-car', 'fa-briefcase', 
	 'fa-usd', 'fa-home', 'fa-diamond', 'fa-rocket'];

$(function() {
	console.log('MENU JS IS LOADED');
	$('#start_game_btn').click(start_game);
	$('#chapter2').prop('disabled', true);
	$('#chapter3').prop('disabled', true);

});

let rand_colors = ['purple', 'blue', 'orange', 'green', 'red'];
$('#tu_icon').fadeIn();

var countdown = false;
var seconds_left = 11;
var og_seconds = 11;
var incrementer = 5;
var map_icon_to_number = {};
var current_chapter = 0;
var score = 0;
var clicks_incorrect = 0;
var rank_array = [];
var initial_score = 700;


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

function createChapters(chapterNumber) {
	$('#chapter_menu').fadeIn(1200);
	$("#background").fadeIn();
	$('body').removeClass();
	$('#chapter_menu').empty();
	$('body').addClass("trans_union_blue");
	var numChapters = chapterNumber * 3;
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
		var curIconName = chapter_icons[game1];
		temp_sorted.push([chapter_icons[game1], 
							life_events[curIconName + ""]
							[map_icon_to_number[curIconName]]['value']
					 ]);
	}
	temp_sorted.sort(function(a, b) {
		return b[1] - a[1];
	});
	rank_array = [];
	for (var each = 0; each < temp_sorted.length; each++) {
		var curIconName = temp_sorted[each][0];
		console.log(curIconName + ": " + temp_sorted[each][1]);
		var icon_object = {
			"rank": each, 
			"icon" : curIconName,
			"score": temp_sorted[each][1],
			"descrip": life_events[curIconName + ""]
				[map_icon_to_number[curIconName + ""]]
					["description"]
			};
		rank_array.push(icon_object);
	}
	var count = 0;
	//temp sorted = [[icon_name, point_value]]
	for (var i = 0; i < temp_sorted.length; i++) {
		var curIconName = temp_sorted[i][0];
	$('#chapter_menu').append("<div id='row" +  i + "' class='row chapter_row'>" +
		"<div class='col-xs-4 chapter_icon_container'>" + 
			"<i class='fa " + curIconName + " chapter_icon fa-4x'></i>" + 
			"</div>" + 
			"<div class='col-xs-8'>" +
				"<div class='chapter_btn_container'>" + 
					"<p class='icon_descrip'>" 
					 + life_events[curIconName + ""]
					 [map_icon_to_number[curIconName + ""]]
					 ["description"] +  "</p>" + 
				"</div>" +
			"</div>" + 
		"</div>");
	}
	for (var i = 0; i < temp_sorted.length; i++) {
		var curIconName = temp_sorted[i][0];
		console.log(curIconName);
		if (i > 0) {
			$('#row_chap_arrows').append("<b class='col-xs-2 arrow'>-></b>");
		}
		$('#row_chap_arrows').append("<b class='fa chapter_icon "
 			+ curIconName + " fa-4x col-xs-2'>" 
 			+ " </b>");
		
	}
	countdown = true;
	$("body").css("padding-bottom", "15px");
};

var countdown_interval = window.setInterval(function() {
	if (countdown) {
		seconds_left -= 1;
		$("#timer").text("Seconds Left: " + seconds_left);
		$("#timer_count_down_div").css("text-align", 'center');
		if(seconds_left == 0) {
			console.log('seconds ended');
			$("#chapter_menu").fadeOut();
			$("#background").fadeOut();
			$('body').removeClass();
			$('body').addClass("background_white");
			countdown = false;
			rank_array.forEach(function(val){
				console.log("rank"  + ": " + val['rank'] );
				console.log("icon"  + ": " + val['icon'] );
				console.log("score"  + ": " + val['score'] );
			});
			$('#game_board').fadeIn();
			start(rank_array);
			seconds_left = og_seconds + incrementer;
			og_seconds = seconds_left;
		}
	}
}, 1000);


function changeColor(final_score, class_name) {
if (final_score < 600) {
		$(class_name).each(function(){
			$(this).css("color", 'red');
		});
	}
	else if (final_score >= 600 && final_score < 657) {
		$(class_name).each(function(){
			$(this).css("color", 'OrangeRed');
		});
	}
	else if (final_score >= 657 && final_score < 719) {
		$(class_name).each(function(){
			$(this).css("color", 'orange');
		});
	}
	else if (final_score >= 719 && final_score < 780) {
		$(class_name).each(function(){
			$(this).css("color", 'gold');
		});
	}
	else if (final_score >= 780 && final_score <= 800) {
		$(class_name).each(function(){
			$(this).css("color", 'YellowGreen');
		});
	}
}

function game_over(time, clicks) {
	console.log("game over button");
	$("#icon_results").empty();
	var adder = 0;
	var final_score = initial_score;
	rank_array.forEach(function(val){
			$("#icon_results").append("<div class='row' id='icon_res1'>"
		      			+ "<div class='col-xs-3 icon_res_row'>"
		      			+ "<i class='icon_rand fa " 
		      			+ val['icon']
		      			+ " fa-3x'></i>"
		      			+ "</div>"
		      			+ "<div class='col-xs-8 icon_desc_row'>"
			      		+	val['descrip']
			      		+ "</div>"
			      		+ "<div class='col-xs-2 icon_affect'>"
			      		+  val['score']
		      			+ "</div>"
		      		    + "</div>");
		final_score += val['score'];

	});
	$('.icon_rand').each(function() {
	})
	changeColor(final_score, '.final_score'); 
	changeColor(initial_score, '#initial_credit');
	if (final_score >= 850) {
		final_score = 850;
	}
	if (final_score <= 200) {
		final_score = 200;
	}

	$('#total_final').text(time + clicks);
	var total_score = time + clicks;
	if (total_score < 60) {
		$('#total_final').css("color", "green");
		$("#time_taken").css("color", "green");

	}
	else if (total_score < 90) {
		$('#total_final').css("color", "orange");
		$("#time_taken").css("color", "orange");
	}
	else  {
		$('#total_final').css("color", "red");
		$("#time_taken").css("color", "red");
	}

	$('#time_taken').text(time + " seconds");

	$('#incorrect').text(clicks);
	$('#incorrect').css("color", "red");

	$("#game_over_button").click();
	$('.final_score').each(function(){
		$(this).text(final_score);
	});
	
	$('#menu_content').fadeIn(1000);	
}	




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


