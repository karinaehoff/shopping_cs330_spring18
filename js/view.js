// JavaScript for Shopping App
// Author: Kari Hoff
// Class: CS330
// Purpose: View portion of MVC

"use strict"

// class ViewThing Written & provided by Dr. Miller
// class ViewThing {
// 	constructor(m) {
// 		m.subscribe(this.redrawList)
// 	}
//
// 	redrawList(scope, msg) {
// 		console.log("redrawing")
// 		console.log(scope.volume())
// 	}
// }

class ShoppingView {

	// Refined in class based on Dr. Miller's example
	constructor(model) {
		// The bind() method creates a new function
		model.subscribe(this.redrawTable.bind(this))
	}

	addRow(item, parent) {
		let row = document.createElement("tr")
		row.classList.add("tableRow")
		if (item.priority == "low") {
					row.style.backgroundColor = "#d9f2d9"
				} else if (item.priority == "medium") {
					row.style.backgroundColor = "#f2f2d9"
				} else {
					row.style.backgroundColor = "#f2d9d9"
				}
		let cb = document.createElement("input")
		cb.type = "checkbox"
		cb.value = "unchecked"
		cb.onClick = checked(item)
		row.appendChild(cb)

		for (let val of ['name', 'store', 'section', 'qty', 'price']) {
			let td = document.createElement("td")
			td.innerHTML = item[val]
			row.appendChild(td)
		}
		console.log(item)
		if (item._purchased) {
			console.log(item._purchased)
			row.style.backgroundColor = "gray"
		}
		parent.appendChild(row)
	}

	// RedrawTable callback function for when the shopping list changes
	redrawTable(shoppingList){

		let tableBody = document.getElementById("listPlacement");
		tableBody.innerHTML = ""
		// console.log(tableBody)

		// console.log("ListSaver:",listSaver)
		// this.addRow()
		// for (let item of shoppingList._itemList) { // WRONG
		// 	this.addRow(item, tableBody)

		// for (let item of items.newItems) {
		//
		// 	let newRow = document.createElement("tr");
		// 	let checkbox = document.createElement("input")
		// 	checkbox.type = "checkbox"
		// 	checkbox.onclick = checked(this, this.parent); // Parentheses or no?
		// 	console.log("Checkbox:", checkbox)
		// 	newRow.appendChild(checkbox)

			// for (let info of [item._name, item._store, item._section, item._qty, item._price]) {
			// 	let newCell = document.createElement("td")
			// 	newCell.innerHTML = info;
			// 	newRow.appendChild(newCell)
			//
			// }

			// tableBody.appendChild(newRow)
		// }

	}
}
