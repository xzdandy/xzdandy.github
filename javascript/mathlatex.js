$(document).ready(function() {
	$(".math").each(function(i) {
		$(this).html("<img src = \"http://latex.codecogs.com/png.latex?" + this.innerHTML + "\"/>");
	});
});