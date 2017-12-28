




	var seconds;
	var minutes;
	var outputSeconds;
	var outputMinutes;
	var progressBarMinutes;
	var progressBarSeconds;
	var progressBarPosition;
	var sessionProgress;
	var breakMinutes;
	var timerInSession;



function initialise()
{


seconds = 0;
minutes = 25;
outputSeconds = "";
outputMinutes = "";
progressBarMinutes = minutes;
progressBarSeconds = 59;
progressBarPosition = 100;
sessionProgress = 0;
breakMinutes = 5;
timerInSession = false;

	document.getElementById("session_length").innerHTML = minutes;
	document.getElementById("break_length").innerHTML = breakMinutes;
	document.getElementById("timer").innerHTML = minutes + ":" + seconds + "0";

	document.getElementById("minus_session").addEventListener("click", changeMinutes, false);
	document.getElementById("plus_session").addEventListener("click", changeMinutes, false);
	document.getElementById("minus_break").addEventListener("click", setBreak, false);
	document.getElementById("plus_break").addEventListener("click", setBreak, false);
	document.getElementById("start").addEventListener("click", moveBarSession, false);
	document.getElementById("reset").addEventListener("click", reset, false);
}





function changeMinutes()
{
	if(minutes > 0 && minutes <= 44 && timerInSession === false)
	{
		(this.id === "plus_session") ? minutes = minutes + 1 : minutes = minutes - 1;
		progressBarMinutes = minutes;
		seconds = 0;
		document.getElementById("session_length").innerHTML = minutes;
		document.getElementById("timer").innerHTML = (minutes < 10) ? "0" + minutes + ":" + seconds + "0": minutes + ":" + seconds + "0";		
	}

	else if (minutes === 0 && timerInSession === false)
	{
		(this.id === "plus_session") ? minutes = minutes + 1 : "";
		progressBarMinutes = minutes;
		seconds = 0;
		document.getElementById("session_length").innerHTML = minutes;			
		document.getElementById("timer").innerHTML = "0" + minutes + ":" + seconds + "0";		

	}

}


function setBreak()
{
	if(breakMinutes <= 14 && breakMinutes > 0 && timerInSession === false)
	{
	(this.id === "plus_break") ? breakMinutes++ : breakMinutes--;
	document.getElementById("break_length").innerHTML = breakMinutes;
	}

	else if(breakMinutes === 0 && timerInSession === false)
	{
	(this.id === "plus_break") ? breakMinutes++ : "";
	document.getElementById("break_length").innerHTML = breakMinutes;
	}
}


function timer()
{

startClock = true;
timerInSession = true;
outputSeconds = (seconds < 10) ? "0" + seconds : seconds;
outputMinutes = (minutes < 10) ? "0" + minutes : minutes;
document.getElementById("timer").innerHTML = outputMinutes + ":" + outputSeconds;


if(minutes > 0 || seconds > 0)
{


if (seconds > 0)
{
	seconds--;

}

else if(seconds === 0)
{
	seconds = 59;
	minutes--
	sessionProgress++;
}

	setTimeout(timer, 1000);
}


}








function moveBarSession()

