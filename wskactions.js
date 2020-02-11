function main(args)
{
    const request = require('request-promise');
    return new Promise(function(resolve,reject)
    {
        setTimeout(function(){
            resolve({done:true});
        },2000);
    })  
}