const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');


//Connectipn to front end and database
//app.set('view engine', 'ejs');

router.get('/',(req,res,next) => {
    res.render('homepage.ejs');
});

router.post('/ordersPost',(req,res,next) => {
    res.send("You have sent" + req.body.name);
    res.end();
});


module.exports = router;








// router.get('/', (req,res,next) => {
//     res.status(200).json({
//         message: "Orders fetched"
//      });
// });

// router.post('/', (req,res,next) => {
//     const order = {
//         productId: req.body.productId,
//         quantity: req.body.quantity
//     };
//     res.status(201).json({
//         message: "Orders created",
//         order : order
//      });
// });

// router.get('/:orderId', (req,res,next) => {
//     res.status(200).json({
//         message: "Orders details",
//         orderId: req.params.orderId
//      });
// });

// router.delete('/:orderId', (req,res,next) => {
//     res.status(200).json({
//         message: "Orders deleted",
//         orderId: req.params.orderId
//      });
// });


//require('./ProductButtonJS');
//const morgan = require('morgan');
//app.use( express.static( "public" ));
// const data =[ 
//     {
//     id :"1",
//     name :"apple",
//     price :"100"
//     },
//     {id :"2",
//     name :"pineapple",
//     price :"130"
//     },
//     {id :"3",
//     name :"orange",
//     price :"80"
//     },
//     {id :"4",
//     name :"watermelon",
//     price :"200"
//     }

// ];


/*

router.get('/',(req,res,next)=>{
    // res.status(200).json({
    //     message : 'order were fetched!'
    // });
    //res.sendFile(__dirname+'/index.html');
    res.render('ProductButton.ejs');
});
router.get('/getItems',(req,res,next)=>{
    res.status(200).json(data);
});

router.post('/',(req,res,next)=>{
    res.status(201).json({
        message : 'order were created!'
    });
});
/*
router.get('/:orderId',(req,res,next)=>{
    res.status(201).json({
        message : 'order details!',
        orderId : req.params.orderId
    });
});

router.delete('/:orderId',(req,res,next)=>{
    res.status(201).json({
        message : 'order deleted!',
        orderId : req.params.orderId
    });
});    
    */


