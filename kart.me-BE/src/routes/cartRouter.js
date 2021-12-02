const router = require('express').Router({ mergeParams: true });
const userFormDataValidator = require('../middlewares/userFromDataValidator');

const {
    getAllUserOrders,
    createCartProduct,
    getCartProduct,
    addToCart,
    removeFromCart,
    updateUser,
    createOrder,
} = require('../controllers/cartControllers');

router.route('/').get(getAllUserOrders);
router.route('/add-to-cart').post(addToCart);
router.route('/remove-product').patch(removeFromCart);
router.patch('/update-user', userFormDataValidator, updateUser);
router.route('/create-order').patch(createOrder);
router.route('/:id').get(getCartProduct);

module.exports = router;
