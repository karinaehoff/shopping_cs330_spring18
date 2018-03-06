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

//module.exports = ViewThing;



// Display HTML
//  1. Erase Table
//  2. Redraw from scratch

function preMVCupdateList() {
	
	// console.log(priority.value);
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

class ShoppingView {
	//At least a redrawTable callback function for when the shopping leist changes
	redrawTable(items){

		for (let item in items) {
			
		}
	}
}

// Checked item should change to strikethrough


// then disappear after a few seconds