{
timer();
document.getElementById("start").removeEventListener("click", moveBarSession, false);

var progressBar = document.querySelector(".progress-bar");
var i=0;
incrementBar();

function incrementBar()
{

	if(progressBarPosition > i)
	{
		progressBar.style.width = i + "%";
		i++;

		if(i === 25)
		{
			document.querySelector(".timer_box_outer").style.borderColor = "#f39c12";
			document.querySelector(".timer_box_outer").style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #f39c12, 0 0 30px #f39c12, 0 0 40px #f39c12, 0 0 55px #f39c12, 0 0 75px #f39c12";
			document.querySelector(".progress-bar").style.backgroundColor = "#f39c12";
			document.querySelector(".timer").style.textShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #f39c12, 0 0 30px #f39c12, 0 0 40px #f39c12, 0 0 55px #f39c12, 0 0 75px #f39c12"; 
			document.querySelector(".timer").style.color = "#f39c12"; 
			document.querySelector(".timer_box_inner").style.color = "#f39c12"; 
			document.querySelector(".bottom_buttons").style.color = "#f39c12"; 
			document.querySelector(".bottom_buttons").style.borderColor = "#f39c12"; 
			document.querySelector(".bottom_buttons_2").style.color = "#f39c12"; 
			document.querySelector(".bottom_buttons_2").style.borderColor = "#f39c12"; 


		}   

		else if(i === 50)
		{
			document.querySelector(".timer_box_outer").style.borderColor = "#e67e22";
			document.querySelector(".timer_box_outer").style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #e67e22, 0 0 30px #e67e22, 0 0 40px #e67e22, 0 0 55px #e67e22, 0 0 75px #e67e22";
			document.querySelector(".progress-bar").style.backgroundColor = "#e67e22";
			document.querySelector(".timer").style.textShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #e67e22, 0 0 30px #e67e22, 0 0 40px #e67e22, 0 0 55px #e67e22, 0 0 75px #e67e22"; 
			document.querySelector(".timer").style.color = "#e67e22"; 
			document.querySelector(".timer_box_inner").style.color = "#e67e22"; 
			document.querySelector(".bottom_buttons").style.color = "#e67e22"; 
			document.querySelector(".bottom_buttons").style.borderColor = "#e67e22"; 
			document.querySelector(".bottom_buttons_2").style.color = "#e67e22"; 
			document.querySelector(".bottom_buttons_2").style.borderColor = "#e67e22"; 

		} 

		else if(i === 75)
		{
			document.querySelector(".timer_box_outer").style.borderColor = "#d35400";
			document.querySelector(".timer_box_outer").style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #d35400, 0 0 30px #d35400, 0 0 40px #d35400, 0 0 55px #d35400, 0 0 75px #d35400";
			document.querySelector(".progress-bar").style.backgroundColor = "#d35400";
			document.querySelector(".timer").style.textShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #d35400, 0 0 30px #d35400, 0 0 40px #d35400, 0 0 55px #d35400, 0 0 75px #d35400"; 
			document.querySelector(".timer").style.color = "#d35400"; 
			document.querySelector(".timer_box_inner").style.color = "#d35400"; 
			document.querySelector(".bottom_buttons").style.color = "#d35400"; 
			document.querySelector(".bottom_buttons").style.borderColor = "#d35400"; 
			document.querySelector(".bottom_buttons_2").style.color = "#d35400"; 
			document.querySelector(".bottom_buttons_2").style.borderColor = "#d35400"; 

		}

	setTimeout(incrementBar,(progressBarMinutes * progressBarSeconds)/100 * 1000);
	}
	

	else 
	{
		minutes = breakMinutes;
		progressBarMinutes = breakMinutes;
		moveBarBreak();
	}
	
}


}





