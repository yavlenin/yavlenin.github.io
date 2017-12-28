$( document ).ready(function main(){
	init();

	$('#firstNumberInput').change(function() {
		if ($(this).val() != firstNumber) {
			$(this).css("color", "red");
			$('#firstNumber').css('background-color', 'orange');
		} else {
			$(this).css("color", "black");
			$('#firstNumberInput').css({
				border: 0
			});
			$('#firstNumberInput').attr('readonly', true);

			var width = 39*secondNumber - 2;
			$('#secondArrow').css({
				opacity: 1,
				width: (39*secondNumber - 2) + "px",
				height: (39*secondNumber/2 + 3*secondNumber) + "px",
				top: (39*secondNumber/2 - 7*secondNumber) + "px"
			});
			$('#secondNumberInput').css({
				opacity: 1,
				left: (width/2 - 10) + "px"
			});
			$('#firstNumber').css('background-color', '');

			$('#secondNumberInput').focus();
		}
	});

	$('#secondNumberInput').change(function() {
		if ($(this).val() != secondNumber) {
			$(this).css("color", "red");
			$('#secondNumber').css('background-color', 'orange');
		} else {
			$(this).css("color", "black");
			$('#secondNumberInput').css({
				border: 0
			});
			$('#secondNumberInput').attr('readonly', true);

			$('#resultNumber').attr('readonly', false);
			$('#resultNumber').css("border", "1px solid black");
			$('#resultNumber').val('');

			$('#secondNumber').css('background-color', '');
			$('#resultNumber').focus();
		}
	});

	$('#resultNumber').change(function() {
		if ($(this).val() != resultNumber) {
			$(this).css("color", "red");
		} else {
			$(this).css("color", "black");
			$(this).css({
				border: 0
			});
			$(this).attr('readonly', true);
			$('#finished').css({
				opacity: 1,
				zIndex: 1
			});
			$('#next').focus();
		}
	});

	$('#next').click(function() {
		init();
	});
});

var firstNumber;
var secondNumber;
var resultNumber;

function takeRandom(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function init() {
	firstNumber = takeRandom(6, 9);
	secondNumber = takeRandom(11 - firstNumber, 14 - firstNumber);
	resultNumber = firstNumber + secondNumber;

	$('#firstNumber').text(firstNumber);
	$('#secondNumber').text(secondNumber);
	$('#firstNumberInput').focus();
	$('#firstNumberInput, #secondNumberInput').css({
		color: "black",
		border: "1px solid black",
		opacity: 0
	}).val('').attr('readonly', false);
	$('#firstArrow, #secondArrow').css({
		opacity: 0
	});

	$('#resultNumber').css({
		color: "black",
		border: 0,
	}).val("?").attr('readonly', true);
	$('#finished').css({
		opacity: 0,
		zIndex: -1
	});

	var width = 39*firstNumber - 2;
	var height = 39*firstNumber/2 + 3*firstNumber;
	$('#firstArrow').css({
		opacity: 1,
		width: width + "px",
		height: (39*firstNumber/2 + 3*firstNumber) + "px",
		top: (39*firstNumber/2 - 7*firstNumber) + "px"
	});
	$('#firstArrow::before').css({
		top: height + 20 + "px"
	});
	$('#firstArrow::after').css({
		top: height + 24 + "px"
	});
	$('#firstNumberInput').css({
		opacity: 1,
		left: (width/2 - 10) + "px"
	});
}
