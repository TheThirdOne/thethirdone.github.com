function get(url) {
   	return $.ajax({type: "GET", url: url, async: true}).responseText;
}
function get(url, funct) {
   	funct($.ajax({type: "GET", url: url, async: true}).responseText);
}
function addTo(name, msg){
	$(name).html($(name).text()+msg);
}
function addToWithReturn(name, msg){
	$(name).html($(name).html()+msg+"\n<br>\n");
}
function include(name){
	$("div."+name).html(get("/"+name+".html"));
}
