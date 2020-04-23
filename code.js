window.onload=init;

function init() {
	var map=document.getElementById("map");
	map.onmousemove=showCoordinates;

}

function showCoordinates(eventObj) {
	var map=document.getElementById("coords");
    var x=eventObj.clientX;
    var y=eventObj.clientY;

	map.innerHTML="Map Coordinates: "+x+", "+y;
}