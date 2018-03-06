// JavaScript for Shopping App
// Author: Kari Hoff
// Class: CS330
// Purpose: Subject portion of Publish/Subscribe

//Written and provided by Dr. Miller
'use strict'
//var ViewThing = require('./view')




// Can Example
// class Can extends Subject {
// 	constructor(h, r) {
// 		super()
// 		this._height = h;
// 		this.radius = r;
// 	}

// 	get radius() {
// 		return this.radius;
// 	}

// 	get height() {
// 		return this._height;
// 	}

// 	set radius(r) {
// 		this.radius = r;
// 	}

// 	set height(h) {
// 		this._height = h;
// 	}

// 	volume() {
// 		return this.radius * this.radius * Math.PI * this._height;
// 	}
// }

// let model = new Can(10,2)

// function ochange(scope, msg) {
// 	console.log(scope)
// 	console.log(scope.volume())
// 	console.log(msg)
// }

// model.subscribe(ochange)

// let vt = new ViewThing(model)

// model.height = 20;
// model.height = 40;
// model.height = 1;

// console.log(JSON.stringify(model))