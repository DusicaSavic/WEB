var $div = document.querySelector('div');
var $img = document.querySelector('img');

var pr;
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 39) {
        console.log('hello');
        var x = 0;
        pr = setInterval(function () {
            x -= 1;
            $div.style.backgroundPosition = x + 'px 0';
        }, 100);
        $img.removeAttribute('src');
        $img.setAttribute('src', './images/mario_running.gif');
    }
})

// document.addEventListener('keypress', function (event) {
//     if (event.keyCode === 39) {
//         console.log('hello');
//         var x = 0;
//         pr = setInterval(function(){
//             x-=1;
//             $div.style.backgroundPosition = x +'px 0';
//         }, 100);
//         $img.removeAttribute('src');
//         $img.setAttribute('src', './images/mario_running.gif');
//     }
// })

document.addEventListener('keyup', function (event) {
    if (event.keyCode === 39) {
        console.log('blaaa');
        clearInterval(pr);
        $img.removeAttribute('src');
        $img.setAttribute('src', './images/mario.png');

    }
})

