
const express = require('express');
const router = express.Router();
var bodyparser = require('body-parser');
var mysql = require('mysql');
var promise = require('promise'); 
var data =[{
    id :"4",
    name :"apple",
    price :"100"
    }];

var currId=4;
router.use(bodyparser.json());
    
var con = mysql.createConnection
    ({
            host:'10.13.178.29',
            user:'root',
            password:'namana7mysql',
            database:'prod'
        
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

    //Select from table
    router.get('/',(req,res,next)=>{
        
        con.query("SELECT DISTINCT * FROM prod_info",function(err,result,fields){
            if(err) throw err;
           console.log(result);
            Object.assign(data,result);
            //console.log(result);
            res.send({data:data});
            //console.log(res);
            //res.json();
        });
        
    });
    
    /*
    router.post('/',(req,res,next)=>{
    var prodName = req.body.name;
    var prodPrice = req.body.price;
    let sql ="INSERT INTO prod_info (name,price) values ('phone',6);"
    })*/

    //Insert into table
    router.post('/',(req,res,next)=>{
        var prodId = req.body.id;
        var prodName = req.body.name;
        var prodPrice = req.body.price;
        currId++;
        data.push({
            id:currId,
            name:prodName,
            price:prodPrice
        });
        let statement = "INSERT INTO prod_info(id,name,price) VALUES('"+prodId+"','"+prodName+"','"+prodPrice+"')";
        con.query(statement,function(err,result,fields){
            if(err) throw err;
            console.log(result);
            res.send('successfully created product')
        })
    
        ///res.send('successfully created product')
    });
    
    //Update items from table
    router.put('/:id',(req,res,next)=>{
        var id = req.params.id;
        var newName = req.body.name;
        var newPrice = req.body.price;
        //var found =false;
        console.log(id+" new name is:  " +newName+" new price is :"+newPrice);
    
        let statement = "UPDATE prod_info SET name='"+newName+"',price='"+newPrice+"' WHERE Id='"+id+"'";
        con.query(statement,function(err,result,fields){
            if(err)throw err;
            console.log(result);
            res.send("successfully updated");
        })
    
    })
    
    //Delete product from table
    router.delete('/:id',(req,res,next)=>{
        var id = req.params.id;
        let statement = "DELETE FROM prod_info WHERE Id='"+id+"'";
        
        con.query(statement,function(err,result,fields){
            if(err) throw err;
            console.log(result);
            res.send("the table with id="+id+" is deleted");
        })
    })
    

module.exports = router;













// router.get('/',(req,res,next) => {
//     res.status(200).json({
//        message: "Get requests for handler"
//     });
// });

 
// router.post('/',(req,res,next) => {
//     const product = {
//         name: req.body.name,
//         price: req.body.price
//     };
//     res.status(200).json({
//        message: "Post requests for handler",
//        createdProduct : product
//     });
// });

// router.get('/:productId',(req,res,next) =>
// {
//     const id = req.params.productId;
//     if(id === 'special')
//     {
//         res.status(200).json({
//             message : "You have a special ID",
//             id :id
//         });
//     }
//         else
//         {
//             res.status(200).json({
//                 message : "You passed an ID"
//             });
//         }
    
// });

// router.patch('/:productId',(req,res,next) =>
// {
//     res.status(200).json({
//         message: "Updated product"
//      });
//  });

//  router.delete('/:productId',(req,res,next) =>
// {
//     res.status(200).json({
//         message: "Deleted product"
//      });
//  });

