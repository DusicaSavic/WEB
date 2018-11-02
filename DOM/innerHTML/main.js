// 1) kreiranje select-a uz pomoc innerHTML

function createSelect(options, node) {

    // 1)
    // var select = document.createElement('select');
    // var newSelect = node.appendChild(select);

    // for (var i = 0; i < options.length; i++) {
    //     newSelect.innerHTML += '<option value=' + arrOfStrings[i] + '>' + arrOfStrings[i] + '</option>';
    // }


    // 1a)
    var selectString = '<select>';

    for (var i = 0; i < options.length; i++) {
        selectString += '<option>' + options[i] + '</option>';
    }

    node.innerHTML += selectString + '</select>';

}

var options1 = ['java', 'php', 'javaScript'];
var nodeDiv = document.querySelector('.first');

createSelect(options1, nodeDiv);

var options2 = [1, 2, 3];

createSelect(options2, document.querySelector('div').lastElementChild);




/////////////////////////////////////
// 2) kreiranje select-a uz pomoc appendChild i createElement

function buildSelect(options, node) {

    var select = document.createElement("select");

    for (var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.textContent = options[i];
        select.appendChild(option);
    }

    node.appendChild(select);
}

var secondDiv = document.querySelector('.second');
var options3 = [1, 2, 3, 4];

buildSelect(options3, secondDiv);