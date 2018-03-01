// JavaScript for Shopping App
// Author: Kari Hoff
// Class: CS330

"use strict"

// On 'add' button press: add item to shoppingList's itemList
let stores = ["Dragonfly",  "Fareway", "Fleet Farm", "Walmart"]
// Dictionary *should* allow for association of specific sections for stores
let sections = {"Dragonfly":["Fiction", "Nonfiction"],
				"Fareway":["Produce", "Meat", "Frozen"],
				"Fleet Farm":["Housewares", "Clothing", "Pets"],
				"Walmart":["Electronics", "Pharmacy", "Food"]}

let itemNum = 1;

function addItem() {
	let product = document.querySelector("#productName");
	let store = document.querySelector("#store");
	let section = document.querySelector("#section");
	let qty = document.querySelector("#qty");
	let price = document.querySelector("#price");
	let priority = document.querySelector("#priority");

	// get priority to change the color of the row

	console.log(priority.value);

	let info = [product, qty, store, section, price]
	let list = document.getElementById("itemList")

	//enter a new row with the information provided (get from form)
	let div = document.createElement("div")
	let row = document.createElement("tr");
	row.id = ("row" + itemNum);

	let checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	let cell = document.createElement("td");
	cell.appendChild(checkBox);
	row.appendChild(cell);
	div.appendChild(row);
	list.appendChild(div);

	if (priority.value == "low") {
		div.class = "p-3 mb-2 bg-success text-white";
	} else if (priority.value == "medium") {
		div.class = "p-3 mb-2 bg-warning text-dark";
	} else {
		div.class = "p-3 mb-2 bg-danger text-white";
	}

	for (let item of info) {
		let cell = document.createElement("td");
		cell.id = (item.id + itemNum);
		cell.innerHTML = item.value;
		row.appendChild(cell);
		list.appendChild(row);
		item.value="";
	}

	itemNum++;

}


// Checked item should change text in some way; color, strikethrough, other?


// Model-View-Controller Classes

// Retrieve an item based on id
function item(id) {
	let item = document.querySelector("#" + id);
	return item;
}

// Retrieve a list item (product & info)
function list(rowNum) {
	let rowCall = document.querySelector("#row"+rowNum)
	console.log(rowCall)

	let product = document.querySelector("#productName"+rowNum);
	console.log(product)
	console.log(product.innerHTML)
	let store = document.querySelector("#store"+rowNum);
	console.log(store)
	console.log(store.innerHTML)
	let section = document.querySelector("#section"+rowNum);
	console.log(section)
	console.log(section.innerHTML)
	let qty = document.querySelector("#qty"+rowNum);
	console.log(qty)
	console.log(qty.innerHTML)
	let price = document.querySelector("#price"+rowNum);
	console.log(price)
	console.log(price.innerHTML)

	let item = [product.innerHTML, qty.innerHTML, store.innerHTML, section.innerHTML, price.innerHTML];

	return item;
}