const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const adminProductsRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

var cookieAge = 3600000;  //1 hour in milliseconds
app.use(
  cookieSession({
    name: 'session',
    keys: ['lkasld235j'],
    cookie:
    {
      //secure: true, //Ensures the browser only sends the cookie over HTTPS.
      httpOnly: true, //a boolean indicating whether the cookie is only to be sent over HTTP(S)
      maxAge: cookieAge //a number representing the milliseconds from Date.now() for expiry
    }
  })
);
app.use(authRouter);
app.use(productsRouter);
app.use(adminProductsRouter);
app.use(cartsRouter);

app.listen(3000, () => {
  console.log('Listening');
});
