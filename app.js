const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.set('views', './views')
app.set('views engine', 'ejs');
const mysql = require('mysql');
const router = express.Router();
let fs = require('fs');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


app.use('/products',productRoutes);
app.use('/',orderRoutes);


// app.use('/',orderRoutes);

// app.use((req,res,next)=>{
//     const error = new Error('Not found');
//     error.status=404;
//     next(error);
// });

// app.use((error,req,res,next)=>{
//     res.status(error.status || 500);
//     res.json({
//         error:{
//             error : error.message
//         }
//     });
// });



module.exports = app;



