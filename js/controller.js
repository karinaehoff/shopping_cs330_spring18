// JavaScript for Shopping App
// Author: Kari Hoff
// Class: CS330
// Purpose: Controller portion of MVC (create items from Model)

"use strict"

var testItem = new Item();

// Global Instance of Shopping List
var shoppingModel = new ShoppingList();

// Create View object (subscribes to shoppingList)
// var view = new Subject(list);
var view = new ShoppingView(list);

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
	shoppingModel.addItem(newItem);

}

// add a strikethrough option when the checkbox is clicked for a row
function checkedOff(element) {
	let parent = element.parentElement
	parent.nodeName

	//Checked for 
	// https://stackoverflow.com/questions/22916038/strikethrough-table-and-or-div
	if (element.checked) {
		parent.class = "strikethrough"
	} else {
		parent.class = "";
	}
	

	// Refer to view.js for this?
	// I created a function there to handle this, but I'm not sure about placement tbh

}