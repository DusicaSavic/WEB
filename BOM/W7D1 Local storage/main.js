function storeData(storageObj, name, data) {

    if (typeof data == Object) {
        JSON.stringify(data);
    }
    storageObj.setItem(name, data);
}

function readData(storageObj, name) {

    console.log(storageObj);
    const browserData = storageObj.getItem(name);
    if (browserData) {
        console.log(browserData);
    } else {
        console.log("There is no data.");
    }
}

function removeData(storageObj, name) {
    storageObj.removeItem(name);
}

function removeAllData(storageObj) {
    storageObj.clear();
}

removeAllData(localStorage);
// storeData(localStorage, 'cat', 'Tom');
// readData(localStorage, 'cat');
// storeData(localStorage, 'school', 'BIT');
readData(localStorage, 'school');







// function storeSessionData(name, data) {
//     sessionStorage.setItem(name, data);
// }

// function readSessionData(name) {
//     const browserData = sessionStorage.getItem(name);
//     if (browserData) {
//         console.log(browserData);
//     } else {
//         console.log("There is no data.");
//     }
// }

// function removeSessionData(name) {
//     sessionStorage.removeItem(name);
// }