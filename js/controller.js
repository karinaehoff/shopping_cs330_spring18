// JavaScript for Shopping App
// Author: Kari Hoff
// Class: CS330
// Purpose: Controller portion of MVC (create items from Model)

"use strict"

// Global Instance of Shopping List
var shoppingModel = new ShoppingList([]);

// Create View object (subscribes to shoppingList)
var view = new ShoppingView(shoppingModel);

var stores = ["Dragonfly",  "Fareway", "Fleet Farm", "Walmart"]

var sections = {"Dragonfly":["Fiction", "Nonfiction"],
				"Fareway":["Produce", "Meat", "Frozen"],
				"Fleet Farm":["Housewares", "Clothing", "Pets"],
				"Walmart":["Electronics", "Pharmacy", "Food"]}

let itemNum = 1;

// Called when add button is clicked
function clickedOn() {

	// Dr. Miller's (Much Cleaner) Approach
	// let rolColIds = ["product", "store", "section", "qty", "price", "priority"]
	// let vals = {}
	// for (let cId in rowColIds) {
	// 	vals[cId] = document.getElementById(cId).value
	// }

	// Elements
	let product = document.getElementById("productName")
	let store = document.getElementById("store")
	let section = document.getElementById("section")
	let qty = document.getElementById("qty")
	let price = document.getElementById("price")
	let priority = document.getElementById("priority")

	// Values
	let productVal = document.getElementById("productName").value
	let storeVal = document.getElementById("store").value
	let sectionVal = document.getElementById("section").value
	let qtyVal = document.getElementById("qty").value
	let priceVal = document.getElementById("price").value
	let priorityVal = document.getElementById("priority").value

	// Create new item
	let newItem = new Item(self, productVal, storeVal, sectionVal, qtyVal, priceVal, priorityVal);

	// Call shoppingList addItem method & clear input fields
	shoppingModel.addItem(newItem);
	for (let ref of [product, store, section, qty, price, priority]) {
		ref.value = ""
	}

}

function displayStores() {
	let selectTag = document.getElementById("store")
	for (let store of stores) {
		let option = document.createElement("option")
		option.value = store
		option.innerHTML = store
		selectTag.appendChild(option)
	}
}

// Add selection creator (changes sections depending on the store)
function displaySections() {
	let storeSelect = document.getElementById("store")
	let store = storeSelect.value
	let sectionList = sections[store]

	let sectionSelect = document.getElementById("section")
	sectionSelect.innerHTML = ""

	for (let section of sectionList) {
		let option = document.createElement("option")
		option.value = section
		option.innerHTML = section
		sectionSelect.appendChild(option)
	}
}


// add a strikethrough option when the checkbox is clicked for a row
function checked(row) {
	row.style.
	let parent = element.parentElement
	parent.nodeName

	if (element.checked) {
		parent.class = "strikethrough"
	} else {
		parent.class = "";
	}
	
	
}

// then disappear after a few second
// Use timer to wait a few seconds to do:
//    remove item from shoppingModel
//    view.redrawTable(shoppingModel)