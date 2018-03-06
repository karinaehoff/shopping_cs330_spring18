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

module.exports = ViewThing;

// Display HTML
//  1. Erase Table
//  2. Redraw from scratch

function preMVCupdateList() {
	
	let list = document.getElementById("itemList")

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
		div.style.backgroundColor = "green";
	} else if (priority.value == "medium") {
		div.style.backgroundColor = "yellow";
	} else {
		div.style.backgroundColor = "red";
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

class ShoppingView {
	constructor(model) {
		// The bind() method creates a new function
		model.subscribe(this.redrawList.bind(this))
	}

	redrawList(shoppingList, msg) {
		let tbl = document.getElementById("shoppingList")
		tbl.innerHTML = ""
		for (let item of shoppingList.newItems) {
			this.addRow(item, tbl)
		}
	}

	// At least a redrawTable callback function for when the shopping list changes
	redrawTable(items){
		let rowCount = 0;

		let table = document.getElementById("itemList");
		let newRow = document.createElement("tr");

		for (let item in items) {
			checkBox = document.createElement("input")
			checkbox.type = "checkbox"
			checkbox.onclick = somefunction; //No parentheses
			newRow.appendChild(checkbox)
			for (let info in item) {
				newCell = document.createElement("td")
				newCell.innerHTML = info;
				newRow.appendChild(newCell)
				
				// Changing Color of Each Item
				//newRow.style.backgroundColor = item's priority
			}
			
		}

		table.appendChild(newRow)
		rowCount++;
	}
}

// Checked item should change to strikethrough
function checked() {

}

// then disappear after a few seconds