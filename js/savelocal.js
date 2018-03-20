//Written by Dr. Miller

"use strict"
class LocalStorageSaver {
  constructor(model, listName) {
    this.lsname = listName;
    let self = this
    model.subscribe(function(savedList, msg) {
      self.saveAll(savedList)
    })
    // now restore from localStorage
    let restore_list = JSON.parse(localStorage.get)
    for (let vals of restore_list) {
      let item = new Item(vals.name, vals...)
      model.addItem(item)
    }
  }

  saveAll(slist) {
    let ls_list = JSON.stringify(slist.newItems)
    localStorage.setItem(this.lsname, ls_list)
  }
}


//Place elsewhere
var xhtp = new HXMHttpRequest();
//set data parameter
xhttp.onreadystatechange = function() {
  console.log(this.readyState)
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    document.getElementById("").innerHTML = xhttp.responseText;
  }
};
xhttp.open("GET", "filename (ex: /getnum)", true); //true confirms asyncrhronous call
// this will be a post; take the data and send in data block of http protocol
xhttp.send();
// sends request and returns immediately to allow for user interaction with the webpage

var promise1 = new Promise(function(resolve, reject) [
  setTimeout(resolve, 5000, 'foo');
]).then(function() {alert('hello') });
console.log("back from creating a promise")
console.log(promise1);
// expected output: [object Promise]
