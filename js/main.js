
$(document).ready(function() {
   $('.corazon').click(function() {
   	$('.fa-heart').toggleClass('pulso');
      $('.gradient').removeClass('gradient', {duration:500});
      $('.mujer_2').hide();
      $('.mujer_1').show( "drop", { direction: "down" }, 1000 );
   });
 });






