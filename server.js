const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const routerProducts = require('./routes/products');
const routerOrder = require('./routes/order');

// App Init
const app = express();
dotenv.config()

//db connection
mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
).then(() => console.log('DB Connected'));

app.use(bodyParser.json());

// Routes
app.use('/api', routerProducts);
app.use('/api', routerOrder);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API is listening on port: ${port}`));