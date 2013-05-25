function get(url) {
   	return $.ajax({type: "GET", url: url, async: false}).responseText;
}
function get(url, funct) {
   	$.ajax({type: "GET", url: url, async: true}).done(funct);
}
function addTo(name, msg){
	$(name).html($(name).text()+msg);
}
function addToWithReturn(name, msg){
	$(name).html($(name).html()+msg+"\n<br>\n");
}
function include(name){
//	$("div."+name).html(get("/"+name+".html"));
	get("/" + name + ".html", function(data){
		$("div."+name).html(data);
	});
}
