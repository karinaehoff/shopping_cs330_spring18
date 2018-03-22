"use strict"

class dataBaseStorageSaver {
  constructor(model, listName) {
    console.log("DB Constructor")
    this.lsname = listName;
        let self = this
        model.subscribe(function(savedList, msg) {
          self.saveAll(savedList)
        })
        // restore from dataBaseStorageSaver
        // fetch get
       fetch(`/shoppingList`).then(function(response) {
          console.log(response)
          return response.json()
        })
          .then(function(restore_list) {
            if (restore_list != null) {
              for (let vals of restore_list) {
                let item = new Item(this, vals._name, vals._store, vals._section,
                                    vals._qty, vals._price, vals._priority)
                model.addItem(item)
              }
            }
          })
  }

  saveAll(slist) {
    console.log("saveAll called")
    // localStorage.setItem(this.lsname, ls_list) // change to post
    let config = {};
    config.method = 'POST'

    config.body = JSON.stringify(slist)
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
      console.log("Checkpoint")
    })

  }
}
