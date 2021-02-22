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

const basketsData = [{
  "itemsGroups": [
      {
          "code": "PEN",
          "unitPrice": 500,
          "total": 500,
          "discount": {
              "discount": 0.5,
              "unitPrice": 500
          },
          "totalDiscount": 500,
          "discountRule": "two-one-free",
          "quantity": 2
      }
  ],
  "checkoutTotal": 500,
  "id": "a0fbc56d-34a1-4063-b201-97856c757743"
}]

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
  },
  getById(id) {
    return basketsData.find( b => b.id === id)
  }
}

module.exports = {
  baskets,
  products
}