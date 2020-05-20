
let color = 1;
let id = 0;
	but.onclick = function addNote() {
	let inpVal = document.getElementById("input").value; 
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

		del.setAttribute("onclick", "this.parentNode.parentNode.remove()");

		let submit = document.createElement("button");
		submit.setAttribute("onclick", 'style="background-color: #00ff43"');
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
		
		del.setAttribute("id", String(id));
		id++;
	}	
}
document.getElementById("input").addEventListener("keydown", function enter (e) {
	if (e.keyCode === 13) {
		document.getElementById("but").click();
	}
});


