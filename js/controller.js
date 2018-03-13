// JavaScript for Shopping App
// Author: Kari Hoff
// Class: CS330
// Purpose: Controller portion of MVC (create items from Model)

"use strict"

// Global Instance of Shopping List
var shoppingModel = new ShoppingList([]);
localStorage.shoppingModel = shoppingModel;

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
function checked(cb, row) {
	if (cb.checked) {
		alert(cb)
		alert("CHECK!")
		row.style.backgroundColor = "#808080"
		row.style.textD
	} else {
		// alert("element added")
	}
	// setTimeout(disappear(row), 5000)

}

function disappear(row) {
	shoppingModel.removeItem(row)
	view.redrawTable(shoppingModel)
	row.style.display = "none"
}

// Function for sorting the list by column by clicking on the head
function order(element) {
	//Put each row in the table body into an array called rows
	// let table = document.getElementById("listPlacement")
	// let rows = document.getElementsByClassName('tableRow');
	// console.log(rows)

	// console.log(element)
	//
	// // Take ShoppingModel
	let oldItemList = shoppingModel.itemList;
	// let newItemList = [];
	//
	for (let item of oldItemList) {
		console.log(item);
	}

	// // Sort by the specified column
	// let colId2itemAttr = {"itemHead":"name",
	// 				  	  "qtyHead":"qty",
	// 				  	  "storeHead":"store",
	// 				  	  "sectionHead":"section",
	// 				  	  "priceHead":"price"};
  // let identifier = colId2itemAttr[element];
	//
  // console.log(identifier)

	// Redraw Table
	// shoppingModel.itemList(itemList)
}

// Jon Duckett's Method (Reference Book)
// var compare = {
// 	name: function(a,b) {
// 		if (a < b) {
// 			return -1;
// 		} else {
// 			return a > b ? 1 : 0;
// 		}
// 	}
// };

// $('.sortable').each(function() {
// 	var table = $(this);
// 	var $tbody = $table.find('tbody');
// 	var $controls = $table.find('th');
// 	var rows = $tbody.find('tr').toArray();
//
// 	$controls.on('click', function() {
// 		var $header = $(this);
// 		var order = $header.data('sort');
// 		var column;
//
// 		if ($header.is('.ascending') || $header.is('.descending')) {
// 			$header.toggleClass('ascending descending');
// 			$tbody.append(rows.reverse());
// 		} else {
// 			$header.addClass('ascending');
// 			$header.siblings().removeClass('ascending descending');
// 			if (compare.hasOwnProperty(order)) {
// 				column = $controls.index(this);
//
// 				rows.sort(function(a,b) {
// 					a = $(a).find('td').eq(column).text()
// 					b = $(b).find('td').eq(column).text()
// 					return compare[order](a, b);
// 				});
// 			}
// 		}
// 	});
// });
// END of Jon Duckett's Method (Reference Book)
