
$(document).ready(function () {
    $('.box').matchHeight();

    var date = new Date(),
        year = date.getFullYear();


    document.getElementById('current-year').innerHTML = year;
});
