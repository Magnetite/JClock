 
var changed = [];  //<= Shows what number changes (patterns) where made, so only effected divs opacity is resetted
intPat = [ 
[0x00,0x01,0x02,0x03,0x04,0x05,0x06,0x16,0x26,0x25,0x24,0x23,0x22,0x21,0x20,0x10],
[0x20,0x21,0x22,0x23,0x24,0x25,0x26],
[0x00,0x10,0x20,0x21,0x22,0x23,0x13,0x03,0x04,0x05,0x06,0x16,0x26],  
[0x00,0x10,0x20,0x21,0x22,0x23,0x13,0x03,0x24,0x25,0x26,0x16,0x06],
[0x00,0x01,0x02,0x03,0x13,0x23,0x22,0x21,0x20,0x24,0x25,0x26],
[0x00,0x10,0x20,0x01,0x02,0x03,0x13,0x23,0x24,0x25,0x26,0x16,0x06],  
[0x00,0x10,0x20,0x01,0x02,0x03,0x04,0x05,0x06,0x16,0x26,0x25,0x24,0x23,0x13],
[0x00,0x10,0x20,0x21,0x22,0x23,0x24,0x25,0x26],
[0x00,0x10,0x20,0x01,0x02,0x03,0x04,0x05,0x06,0x16,0x21,0x22,0x23,0x24,0x25,0x26,0x13],  
[0x00,0x10,0x20,0x21,0x22,0x23,0x13,0x03,0x02,0x01,0x24,0x25,0x26,0x16,0x06] 
];  //<= todo fill array with arrays of hexadecimal values that correspond to div ids 



function arrTime(){

var d = Date();

var ta = d.split(" ")[4].split(":").join("").split(""); // makes an array of single digit strings

// Get rid of the seconds for now
ta.pop();
ta.pop();


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

//Resets the digits back to the default opacity
function digitCleaner(n){
	var cleanArr = intPat[8]; //<= selects the number 8 pattern, which is used also for resetting
	var tm = "";
	
	//Digit cleaner below
for (var j = 0, len = cleanArr.length; j < len; j++){

	
	
	tm = cleanArr[j];
	tm += (0x40 * n);  //<= testing...
	if (tm.toString(16).length === 1){
		tm = "0" + tm;
	}
	
	

	document.getElementById("d" + tm.toString(16) ).style.opacity = "0.9";
 }
	
	
}

function buildNumeral(m, n){



//todo complete this code!  
var subArr = intPat[ parseInt(m) ];  //<= selects numeral pattern to display

var tmp, tmpArr = subArr;



digitCleaner(n); 





for (var i = 0, len = subArr.length; i < len; i++){

	
	
	tmp = tmpArr[i];
	tmp += (0x40 * n);  //<= testing...
	if (tmp.toString(16).length === 1){
		tmp = "0" + tmp;
	}
	
	

	document.getElementById("d" + tmp.toString(16) ).style.opacity = "0";
 }
	
	return;
}

function sayTime(){

    var t = arrTime();
	
	
	t.forEach( function(cur, ind){ 
	
		if (t.length === 3){
			ind++;
			digitCleaner(0);  //todo Replace this line?
		}
	buildNumeral(cur, ind);  
	});
	
	
	
	
	
	setTimeout(sayTime, 30000);
}

//makes sure the time on the clock changes when the minutes change on clients host machine
function minuteSync(){
	
	//var seconds = parseInt( Date().split(" ")[4].split(":")[2] );  //gets seconds as an int value
	var seconds = new Date().getTime() % 60000;
	
	if (seconds === 0){
		setTimeout(sayTime, 60000);
	} else {
		setTimeout(minuteSync, 60000 - (seconds) );
		sayTime();
	}

}



window.onload = minuteSync;  
