// JavaScript for Shopping App
// Author: Kari Hoff
// Class: CS330
// Purpose: View portion of MVC

"use strict"

// Written & provided by Dr. Miller
class ViewThing {
	constructor(m) {
		m.subscribe(this.redrawList)
	}

	redrawList(scope, msg) {
		console.log("redrawing")
		console.log(scope.volume())
	}
}

// Display HTML
//  1. Erase Table
//  2. Redraw from scratch

class ShoppingView {

	// ***Class Code from here
	constructor(model) {
		// The bind() method creates a new function
		model.subscribe(this.redrawList.bind(this))
	}

	redrawList(shoppingList, msg) {
		let displayTable = document.getElementById("itemList")
		displayTable.innerHTML = ""
		let head = document.createElement("thead")
		let row = document.createElement("tr")
		let header = document.createElement("th")

		let itemHead = document.createElement("th")
		itemHead.innerHTML = "Item"
		itemHead.scope = "col"

		let qtyHead = document.createElement("th")
		qtyHead.innerHTML = "Quantity"
		qtyHead.scope = "col"

		let storeHead = document.createElement("th")
		storeHead.innerHTML = "Store"
		storeHead.scope = "col"

		let sectionHead = document.createElement("th")
		sectionHead.innerHTML = "Section"
		sectionHead.scope = "col"

		let priceHead = document.createElement("th")
		priceHead.innerHTML = "Price"
		priceHead.scope = "col"

		// This wasn't working correctly...
		// for (let heading of ["Item", "Quantity", "Store", "Section", "Price"]) {
		// 	let headingTitle = document.createElement("th")
		// 	headingTitle.innerHTML = heading
		// 	headingTitle.scope = "col"
		// }
		
		let body = document.createElement("tbody")
		body.id = "listPlacement"
		let footer = document.createElement("tfoot")

		displayTable.appendChild(head)
		head.appendChild(row)
		row.appendChild(header)
		displayTable.appendChild(body)
		displayTable.appendChild(footer)
		console.log(displayTable)

		for (let item of shoppingList._itemList) {
			this.addRow(item, displayTable)
		}
		
	}

	addRow(item, parent) {
		let row = document.createElement("tr")
		row.classList.add(item.priority)
		let cb = document.createElement("input")
		cb.type = "checkbox"
		row.appendChild(cb)

		for (let val of ['name', 'store', 'section', 'qty', 'price']) {
			let td = document.createElement("td")
			td.innerHTML = item[val]
			row.appendChild(td)
		}
		parent.appendChild(row)
	}
	// to here***

	// RedrawTable callback function for when the shopping list changes
	redrawTable(items){
		let rowCount = 0;

		let tableBody = document.getElementById("listPlacement");
		// tableBody.innerHTML = ""
		// console.log(tableBody)


		for (let item of items.newItems) {

			let newRow = document.createElement("tr");
			let checkbox = document.createElement("input")
			checkbox.type = "checkbox"
			checkbox.onclick = checked(); // Parentheses or no?
			newRow.appendChild(checkbox)

			
			for (let info of [item._name, item._store, item._section, item._qty, item._price]) {
				let newCell = document.createElement("td")
				newCell.innerHTML = info;
				newRow.appendChild(newCell)
				
				// Changing Color of Each Item
				//newRow.style.backgroundColor = item.priority
			}
			tableBody.appendChild(newRow)
			owCount++;
		}
		
	}
}


// For Thurs March 8th:

// Checked item should change to strikethrough
function checked() {

	// What Bootstrap element can do this? I haven't been able to find one.
}

// then disappear after a few seconds