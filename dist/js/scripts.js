 var $form = $('form#iniciativas19'),
    url = 'https://script.google.com/macros/u/1/s/AKfycbyf1Da9TNvcHLsUv-DuAxIvWY-WYPDIgJG5jMGs2ZiwU0UDom4/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  })
})

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

