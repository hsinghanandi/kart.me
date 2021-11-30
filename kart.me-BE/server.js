const express = require('express');
const cors = require('cors');

const app = express();

const mongoConnect = require('./src/db/connection.js');
const router = require('./src/routes/index.js');

const port = process.env.PORT || 4000;
mongoConnect.then(() => {
    app.listen(port, () => {
        console.log(`Connected to Cart.me DB & Server running on port ${port}`);
    });
});

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>Cart.me Server Running!</h1>');
});

app.use('/api/v1', router);

app.get('/api/v1', (req, res) => {
    res.send('<h1>This is the Homepage of Cart.me API </h1>');
});
