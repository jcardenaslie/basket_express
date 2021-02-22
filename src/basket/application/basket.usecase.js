const Basket = require("./../domain/basket.model")
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

const get = (id) => {
  return {}
}

const update = (basket) => {
  return {}
}

const remove = (id) => {
  return {}
}

const addProduct = (basketId, product) => {
  return {}
}

module.exports = {
  get,
  getAll,
  create,
  update,
  remove,
  addProduct
}