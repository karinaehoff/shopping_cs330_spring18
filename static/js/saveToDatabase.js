"use strict"

class RemoteStorageSaver {
  constructor(model, listName) {
    this.lsname = listName;
      let self = this
      model.subscribe(function(savedList, msg) {
        self.saveAll(savedList)
      })
      // now restore from dataBaseStorageSaver
      // fetch get
     fetch(`/shoppingList`).then(function(response) {
        console.log(response)
        let returnThing = response.json()
        console.log(returnThing)
        return returnThing
      })
        .then(function(restore_list) {
          console.log("Restore List:", restore_list)
          console.log(typeof restore_list)
          let vari = JSON.parse(restore_list)
          console.log("JSON Type:", typeof vari)
          if (restore_list != null) {
              for (let values of restore_list) {
                // console.log("VALUES:", values)
                // console.log("HANDLERS:", model.handlers)
                let model = new ShoppingList([this, values.oldItems,
                    values.newItems, values._itemList, values.handlers])
                //   console.log("HANDLERS:", model.handlers)
                // console.log("Restored List:", restoredList)
                  for (let vals of restoredList._itemList) {
                    let item = new Item(this, vals._name, vals._store, vals._section,
                                        vals._qty, vals._price, vals._priority)
                    model.addItem(item)
                  }
              }
          }
        }).catch(error => console.error('Error: ', error))
        .then(function(myJson) {
          console.log("Checkpoint for GET --> myJson:", myJson)
        })
  }

  saveAll(slist) {
    // localStorage.setItem(this.lsname, ls_list) // change to post
    let config = {};
    config.method = 'POST'
    let jsonStr = JSON.stringify(slist)
    console.log("JSON:", jsonStr)
    config.body = jsonStr
    config.headers = {'Content-Type': 'application/json',
                      'Accept': 'application/json'}

    // let ls_list = JSON.stringify(slist._itemList) // change to fetch
    fetch(`/saveList`, config)
    .then(function(response){
      console.log(response)
      return response.json()
    })
    .catch(error => console.error('Error: ', error))
    .then(function(myJson) {
      console.log("Checkpoint for POST --> myJson:", myJson)
    })
  }
}
