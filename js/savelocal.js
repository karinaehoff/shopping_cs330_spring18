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
    if (restore_list != null) {
      for (let vals of restore_list) {
        let item = new Item(this, vals._name, vals._store, vals._section,
                            vals._qty, vals._price, vals._priority)
        model.addItem(item)
      }
    }
  }

  saveAll(slist) {
    let ls_list = JSON.stringify(slist._itemList)
    localStorage.setItem(this.lsname, ls_list)
  }
}
