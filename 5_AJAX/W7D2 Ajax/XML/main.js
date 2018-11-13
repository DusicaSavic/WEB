const $div = document.querySelector('.city');

function getDataFromServer() {

    const xmlRequest = new XMLHttpRequest();

    xmlRequest.open("GET", "ourIpResponse.xml");

    xmlRequest.send();

    xmlRequest.onload = function () {
        const xmlDoc = xmlRequest.responseXML;
        console.log(xmlRequest);
        const from = xmlDoc.querySelector("city").textContent;

        const $p = document.createElement('p');
        $p.textContent = `City: ${from}`;
        $div.appendChild($p);
    }

}


const $button = document.querySelector('.button')

$button.addEventListener('click', getDataFromServer);


// const $div = document.querySelector('.city');
// const $input = document.querySelector('.ip-address');

// function getDataFromServer() {

//     const data = $input.value;
//     console.log(data);


//     const xmlHttp = new XMLHttpRequest();
//     xmlHttp.open('GET', `http://api.geoiplookup.net/?query=${data}`);
//     xmlHttp.send();

//     xmlHttp.onload = function () {
//         const xmlDoc = xmlHttp.responseXML;
//         // console.log(xmlDoc);
//         const from = xmlDoc.querySelector('city').textContent;

//         const $p = document.createElement('p');
//         $p.textContent = `City: ${from}`;
//         $div.appendChild($p);
//     }

// }


// const $button = document.querySelector('.button')

// $button.addEventListener('click', getDataFromServer);