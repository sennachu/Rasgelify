const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    const { name, amount } = req.body;

    try {
        const newOrder = new Order({
            name,
            amount
        });

        const order = await newOrder.save();
        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ msg: 'Order not found' });
        }
        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.updateOrder = async (req, res) => {
    const { name, amount } = req.body;

    const orderFields = {};
    if (name) orderFields.name = name;
    if (amount) orderFields.amount = amount;

    try {
        let order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ msg: 'Order not found' });

        order = await Order.findByIdAndUpdate(
            req.params.id,
            { $set: orderFields },
            { new: true }
        );

        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Order removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
