var first =$("#first");
var second =$("#second");
var answer=$("p");
$("#sum").click(
function(){
 answer.text((first.val()*1)+(second.val()*1)) 
}
)
$("#multiplay").click(
function(){
 answer.text(first.val()*second.val()) 
}
)
$("#minus").click(
function(){
answer.text(first.val()*second.val()) 
}
)
$("#devide").click(
function(){
answer.text(first.val()/second.val()) 
}
)