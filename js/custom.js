$('.cool').addClass('.hot');
$('li:lt(2)').hide().fadeIn(10000);
$('li').on('click', function() {
  $(this).remove();
});

$('.cool').on('click', function();
