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
    let restore_list = JSON.parse(localStorage.getItem(this.lsname))
    // console.log(restore_list)
    if (restore_list != null) {
      for (let vals of restore_list) {
        console.log("Values:", vals)
        let item = new Item(vals._name, vals._store, vals._section, 
                            vals._qty, vals._price, vals._priority)
        model.addItem(item)
      }
    }
  }

  saveAll(slist) {
    // console.log("saveAll check:", slist)
    let ls_list = JSON.stringify(slist._itemList)
    // console.log(ls_list)
    localStorage.setItem(this.lsname, ls_list)
    // console.log(localStorage.getItem(this.lsname))
  }
}
