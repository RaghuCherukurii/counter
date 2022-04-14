$(".btn-20x").click(function () {
    var counter = $(".container .counter")
            .clickCount()[0];

    counter.val(counter.val()+10);

});

$(".btn-get").click(function () {
    var val = $(".container .counter")
            .clickCount()[0]
            .val();

    alert("Current counter value is: "+val);

});