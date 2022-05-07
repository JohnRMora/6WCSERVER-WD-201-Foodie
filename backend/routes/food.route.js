const express = require('express');
const router = express.Router();
// model
let CustomerModel = require('../models/Customer');
router.route('/customer').post((req, res, next) => {
  CustomerModel.create(req.body, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
});
router.route('/customer/').get((req, res, next) => {
  CustomerModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
// Update
router.route('/customer/:id').put((req, res, next) => {
  CustomerModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Details successfully updated!')
    }
  })
})
// Delete
router.route('/customer/:id').delete((req, res, next) => {
  CustomerModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

let OrderModel = require('../models/Order');
router.route('/order').post((req, res, next) => {
  let cart = [], cartItems = req.body['cart'], total = 0, customer = req.body['customer']
  for (let i in cartItems) {
    let subTotal = cartItems[i].price * cartItems[i].qty
    cart.push({
      name: cartItems[i].name,
      qty: cartItems[i].qty,
      price: subTotal
    })
    total += subTotal
  }
  let orderData = {
    customer: customer.name,
    phone: customer.phone,
    cart: cart,
    price: total
  }
  OrderModel.create(orderData, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
router.route('/order/:id').get((req, res, next) => {
  OrderModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
    }
  })
 })

let ProductModel = require('../models/Product');
router.route('/products').post((req, res, next) => {
  ProductModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
router.route('/products').get((req, res, next) => {
  ProductModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
// Update
router.route('/products/:id').put((req, res, next) => {
  ProductModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Product successfully updated!')
    }
  })
})
// Delete
router.route('/products/:id').delete((req, res, next) => {
  ProductModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = router;