 

var intWords = ["", "one","two","three","four","five","six",'seven','eight','nine','ten','eleven',
'twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];

var tensWords = ['twenty','thirty','fourty','fifty'];


function arrTime(){

var d = Date();

var timeArr = d.split(" ")[4].split(":");

return timeArr;

}

function translate(m, mode){

var w = "";

if (m >= 20 && m < 30){
		w = tensWords[0] + " " + intWords[(m % 10) ];
	} else if (m >= 30 && m < 40){
		w = tensWords[1] + " " + intWords[(m % 10) ];
	} else if (m >= 40 && m < 50){
		w = tensWords[2] + " " + intWords[(m % 10) ];
	} else if (m >= 50){
		w = tensWords[3] + " " + intWords[(m % 10) ];
	} else if (m < 20 && m > 0){
		w = intWords[m];
	} else if (mode === 1) {
		w = "O'Clock";
	} else {
		w = "";
	}
	
	return w;
}

function sayTime(){

    var t = arrTime();
	
	var hour = "", min = "", ampm = "", sec = "";
	
	var h = parseInt(t[0]);
	var m = parseInt(t[1]);
	
    if (h > 12){
        hour = intWords[h - 12];
        ampm = "pm";
    } else if ( h === 0){
		hour = intWords[12];
		ampm = "am";
	} else {
        hour = intWords[h];
        ampm = "am";
    }
	
	min = translate(m, 1);
	sec = translate(t[2], 0);
	
	
	document.getElementById("time").innerHTML = "<h1>" + hour + " " + min + " " + ampm + "</h1>";
	document.getElementById("sec").innerHTML = "<h1>" + sec + "</h1>";
	setTimeout(sayTime, 1000);
}

window.onload = sayTime;
