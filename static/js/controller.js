// JavaScript for Shopping App
// Author: Kari Hoff
// Class: CS330
// Purpose: Controller portion of MVC (create items from Model)

"use strict"

var shoppingModel = new ShoppingList([]);
// console.log("Created shoppingModel")
// var listSaver = new LocalStorageSaver(shoppingModel, "shoppingList");
// console.log("Created listSaver")
var dbListSaver = new RemoteStorageSaver(shoppingModel, "shoppingList")
// console.log("Created dbListSaver")
var view = new ShoppingView(shoppingModel);
// console.log("Created view")

var stores = ["Dragonfly",  "Fareway", "Fleet Farm", "Walmart"]

var sections = {"Dragonfly":["Fiction", "Nonfiction"],
				"Fareway":["Produce", "Meat", "Frozen"],
				"Fleet Farm":["Housewares", "Clothing", "Pets"],
				"Walmart":["Electronics", "Pharmacy", "Food"]}

// let itemNum = 1;

// Called when add button is clicked
function clickedOn() {

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
	view.redrawTable(shoppingModel)

	for (let ref of [product, store, section, qty, price, priority]) {
		ref.value = ""
	}

}

function deleteList() {
	shoppingModel = new ShoppingList([]);
	dbListSaver = new saveToDatabase(shoppingModel, "shoppingList")
	view.redrawTable(shoppingModel)
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

// Delete an item & its row if the checkbox is checked
// This has never worked and I'm at a loss to explain why
// function checked(cb, item, row) {
	// if (cb.checked) {
	// 	alert("Box Checked")
	// }
	// console.log(item)
	// Change to rely on the purchased attribute & redraw the table!
	// item._purchased = true
	// setTimeout(disappear(row), 5000)

// }

// function disappear(row) {
// 	shoppingModel.removeItem(row)
// 	view.redrawTable(shoppingModel)
	// row.style.display = "none" //?
// }

// Function for sorting the list by column by clicking on the head
function order(specifier) {
	// console.log(specifier)

	//Put each row in the table body into an array called rows
	// let table = document.getElementById("listPlacement")
	// let rows = document.getElementsByClassName('tableRow');
	// console.log(rows)

	// console.log(specifier)

	// Take ShoppingModel
	let oldItemList = shoppingModel._itemList;
	// let newItemList = oldItemList.sort();
	let newItemList = [];

	// Sort by the specified column
	let columns = {"itemHead":1, "storeHead":2,
					  	  "sectionHead":3, "qtyHead":4, "priceHead":5};
	let index = columns[specifier]
	// console.log(index)

	// previousItem = oldItemList[0];
	// for (let item of oldItemList) {
	//
	// }
	newItemList = oldItemList.sort(function (a, b) {
		if (a[index] < b[index]) {
			return -1;
		}
		if (a[index] > b[index]) {
			return 1;
		}
		return 0;
	})

	// let sortingArray = []
	// let ident2row = {}
	// for (let item of oldItemList) {
	// 	sortingArray.push(item.identifier)
	// 	ident2row[item.identifier] = item
	// }
	// sortingArray.sort()
	// for (let sortedId of sortingArray) {
	// 	newItemList.push(ident2row[sortedId])
	// }

	shoppingModel._itemList = newItemList
	view.redrawTable(shoppingModel)

  // console.log(identifier)
}

function sortPriort() {
	let undefinedPriort = [];
	let lowPriort = [];
	let medPriort = [];
	let highPriort = [];

	for (let item of shoppingModel._itemList) {
		// console.log(item)
		if (item.priority == "low") {
			lowPriort.push(item)
		} else if (item.priority == "medium") {
			medPriort.push(item)
		} else if (item.priority == "high") {
			highPriort.push(item)
		} else {
			undefinedPriort.push(item)
		}
	}

	shoppingModel._itemList = []
	let lists = [highPriort, medPriort, lowPriort, undefinedPriort]
	for (let list of lists) {
		for (let item of list) {
			shoppingModel._itemList.push(item)
		}
	}

	console.log(shoppingModel._itemList)
	view.redrawTable(shoppingModel)
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
