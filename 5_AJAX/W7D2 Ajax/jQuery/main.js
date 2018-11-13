const requestUser = $.ajax({
    url: "https://api.github.com/search/users?q=shljshlj",
    method: "GET",

});

requestUser.done(function (msg) {
    console.log(msg)
});


requestUser.fail(function (jqXHR, textStatus) {
    alert("Request failed: " + textStatus);
});
