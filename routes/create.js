const Router = require('express').Router();
const fs = require('fs');
const dataSource = '${__dirname}/../data.json';

function handleError(error, response){ 
    console.log(error);
    response.status(500).send(error.message);
}


function storeData(data, response){
    console.log(data);
    fs.writeFile(dataSource, data, (error) =>{
        console.log(error);
        if (error) handleError (error, response)
        
        
        //console.log(response);
        response.status(200).json({message: 'USER TERCIPTA'});
    });
 }
 
function readData(data, user, response){
    try {
        //console.log(data);
        
        data = JSON.parse(data);
        data.push(user);
        data = JSON.stringify(data, null, 2);
        storeData(data, response);
        
    }catch (error){
        handleError(error, response);
    }
 }
 
function handleRequest(request, response, callback){
    const { body: user } = request;
    //console.log(response);
    fs.readFile(dataSource, async (error, data) => {
    
        if (error) 
        {
             handleError(error, response);
        }
        else  readData(data.toString('utf-8'), user, response);
        callback();
    });

 }

Router.post('/', function(req,res){
    handleRequest(req,res,function(){
        //console.log("Success");
        //res.status(200);
    });
    
 
  // res.send("String");
});

module.exports = Router;