function moveBarBreak()
{

var progressBar = document.querySelector(".progress-bar");
var j=100;
progressBarPosition = 0;

decrementBar();
	function decrementBar()
	{

	if(progressBarPosition < j)
	{
		progressBar.style.width = j + "%";
		j--;


		if(j === 100)
		{
			document.querySelector(".timer_box_outer").style.borderColor = "#f39c12";
			document.querySelector(".timer_box_outer").style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #f39c12, 0 0 30px #f39c12, 0 0 40px #f39c12, 0 0 55px #f39c12, 0 0 75px #f39c12";
			document.querySelector(".progress-bar").style.backgroundColor = "#f39c12";
			document.querySelector(".timer").style.textShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #f39c12, 0 0 30px #f39c12, 0 0 40px #f39c12, 0 0 55px #f39c12, 0 0 75px #f39c12"; 
			document.querySelector(".timer").style.color = "#f39c12"; 
			document.querySelector(".timer_box_inner").style.color = "#f39c12"; 
			document.querySelector(".bottom_buttons").style.color = "#f39c12"; 
			document.querySelector(".bottom_buttons").style.borderColor = "#f39c12"; 
			document.querySelector(".bottom_buttons_2").style.color = "#f39c12"; 
			document.querySelector(".bottom_buttons_2").style.borderColor = "#f39c12"; 

		}   


	else if(j === 75)
		{
			document.querySelector(".timer_box_outer").style.borderColor = "#d35400";
			document.querySelector(".timer_box_outer").style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #d35400, 0 0 30px #d35400, 0 0 40px #d35400, 0 0 55px #d35400, 0 0 75px #d35400";
			document.querySelector(".progress-bar").style.backgroundColor = "#d35400";
			document.querySelector(".timer").style.textShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #d35400, 0 0 30px #d35400, 0 0 40px #d35400, 0 0 55px #d35400, 0 0 75px #d35400"; 
			document.querySelector(".timer").style.color = "#d35400"; 
			document.querySelector(".timer_box_inner").style.color = "#d35400"; 
			document.querySelector(".bottom_buttons").style.color = "#d35400"; 
			document.querySelector(".bottom_buttons").style.borderColor = "#d35400"; 
			document.querySelector(".bottom_buttons_2").style.color = "#d35400"; 
			document.querySelector(".bottom_buttons_2").style.borderColor = "#d35400"; 

		}

		else if(j === 50)
		{
			document.querySelector(".timer_box_outer").style.borderColor = "#e67e22";
			document.querySelector(".timer_box_outer").style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #e67e22, 0 0 30px #e67e22, 0 0 40px #e67e22, 0 0 55px #e67e22, 0 0 75px #e67e22";
			document.querySelector(".progress-bar").style.backgroundColor = "#e67e22";
			document.querySelector(".timer").style.textShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #e67e22, 0 0 30px #e67e22, 0 0 40px #e67e22, 0 0 55px #e67e22, 0 0 75px #e67e22"; 
			document.querySelector(".timer").style.color = "#e67e22"; 
			document.querySelector(".timer_box_inner").style.color = "#e67e22"; 
			document.querySelector(".bottom_buttons").style.color = "#e67e22"; 
			document.querySelector(".bottom_buttons").style.borderColor = "#e67e22"; 
			document.querySelector(".bottom_buttons_2").style.color = "#e67e22"; 
			document.querySelector(".bottom_buttons_2").style.borderColor = "#e67e22"; 

		} 

		

		else if(j === 25)
		{
			document.querySelector(".timer_box_outer").style.borderColor = "#f1c40f";
			document.querySelector(".timer_box_outer").style.boxShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #f1c40f, 0 0 30px #f1c40f, 0 0 40px #f1c40f, 0 0 55px #f1c40f, 0 0 75px #f1c40f";
			document.querySelector(".progress-bar").style.backgroundColor = "#f1c40f";
			document.querySelector(".timer").style.textShadow = "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #f1c40f, 0 0 30px #f1c40f, 0 0 40px #f1c40f, 0 0 55px #f1c40f, 0 0 75px #f1c40f"; 
			document.querySelector(".timer").style.color = "#f1c40f"; 
			document.querySelector(".timer_box_inner").style.color = "#f1c40f"; 
			document.querySelector(".bottom_buttons").style.color = "#f1c40f"; 
			document.querySelector(".bottom_buttons").style.borderColor = "#f1c40f"; 
			document.querySelector(".bottom_buttons_2").style.color = "#f1c40f"; 
			document.querySelector(".bottom_buttons_2").style.borderColor = "#f1c40f"; 

		}
	}

 setTimeout(decrementBar,(progressBarMinutes * progressBarSeconds)/100 * 1000);

	}
	
}




function reset()
{
	window.location.reload(false);
}
