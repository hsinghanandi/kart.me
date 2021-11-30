const router = require('express').Router({ mergeParams: true });

const {
    getAllCartProducts,
    createCartProduct,
    getCartProduct,
    addToCart,
    removeFromCart,
    updateUser,
    createOrder
} = require('../controllers/cartControllers');

router.route('/').get(getAllCartProducts).post(createCartProduct);
router.route('/add-to-cart').post(addToCart);
router.route('/remove-product').patch(removeFromCart);
router.route('/update-user').patch(updateUser);
router.route('/create-order').patch(createOrder);
router.route('/:id').get(getCartProduct);

module.exports = router;
