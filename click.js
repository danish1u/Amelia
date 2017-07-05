$('.lev2').hide();

$("li:has(ul)").click(function(){

$("ul",this).toggle('slow');
});
