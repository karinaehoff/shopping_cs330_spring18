// JavaScript for Shopping App
// Author: Kari Hoff
// Class: CS330
// Purpose: Model portion of MVC

"use strict"

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

class Item {
	constructor(self, name, store, section, qty, price, priority) {
		
		this._name = name;
		this._store = store;
		this._section = section;
		this._qty = qty;
		this._price = price;
		this._priority = priority;

		this._purchased = false;
	}

	get name() {
		return this._name;
	}

	set name(n) {
		this._name = n;
	}

	get store() {
		return this._store;
	}

	set store(s) {
		this._store = s;
	}

	get section() {
		return this._section;
	}

	set section(s) {
		this._section = s;
	}

	get qty() {
		return this._qty;
	}

	set qty(q) {
		this._qty = q;
	}

	get price() {
		return this._price;
	}

	set price(p) {
		this._price = p;
	}

	get priority() {
		return this._priority;
	}

	set priority(p) {
		this._priority = p;
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