const Cart = require('../models/cartModel');

const getAllCartProducts = (req, res) => {
    Cart.find({})
        .exec()
        .then((results) => {
            results.length
                ? res.status(200).json({
                      status: 'Success',
                      message: 'Sending all CART products!',
                      data: results,
                  })
                : res.status(200).json({
                      status: 'Success',
                      message: 'Uh Oh, User Cart is currently Empty!',
                  });
        })
        .catch((error) => res.status(500).send(error));
};

const getCartProduct = (req, res) => {
    Cart.findOne({ _id: req.params.id })
        .exec()
        .then((result) => {
            res.status(200).json({
                status: 'Success',
                message: 'Sending CART product!',
                data: result,
            });
        })
        .catch((error) =>
            res.status(500).json({ error: 'No such Product exists!' })
        );
};

const createCartProduct = (req, res) => {
    const newProduct = new Cart(req.body);
    newProduct
        .save()
        .then((result) => {
            res.status(201).json({
                status: 'Success',
                message: 'Product successfully saved to Cart',
                data: newProduct,
                url: `/api/v1/user/cart/${newProduct._id}`,
            });
        })
        .catch((error) => res.status(500).send(error));
};

const addToCart = async (req, res) => {
    try {
        const payload = req.body;
        const cartId = payload.cartId;
        delete payload.cartId;
        let cart = await Cart.findOne({
            _id: cartId,
        }).exec();
        if (!cart) {
            cart = new Cart({ items: [payload] });
            await cart.save().then((x) => {
                cart = x;
            });
        } else {
            let itemIndex = cart.items.findIndex(
                (x) => x.productId == payload.productId
            );
            if (itemIndex != -1) {
                cart.items[itemIndex].quantity += 1;
            } else {
                cart.items.push(payload);
            }
            await Cart.updateOne(
                {
                    _id: cart._id,
                },
                {
                    $set: {
                        items: cart.items,
                    },
                }
            );
        }
        res.status(201).json({
            status: 'Success',
            message: 'Product successfully saved to Cart',
            data: cart,
            url: `/api/v1/user/cart/${cart._id}`,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: error.message,
            data: {},
            url: '',
        });
    }
};

const removeFromCart = async (req, res) => {
    try {
        const payload = req.body;
        const cartId = payload.cartId;
        const productId = payload.productId;
        let cart = await Cart.findOne({
            _id: cartId,
        }).exec();
        if (cart) {
            cart.items = cart.items.filter((x) => x.productId != productId);
            await Cart.updateOne(
                {
                    _id: cart._id,
                },
                {
                    $set: {
                        items: cart.items,
                    },
                }
            );
        } else {
            throw new Error('Cart does not exists');
        }
        res.status(201).json({
            status: 'Success',
            message: 'Product successfully saved to Cart',
            data: cart,
            url: `/api/v1/user/cart/${cart._id}`,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: error.message,
            data: {},
            url: '',
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const payload = req.body;
        const cartId = payload.cartId;
        delete payload.cartId;
        let cart = await Cart.findOne({
            _id: cartId,
        }).exec();
        if (cart) {
            await Cart.updateOne(
                {
                    _id: cart._id,
                },
                {
                    $set: {
                        ...payload,
                    },
                }
            );
        } else {
            throw new Error('Cart does not exists');
        }
        res.status(201).json({
            status: 'Success',
            message: 'Product successfully saved to Cart',
            data: cart,
            url: `/api/v1/user/cart/${cart._id}`,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: error.message,
            data: {},
            url: '',
        });
    }
};

const createOrder = async (req, res) => {
    try {
        const payload = req.body;
        const cartId = payload.cartId;
        let cart = await Cart.findOne({
            _id: cartId,
        }).exec();
        if (cart) {
            await Cart.updateOne(
                {
                    _id: cart._id,
                },
                {
                    $set: {
                        isPurchased: true,
                    },
                }
            );
        } else {
            throw new Error('Cart does not exists');
        }
        res.status(201).json({
            status: 'Success',
            message: 'Product successfully saved to Cart',
            data: cart,
            url: `/api/v1/user/cart/${cart._id}`,
        });
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: error.message,
            data: {},
            url: '',
        });
    }
};

module.exports = {
    getAllCartProducts,
    createCartProduct,
    getCartProduct,
    addToCart,
    removeFromCart,
    updateUser,
    createOrder,
};
