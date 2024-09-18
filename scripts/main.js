let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	let myName = prompt("veuillez saisir votre nom : ");
	localStorage.setItem("nom", myName);
	myHeading.textContent = "Bienvenue chez Chambon et Chambon, " + myName;
	}
	
if(!localStorage.getItem("nom")) {
	setUserName();
	}
	else {
		let storedName = localStorage.getItem("nom");
		myHeading.textContent = "Bienvenue chez Chambon et Chambon, " + storedName;
		}
		
myButton.addEventListener("click", function () {
	setUserName();
	});
