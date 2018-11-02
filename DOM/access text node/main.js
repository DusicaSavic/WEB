function textToAlert() {
    var textOfLi = document.querySelector('ul').lastElementChild.previousElementSibling.textContent;
    alert(textOfLi);
}
// textToAlert();
// alert('Hello');

function replaceText(text) {

    var textOfLastLi = document.querySelector('ul').lastElementChild;
    textOfLastLi.textContent = text;
}

replaceText('Hello');
// 'contact' = 'hello'