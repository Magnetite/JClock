 

var intPat = [];  //<= todo fill array with hexadecimal values that correspond to div ids 


function arrTime(){

var d = Date();

var ta = d.split(" ")[4].split(":").join("").split(""); // makes an array of single digit strings

var h = ta.shift();
h += ta.shift();

var hour = parseInt(h);

if (hour > 12){
	hour -= 12;
} else if (hour === 0){
	hour = 12;
}

return hour.toString().split("").concat(ta);



}

function buildNumeral(m){

var w = "";

//todo code below
	
	return w;
}

function sayTime(){

    var t = arrTime();
	
	var hour = "", min = "", ampm = "", sec = "";
	
	
	
    if (h > 12){
        hour = intPat[h - 12];
        ampm = "pm";
    } else if ( h === 0){
		hour = intPat[12];
		ampm = "am";
	} else {
        hour = intPat[h];
        ampm = "am";
    }
	
	
	
	setTimeout(sayTime, 1000);
}

//window.onload = sayTime;  //<= TODO Uncomment to make work!
