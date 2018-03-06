// JavaScript for Shopping App
// Author: Kari Hoff
// Class: CS330
// Purpose: Controller portion of MVC (create items from Model)

"use strict"

var testItem = new Item();
// Global Instance of Shopping List
var list = new ShoppingList();
// Create View object (subscribes to shoppingList)
var view = new Subject(list);

let stores = ["Dragonfly",  "Fareway", "Fleet Farm", "Walmart"]
let sections = {"Dragonfly":["Fiction", "Nonfiction"],
				"Fareway":["Produce", "Meat", "Frozen"],
				"Fleet Farm":["Housewares", "Clothing", "Pets"],
				"Walmart":["Electronics", "Pharmacy", "Food"]}

let itemNum = 1;

// Called when add button is clicked
function clickedOn() {

	let product = document.querySelector("#productName");
	let store = document.querySelector("#store");
	let section = document.querySelector("#section");
	let qty = document.querySelector("#qty");
	let price = document.querySelector("#price");
	let priority = document.querySelector("#priority");

	// Create new item
	//name, store, section, qty, price, priority
	let newItem = new Item(product, store, section, qty, price, priority);
	console.log(newItem)


	// Call shoppingList addItem method
	list.addItem(newItem);

}

// To Do
// get priority to change the color of the row
// add a strikethrough option when the checkbox is clicked for a row



// Retrieve an item based on id
// function item(id) {
// 	let item = document.querySelector("#" + id);
// 	return item;
// }

// Retrieve a list item (product & info)
// function list(rowNum) {
// 	let rowCall = document.querySelector("#row"+rowNum)
// 	console.log(rowCall)

// 	let product = document.querySelector("#productName"+rowNum);
// 	console.log(product)
// 	console.log(product.innerHTML)
// 	let store = document.querySelector("#store"+rowNum);
// 	console.log(store)
// 	console.log(store.innerHTML)
// 	let section = document.querySelector("#section"+rowNum);
// 	console.log(section)
// 	console.log(section.innerHTML)
// 	let qty = document.querySelector("#qty"+rowNum);
// 	console.log(qty)
// 	console.log(qty.innerHTML)
// 	let price = document.querySelector("#price"+rowNum);
// 	console.log(price)
// 	console.log(price.innerHTML)

// 	let item = [product.innerHTML, qty.innerHTML, store.innerHTML, section.innerHTML, price.innerHTML];

// 	return item;
// }