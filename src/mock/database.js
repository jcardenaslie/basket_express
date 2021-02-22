const { v4: uuidv4 } = require('uuid');

const productsData = [
  {
    "code": "PEN",
    "name": "Lan Pen",
    "price": "5.00€",
    "discount": 0.5,
    "discountRule": "two-one-free"
  },
  {
    "code": "TSHIRT",
    "name": "Lan T-Shirt",
    "price": "20.00€",
    "discount": 0.25,
    "discountRule": "threshold",
    "discounThreshold": 3
  },
  {
    "code": "MUG",
    "name": "Lan Coffee Mug",
    "price": "7.50€"
  },
]

const basketsData = []

const products = {
  getByCodeList (codeList) {
    const result = []
    for (const code of codeList) {
      let product = productsData.find( p => p.code === code)
      result.push (product)
    }

    return result
  }
}

const baskets = {
  create (basket) {
    console.log(basket);

    const uuid = uuidv4()
    basket.id = uuid

    basketsData.push(basket)
    
    return basket
  },
  getAll (){
    return basketsData
  }
}

module.exports = {
  baskets,
  products
}