function fun1 () {
	console.log('hello from fun1')
}

function fun2 () {
	console.log('hello from fun2')
}

function fun3 () {
	console.log('hello from fun3')
}

funarray = []
funarray.push(fun1)
funarray.push(fun2)
funarray.push(fun3)

for(let fn of funarray) {
	fn()
}