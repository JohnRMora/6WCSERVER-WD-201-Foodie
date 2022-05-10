const express = require('express');
const router = express.Router();
// model
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
 router.route('/edit-products/:id').get((req, res, next) => {
  ProductModel.findById(req.params.id, (error, data) => {
   if (error) {
     return next(error)
   } else {
     res.json(data)
   }
 })
})
// Update
router.route('/update-products/:id').put((req, res, next) => {
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
router.route('/delete-products/:id').delete((req, res, next) => {
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