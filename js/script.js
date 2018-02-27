"use strict"

// On 'add' button press: add item to shoppingList's itemList

function addItem() {
	let product = document.querySelector("#productName");
	let store = document.querySelector("#store");
	let section = document.querySelector("#section");
	let qty = document.querySelector("#qty");
	let price = document.querySelector("#price");

	// get priority to change the color of the row

	console.log(priority.value);

	let info = [product, qty, store, section, price]
	let list = document.getElementById("itemList")

	//enter a new row with the information provided (get from form)
	let row = document.createElement("tr");

	let checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	let cell = document.createElement("td");
	cell.appendChild(checkBox);
	row.appendChild(cell);
	list.appendChild(row);

	row.class = priority.value;

	for (let item of info) {
		let cell = document.createElement("td");
		cell.innerHTML = item.value;
		row.appendChild(cell);
		list.appendChild(row);
		item.value="";
	}

}


// Checked item should change text in some way; color, strikethrough, other?