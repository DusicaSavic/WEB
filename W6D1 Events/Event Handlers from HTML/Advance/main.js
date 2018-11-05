var $div = document.querySelector('div');
var hasRunningInterval;

function toggleBackground() {
    $div.classList.toggle('green');
}

function toggleAuto() {
    if (hasRunningInterval === undefined) {   // (!hasRunningInterval)
        hasRunningInterval = setInterval(toggleBackground, 1000);
    } else {
        clearInterval(hasRunningInterval);
        hasRunningInterval = undefined;    // hasRunningInterval = null
    }
}