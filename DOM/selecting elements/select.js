function applyClass() {
    // var secondUl = document.querySelector('ul:nth-of-type(2)');
    // secondUl.className = "second";

    document.querySelector('ul:nth-of-type(2)').className = 'second';
}

function applyBgColorToLi() {
    var listOfLi = document.querySelectorAll('li');
    for (var i = 0; i < listOfLi.length; i++) {
        listOfLi[i].className += ' bg-color';
    }

}

function third() {
    var listOfLiOfThirdUl = document.querySelectorAll('ul:nth-of-type(3) li');
    for (var i = 0; i < listOfLiOfThirdUl.length; i++) {
        listOfLiOfThirdUl[i].className += ' transformCaseColor';
    }
}

applyClass();

applyBgColorToLi();

third();

