
let color = 1;
let noteArray = [];
function delElem (e) {
	e.target.parentNode.parentNode.remove();
	let note = e.target.parentNode.parentNode.innerText.split("");
	note.splice(note.length - 2);
	note = note.join("");
    delete noteArray[noteArray.indexOf(note)];
}


function getColor(e) {
	if (e.target.style.backgroundColor === "rgb(0, 255, 67)") { 
  	e.target.style.backgroundColor = "#a3d3ef";
  } else {
  	e.target.style.backgroundColor = "#00ff43";
  }
}
	but.onclick = function addNote() {
	let inpVal = document.getElementById("input").value; 
	if (noteArray.includes(inpVal)) {
		alert("You`ve already promosed to do that!!!")
	} else {
		noteArray.push(inpVal);
	if (inpVal.length > 23) {
		let x = inpVal;
		inpVal = "";
		for (let i = 0; i < x.length; i++) {
			if (i % 23 === 0 && i !== 0) {
				inpVal += x[i] + "<br>"
			}
				inpVal += x[i];
		}
	}
	if (inpVal === "") {
		alert("your note is apmty");
	} else {
		let note = document.createElement("div");
		if (color > 0) {
		note.setAttribute("class", "ns blue");
		} else {
		note.setAttribute("class", "ns red");
		}
		color *= -1;
		let del = document.createElement("button");	
		// del.addEventListener("click", delElem);
		del.addEventListener("click", delElem);
		let submit = document.createElement("button");
		submit.setAttribute("id", "sub");
		submit.addEventListener("click", getColor);
		submit.style.backgroundColor = "#a3d3ef";
		let butDiv = document.createElement("div");
		butDiv.appendChild(del);
		butDiv.appendChild(submit);
		submit.innerHTML = "V";
		del.innerHTML = "X";
		del.setAttribute("class", "ibx");
		submit.setAttribute("class", "ibv");
		note.innerHTML += inpVal;
	    note.appendChild(butDiv);
		document.getElementById("list").appendChild(note);
		document.getElementById("input").value = "";
	}
	}	
}
document.getElementById("input").addEventListener("keydown", function enter (e) {
	if (e.keyCode === 13) {
		document.getElementById("but").click();
	}
});

