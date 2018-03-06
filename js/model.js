// JavaScript for Shopping App
// Author: Kari Hoff
// Class: CS330
// Purpose: Model portion of MVC

"use strict"

class Item {
	constructor(self, name, store, section, qty, price, priority) {
		this.name = name;
		this.store = store;
		this.section = section;
		this.qty = qty;
		this.price = price;
		this.priority = priority;

		this._purchased = false;
	}

	get name() {
		return this.name;
	}

	set name(n) {
		this.name = n;
	}

	get store() {
		return this.store;
	}

	set store(s) {
		this.store = s;
	}

	get section() {
		return this.section;
	}

	set section(s) {
		this.section = s;
	}

	get qty() {
		return this.qty;
	}

	set qty(q) {
		this.qty = q;
	}

	get price() {
		return this.price;
	}

	set price(p) {
		this.price = p;
	}

	get priority() {
		return this.priority;
	}

	set priority(p) {
		this.priority = p;
	}

	get purchased() {
		return this._purchased;
	}

	set purchased(nv) {
		this._purchased = nv;
		alert(`${this.name} was purchased`)
	}
}

class ShoppingList extends Subject {
	constructor() {
		super()
		this.newItems = [];
		this.oldItems = [];
		this.itemList = array;
	}

	get itemList() {
		return this.itemList;
	}

	set itemList(array) {
		this.itemList = array;
	}

	addItem(item) {
		this.itemList.push(item);
		//call publish?
		this.publish('newitem', this)
	}

	removeItem(item) {
		for (let thing in this.itemList) {
			if (thing == item) {
				index = thing.index
			}
		}
		this.itemList.splice(index, 1);
	}
}

class Subject {

	constructor() {
		// Handlers are functions that we want to call
		this.handlers = []
	}

	subscribe(fn) {
		// Add functions to the Array
		this.handlers.push(fn);
	}

	unsubscribe(fn) {
		this.handlers = this.handlers.filter(
			function(item) {
				if (item !== fn) {
					return item;
				}
			}
		);
	}

	// Executes Subject's Functions
	publish(msg, someobj) {
		var scope = someobj || window;
		for (let fn of this.handlers) {
			fn(scope, msg)
		}
	}
}