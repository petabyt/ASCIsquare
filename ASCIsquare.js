// ASCI Square
// Made in Dcoder

var wid = 10;
var hei = 5;

var rts = "";
for (var i = 0; i < wid * 2; i++) {
	rts += "#";
}

console.log(rts);

for (var i = 0; i < hei - 2; i++) {
	var str = "#";
	for (var n = 0; n < wid - 1; n++) {
		str += "  ";
	}
	str += "#";
	console.log(str);
}

console.log(rts);