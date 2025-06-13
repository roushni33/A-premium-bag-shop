const express = require('express');
const app = express();
const path = require('path');
const db = require('./config/mongoose-connections')
const ownerRouter = require('./routes/ownersRouters')
const userRouter = require('./routes/usersRouters')
const productRouter = require('./routes/productsRouters')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');

app.use('/owners',ownerRouter);
app.use('/users',userRouter);
app.use('/products',productRouter);

app.listen(3000);