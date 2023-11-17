$("#num-22, #num-23, #num-24").remove()

// all modifications with JavaScript
$("#num-19").append("<h2>World<br>Toilet Day</h2>");
$("#num-19").css("background-image", "url(imgs/wtd_origami_nest.webp)");
$("#num-19").css("background-size", "cover");
$("#num-19").css("color", "white");
$("#num-19").css("text-shadow", "1px 1px 2px rgba(0,0,0,0.5)");

// content modifications with JavaScript and design changes in CSS
$("#num-20").append("<h2>World<br> Children's <br> Day</h2>");
// create class rule in CSS to add/scale background image
$("#num-20").addClass("child");

// same as above
$("#num-21").append("<h2>World Television Day</h2>")
$("#num-21").addClass("tv");

// Adding an anchor tag with a link to the UN website
$("#num-25").append("<h2>International Day for the Elimination of Violence against Women</h2>")
$("#num-25").append("<a href='https://www.un.org/en/observances/ending-violence-against-women-day'>Learn More</a>")
$("#num-25").css("background", "url('imgs/no-excuse.png')");

// Example with <img> tag being added 
$("#num-26").prepend("<img src='imgs/bus.png' class='drive'>")
$("#num-26").append("<h2>World Sustainable Transport Day</h2>")
$("#num-26").css("background", "#B7E5E5");

