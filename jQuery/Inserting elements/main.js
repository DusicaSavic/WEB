var $div = $('<div>');
var $body = $('body');

var $title = $('<h1>');
$title.text("Amazing Gallery");


var imageLinks = [
    'http://via.placeholder.com/500x300/cc99ff',
    'http://via.placeholder.com/400x300/ff751a',
    'http://via.placeholder.com/400x200/80aaff',
    'http://via.placeholder.com/700x300/ff00bf',
    'http://via.placeholder.com/700x700/ccffcc',
    'http://via.placeholder.com/200x200/ffe680',
    'http://via.placeholder.com/300x500/4d4dff'
]



for (var i = 0; i < imageLinks.length; i++) {
    var imgLink = imageLinks[i]
    var $img = $('<img>').attr('src', imgLink);
    $img.width(Math.floor(Math.random() * 251) + 50);
    $img.addClass('image');
    $div.append($img);

}


$body.append($div);
$div.prepend($title);
$div.addClass('gallery');
$title.addClass('title');

var $images = $('img')
console.log($images[0]);
console.log($images.eq(0));

for (var i = 0; i < $images.length; i++) {
    var $image = $images.eq(i);
    if ($image.width() < 200) {
        $image.addClass('border');

    } else {
        break;
    }
}