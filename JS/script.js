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