    var start = 0;
  document.getElementById('games').onclick = function(event) {
	  console.log(event);

	  
	  if(event.target.className == "game"){
	  	if(start%2==0) {
	  		event.target.innerHTML = "x";
	  	}
	  	else {
	  		event.target.innerHTML = "O";
	  	}
       start++;
       theend()
	  }
	  	
	}
	/*var theenD = document.getElementById("game");
	console.log(theenD)
     */
     var a1 = document.getElementsByClassName("game");
    // console.log(a1);

	function theend() {
		if (a1[0].innerHTML =="x" && a1[1].innerHTML =="x" && a1[2].innerHTML =="x") {
			document.getElementById("gameover").innerHTML = " крестик выграл";
			a1[0].innerHTML =""; a1[1].innerHTML =""; a1[2].innerHTML =""; a1[3].innerHTML =""; a1[4].innerHTML =""; a1[5].innerHTML =""; a1[6].innerHTML =""; a1[7].innerHTML =""; a1[8].innerHTML ="";

		}
				if (a1[3].innerHTML =="x" && a1[4].innerHTML =="x" && a1[5].innerHTML =="x") {
			document.getElementById("gameover").innerHTML = " крестик выграл";
			a1[0].innerHTML =""; a1[1].innerHTML =""; a1[2].innerHTML =""; a1[3].innerHTML =""; a1[4].innerHTML =""; a1[5].innerHTML =""; a1[6].innerHTML =""; a1[7].innerHTML =""; a1[8].innerHTML ="";
		}
				if (a1[6].innerHTML =="x" && a1[7].innerHTML =="x" && a1[8].innerHTML =="x") {
			document.getElementById("gameover").innerHTML = " крестик выграл";
			a1[0].innerHTML =""; a1[1].innerHTML =""; a1[2].innerHTML =""; a1[3].innerHTML =""; a1[4].innerHTML =""; a1[5].innerHTML =""; a1[6].innerHTML =""; a1[7].innerHTML =""; a1[8].innerHTML ="";
		}
				if (a1[0].innerHTML =="x" && a1[4].innerHTML =="x" && a1[8].innerHTML =="x") {
			document.getElementById("gameover").innerHTML = " крестик выграл";
			a1[0].innerHTML =""; a1[1].innerHTML =""; a1[2].innerHTML =""; a1[3].innerHTML =""; a1[4].innerHTML =""; a1[5].innerHTML =""; a1[6].innerHTML =""; a1[7].innerHTML =""; a1[8].innerHTML ="";
		}
				if (a1[2].innerHTML =="x" && a1[4].innerHTML =="x" && a1[6].innerHTML =="x") {
			document.getElementById("gameover").innerHTML = " крестик выграл";
			a1[0].innerHTML =""; a1[1].innerHTML =""; a1[2].innerHTML =""; a1[3].innerHTML =""; a1[4].innerHTML =""; a1[5].innerHTML =""; a1[6].innerHTML =""; a1[7].innerHTML =""; a1[8].innerHTML ="";
		}
				if (a1[2].innerHTML =="x" && a1[5].innerHTML =="x" && a1[8].innerHTML =="x") {
			document.getElementById("gameover").innerHTML = " крестик выграл";
			a1[0].innerHTML =""; a1[1].innerHTML =""; a1[2].innerHTML =""; a1[3].innerHTML =""; a1[4].innerHTML =""; a1[5].innerHTML =""; a1[6].innerHTML =""; a1[7].innerHTML =""; a1[8].innerHTML ="";
		}
				if (a1[0].innerHTML =="x" && a1[3].innerHTML =="x" && a1[6].innerHTML =="x") {
			document.getElementById("gameover").innerHTML = " крестик выграл";
			a1[0].innerHTML =""; a1[1].innerHTML =""; a1[2].innerHTML =""; a1[3].innerHTML =""; a1[4].innerHTML =""; a1[5].innerHTML =""; a1[6].innerHTML =""; a1[7].innerHTML =""; a1[8].innerHTML ="";
		}




				if (a1[0].innerHTML =="O" && a1[1].innerHTML =="O" && a1[2].innerHTML =="O") {
			document.getElementById("gameover").innerHTML = "O выграл";
			a1[0].innerHTML =""; a1[1].innerHTML =""; a1[2].innerHTML =""; a1[3].innerHTML =""; a1[4].innerHTML =""; a1[5].innerHTML =""; a1[6].innerHTML =""; a1[7].innerHTML =""; a1[8].innerHTML ="";
		}
				if (a1[3].innerHTML =="O" && a1[4].innerHTML =="O" && a1[5].innerHTML =="O") {
			document.getElementById("gameover").innerHTML = "O выграл";
			a1[0].innerHTML =""; a1[1].innerHTML =""; a1[2].innerHTML =""; a1[3].innerHTML =""; a1[4].innerHTML =""; a1[5].innerHTML =""; a1[6].innerHTML =""; a1[7].innerHTML =""; a1[8].innerHTML ="";
		}
				if (a1[6].innerHTML =="O" && a1[7].innerHTML =="O" && a1[8].innerHTML =="O") {
			document.getElementById("gameover").innerHTML = "O выграл";
			a1[0].innerHTML =""; a1[1].innerHTML =""; a1[2].innerHTML =""; a1[3].innerHTML =""; a1[4].innerHTML =""; a1[5].innerHTML =""; a1[6].innerHTML =""; a1[7].innerHTML =""; a1[8].innerHTML ="";
		}
				if (a1[0].innerHTML =="O" && a1[4].innerHTML =="O" && a1[8].innerHTML =="O") {
			document.getElementById("gameover").innerHTML = "O выграл";
			a1[0].innerHTML =""; a1[1].innerHTML =""; a1[2].innerHTML =""; a1[3].innerHTML =""; a1[4].innerHTML =""; a1[5].innerHTML =""; a1[6].innerHTML =""; a1[7].innerHTML =""; a1[8].innerHTML ="";
		}
				if (a1[2].innerHTML =="O" && a1[4].innerHTML =="O" && a1[6].innerHTML =="O") {
			document.getElementById("gameover").innerHTML = "O выграл";
			a1[0].innerHTML =""; a1[1].innerHTML =""; a1[2].innerHTML =""; a1[3].innerHTML =""; a1[4].innerHTML =""; a1[5].innerHTML =""; a1[6].innerHTML =""; a1[7].innerHTML =""; a1[8].innerHTML ="";
		}
				if (a1[2].innerHTML =="O" && a1[5].innerHTML =="O" && a1[8].innerHTML =="O") {
			document.getElementById("gameover").innerHTML = "O выграл";
			a1[0].innerHTML =""; a1[1].innerHTML =""; a1[2].innerHTML =""; a1[3].innerHTML =""; a1[4].innerHTML =""; a1[5].innerHTML =""; a1[6].innerHTML =""; a1[7].innerHTML =""; a1[8].innerHTML ="";
		}
				if (a1[0].innerHTML =="O" && a1[3].innerHTML =="O" && a1[6].innerHTML =="O") {
			document.getElementById("gameover").innerHTML = " нолик выграл";
			a1[0].innerHTML =""; a1[1].innerHTML =""; a1[2].innerHTML =""; a1[3].innerHTML =""; a1[4].innerHTML =""; a1[5].innerHTML =""; a1[6].innerHTML =""; a1[7].innerHTML =""; a1[8].innerHTML ="";
		}
	
	}
function obnova(){
		a1[0].innerHTML =""; a1[1].innerHTML =""; a1[2].innerHTML =""; a1[3].innerHTML =""; a1[4].innerHTML =""; a1[5].innerHTML =""; a1[6].innerHTML =""; a1[7].innerHTML =""; a1[8].innerHTML ="";
		document.getElementById("gameover").innerHTML = "";
	}

