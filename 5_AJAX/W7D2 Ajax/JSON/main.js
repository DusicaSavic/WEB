
const $img = document.querySelector('.dog')
const $button = document.querySelector('.button');

function getData() {

    const requestDog = new XMLHttpRequest();
    requestDog.open('GET', 'https://dog.ceo/api/breeds/image/random');


    requestDog.onload = function () {
        console.log(requestDog);
        if (requestDog.status >= 200 && requestDog.status < 400) {
            // Success!
            const data = JSON.parse(requestDog.responseText);
            console.log(data)
            const source = data.message;
            $img.setAttribute('src', source)
        } else {
            // We reached our target server, but it returned an error

        }

    }
    requestDog.send()
}

$button.addEventListener('click', getData)



