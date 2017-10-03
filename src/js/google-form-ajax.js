 var $form = $('form#iniciativas19'),
    url = 'https://script.google.com/macros/u/1/s/AKfycbyf1Da9TNvcHLsUv-DuAxIvWY-WYPDIgJG5jMGs2ZiwU0UDom4/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    Access-Control-Allow-Origin: *,
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  })
})
