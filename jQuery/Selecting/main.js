$('li:first').addClass('border');

$('li').css('text-transform', 'uppercase');
$('li.active').css('color', '#ff0000');
// $('li:eq(2)').addClass('bac-col');

var $listItems = $('li');
var middle = ($listItems.length - 1) / 2;
$listItems.eq(middle).addClass('bac-col');