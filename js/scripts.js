

$("#num-22, #num-23, #num-24").on("click", function () {
    $(this).append("<h2>No internation Day on this day</h2>")
});

$(".wrap .box").on("click", function () {
    var index = $(this).index();

    $(this).unbind("click");
    switch (index) {
        case 0:
            $("#num-19").append("<h2>World<br>Toilet Day</h2>");
            $("#num-19").css("background-image", "url(imgs/wtd.webp)");
            $("#num-19").css("background-size", "cover");
            $("#num-19").css("color", "white");
            $("#num-19").css("text-shadow", "1px 1px 2px rgba(0,0,0,0.5)");
            break;
        case 1:
            $("#num-20").append("<h2>World<br> Children's <br> Day</h2>");
            $("#num-20").addClass("child");
            break;
        case 2:
            $("#num-21").append("<h2>World Television Day</h2>")
            $("#num-21").addClass("tv");
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            $("#num-25").append("<h2>International Day for the Elimination of Violence against Women</h2>")
            $("#num-25").append("<a href='https://www.un.org/en/observances/ending-violence-against-women-day'>Learn More</a>")
            $("#num-25").css("background", "url('imgs/no-excuse.png')");
            break;
        case 7:
            $("#num-26").prepend("<img src='imgs/bus.png' class='drive'>")
            $("#num-26").append("<h2>World Sustainable Transport Day</h2>")
            $("#num-26").css("background", "#B7E5E5");
            break;
    }
});
