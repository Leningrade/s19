$(document).ready(function(){
  $('.navIcon').on('click', function(){
    $('.navMobileBG').toggleClass('open');
    $('.navMobileBG ul').toggleClass('open');
  });
  $('.navMobile ul li').on('click', function(){
    $('.navMobileBG').removeClass('open');
    $('.navMobileBG ul').removeClass('open');
  });
});

