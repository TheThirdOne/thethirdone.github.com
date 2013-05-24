function get(url) {
   	return $.ajax({type: "GET", url: url, async: false}).responseText;
}
function addTo(name, msg){
	$(name).html($(name).text()+msg);
}
function addToWithReturn(name, msg){
	$(name).html($(name).html()+msg+"\n<br>\n");
}