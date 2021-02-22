const Product = require("./product.model")
const ProductGroup = require("./productGroup.model")

class Basket {

  constructor(basket){    
    this.id = basket.id ? basket.id : null
    this.checkoutTotal = 0
    this.items = []
    this.itemsGroups = []
    const items = basket.items ? basket.items.map( i => new Product(i)) : []
    this.setItems(items)
  }

  getItems () {
    return this.items
  }

  setItems (items) { 
    if (!items.length)
      return []
    
    for (const item of items) {
      this.addItem(item)
    }  
  }

  addItem (item) {

    if (this.items.length === 0) {
      this.currency = item.currency
    }

    let group = this.getProductGroup(item)

    if (group === undefined || group === null){
      group = new ProductGroup(item)
      this.itemsGroups.push(group)
    } else {
      group.addItem(item)
    }

    this.updateCheckoutTotal()

  }

  updateCheckoutTotal() {
    let total = 0

    for (const group of this.itemsGroups) {
      total += group.total
    }

    this.checkoutTotal = total
  }

  getCheckoutTotal() {
    return this.currency.formatPrice(this.checkoutTotal)
  }

  getProductGroup (item) {
    let group = this.itemsGroups.find( g => g.code === item.code)
    return group
  }

  asJSON () {
    let object =  {
      items: this.getItems(),
      checkoutTotal: this.checkoutTotal
    }

    if (this.id) {
      Object.assign(object, {id: this.id})
    }

    return object
  }
}

module.exports = Basket