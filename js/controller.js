// JavaScript for Shopping App
// Author: Kari Hoff
// Class: CS330
// Purpose: Controller portion of MVC (create items from Model)

"use strict"

var shoppingModel = new ShoppingList([]);
var listSaver = new LocalStorageSaver(shoppingModel, "shoppingList");
var view = new ShoppingView(shoppingModel);

var stores = ["Dragonfly",  "Fareway", "Fleet Farm", "Walmart"]

var sections = {"Dragonfly":["Fiction", "Nonfiction"],
				"Fareway":["Produce", "Meat", "Frozen"],
				"Fleet Farm":["Housewares", "Clothing", "Pets"],
				"Walmart":["Electronics", "Pharmacy", "Food"]}

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

	// Add item to shoppingList
	shoppingModel.addItem(newItem);
	view.redrawTable(shoppingModel)

	// Clear Input Fields
	for (let ref of [product, store, section, qty, price, priority]) {
		ref.value = ""
	}

}

// Called when "Delete List" Button is clicked
function deleteList() {
	// add "Are you sure you want to permanently delete this list?" Alert & Confirm
	shoppingModel._itemList = [];
	localStorage.clear()
	view.redrawTable(shoppingModel)
}

// Called when page is loaded
function displayStores() {
	let selectTag = document.getElementById("store")
	for (let store of stores) {
		let option = document.createElement("option")
		option.value = store
		option.innerHTML = store
		selectTag.appendChild(option)
	}
}

// Called when store is selected
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


// JUNK CODE BELOW -- FIX


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
// Reference w3 schools, can just pull their code, apparently -- might have to
//   make slight modifications
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

// from w3schools -- needs to be further modified, still not correct
function sortTable(n) {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("itemList");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
			// checking for comparision error (1, 10, 5, 6)
			// console.log(x)
      y = rows[i + 1].getElementsByTagName("TD")[n];
			// console.log(y)
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
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

	// console.log(shoppingModel._itemList)
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
