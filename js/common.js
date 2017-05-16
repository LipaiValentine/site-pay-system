// TOP CONTROLS
$('.plus').click(function (e) {
        e.preventDefault();
    var sp = parseFloat($(this).prev('.amount').text());
    $(this).prev('.amount').text(sp + 1);
});

$('.minus').click(function (e) {
        e.preventDefault();
    var sp = parseFloat($(this).next('.amount').text());
    $(this).next('.amount').text(sp - 1);
    if (!isNaN(sp) && sp > 0) {
        $(this).next('.amount').text(sp - 1);
    } else {
        $(this).next('.amount').text(0);
    }
});