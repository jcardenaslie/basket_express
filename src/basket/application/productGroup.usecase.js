const ProductService = require("./product.usecase")
const ProductGroup = require("./../domain/productGroup.model")

const populate = (itemsGroups) => {
  
  const groups = itemsGroups.map( g => {

    const product = ProductService.getByCode(g.code)
    let group = new ProductGroup(product)

    for (const count in g.quantity) {
      group.addItem(product)
    }

    return group
    
  })

  return groups
}

module.exports = {
  populate
}