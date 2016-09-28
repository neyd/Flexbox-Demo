var left = $("#left");
var show = $("#show");
var leftbutton = $("#leftbutton");
var rightbutton = $("#rightbutton");
left.hide();

show.on("click",function() {
    left.toggle(600);
});

leftbutton.on("click", function() {
   left.css("order","-1");
});
rightbutton.on("click", function() {
   left.css("order", "1");
});

$(".nav-entering").addClass('animated fadeindown');
$(".nav-registration").addClass('animated fadeindown');

$(".cards").addClass('animated fadeInUP');

$("#Accept").click(function() {
    if(!$("#divA i").hasClass("fa fa-check")){
        $("#divA i").addClass("fa fa-check");
        $("#divA i").css("padding","5px");
    } else {
        $("#divA i").removeClass("fa fa-check");
        $("#divA i").css("padding","0px");
    }
});