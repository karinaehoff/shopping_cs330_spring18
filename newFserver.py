<script type="text/javascript">
	// https:developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Promise
	consol.log('starting fetch')
	fetch("/getnum")
	.then(function(response) {
	console.log(response) {
	return response.json()
	})
	.catch(error => console.error('Error: ', error))
	.then(function(myJson) {
	document.getElementById("foo").innerHTML = myJson.nnumber;
	console.log('all done')
	})
