const BasketService = require('./../application/basket.usecase')


const create = (req, res, next) => {
  const newBasket = BasketService.create(req.body)
  return res.json(newBasket)
}

const getAll = (req, res, next) => {
  const baskets = BasketService.getAll()
  return res.json(baskets)
}

const get = (req, res, next) => {
  return res.json({})
}

const update = (req, res, next) => {
  return res.json({})
}

const remove = (req, res, next) => {
  return res.json({})
}

const addProduct = (req, res, next) => {
  return res.json({})
}

module.exports = {
  get,
  create,
  update,
  remove,
  addProduct,
  getAll
}