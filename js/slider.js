(function(){
var slider = document.querySelector('.slider');
var thumb = slider.querySelector('.thumb');
var track = slider.querySelector('.track');
var bg = slider.querySelector('.bg');
var stext = document.querySelector('.slider-container');
var jsval = document.getElementById('jsclass');
var sliderleft = slider.offsetLeft;
var curPos;
var maxPos = slider.clientWidth;

updatePosByP(50);

stext.addEventListener('click', function(event){
	var target = event.target;
	var v = 0;
	//if stext.childNodes.
	switch (target.getAttribute('class')) {
		case 'one' : v = 0;
		break;
		case 'two' : v = 25;
		break;
		case 'three' : v = 50;
		break;
		case 'four' : v = 100;
		break;
		default: v = 0;
	}
	
	updatePosByP(v);
	
});

track.addEventListener('click', function(ev){
	var mpos = ev.clientX;
	updatePos(mpos);
	slider.blur();
});

function updatePosByP(per) {
	thumb.style.left = per + '%';
	//var w = 100 - parseInt(per);
	bg.style.width = per + '%';
	jsval.value = per;
};
thumb.addEventListener('mousedown', function(e) {
	//startPos = e.clientX;
	startPos = thumb.offsetLeft;
	//slider.focus();
	
	document.addEventListener('mousemove', onmove);
	event.preventDefault();
	document.addEventListener('mouseup', onup);
});

var onmove = function(ev) {
	var mpos = ev.clientX;
	updatePos(mpos);
};

function updatePos(mpos) {
	var v = 0;
	var a = parseInt(mpos-sliderleft); 
	var b = parseInt(maxPos);
	if (a <= b * 0.125) v = 0;
	else if ((a > b * 0.125) && (a <= b * 0.375)) v = 25;
	else if ((a > b * 0.375) && (a <= b * 0.75)) v = 50;
	else v = 100;
	updatePosByP(v);
};

var onup = function(e) {
	curPos = thumb.offsetLeft;
	document.removeEventListener('mousemove', onmove);
	slider.blur();
	document.removeEventListener('mouseup', onup);
};
})();