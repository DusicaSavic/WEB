var $allImages = document.querySelectorAll('img');


function changeBorder(event) {

    console.log(event.currentTarget.width);
    if (event.currentTarget.width != 285) {
        event.currentTarget.setAttribute('style', 'border:1px solid red')
    }
    else {
        event.stopPropagation();
    }
}

for (var i = 0; i < $allImages.length; i++) {

    $allImages[i].addEventListener('click', changeBorder);
}