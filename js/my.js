$(".parent_block .button").click(function() {
  $('.toggled_block').toggle();
  $('.button').toggleClass('active');
});
$(".parent_block span").click(function() {
  $('.toggled_block').toggle();
  $('.button').toggleClass('active');
});

$(".parent_block ul li").click(function(){
	var lival = $(this).text();
  $('.parent_block .button').html(lival);
  $('.parent_block .toggled_block').hide();
  $('.button').toggleClass('active');
  $('.button').addClass('selected');
  $('.parent_block span').show();
  $('input[name="born"]').val(lival);
  
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".parent_block").length) {
    $('.parent_block .toggled_block').hide();
	$('.button').removeClass('active');
  } 
  e.stopPropagation();
});  
  
  
$('.menu-toggle').click(function(){
  $('#menu').toggleClass('active');
});