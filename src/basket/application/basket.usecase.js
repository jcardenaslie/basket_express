const Basket = require("./../domain/basket.model")
const ProductGroupService = require("./productGroup.usecase")
const MockDatabase =  require("./../../mock/database")

const create = (data) => {
  const codeList = data.items.map( i => i.code )
  let products = MockDatabase.products.getByCodeList(codeList)
  data.items = products
  const basket = new Basket(data)
  const newBasket = MockDatabase.baskets.create(basket.asJSON())

  return newBasket 
}

const getAll = ()  => {
  return MockDatabase.baskets.getAll().map( b => new Basket(b))
}

const getById = (id) => {
  const basketData = MockDatabase.baskets.getById(id)
  let itemsGroups = ProductGroupService.populate(basketData.itemsGroups)
  const basket = new Basket(basketData)
  basket.setProductsgroups(itemsGroups)

  return basket
}

const update = (basket) => {
  return {}
}

const remove = (id) => {
  return MockDatabase.baskets.remove(id)
}

const addProduct = (basketId, product) => {
  return {}
}

const getCheckoutTotal = (id) => {
  return getById(id).getCheckoutTotal()
}

module.exports = {
  getById,
  getAll,
  create,
  update,
  remove,
  addProduct,
  getCheckoutTotal
}