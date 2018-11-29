const Router = require('express').Router();
const fs = require('fs');
const datasource = '${__dirname}/../data.json';

Router.get('/:id', (req, res, next) => {
    //let users = [];

    //fs.readFile(datasource, function(error,data){
    fs.readFile(datasource, (error,data) => {    
        if (error){
            console.error(error);
            res.status(500).send({'error': error.message});
        }

        //users = JSON.parse(data)
        const dataObj = JSON.parse(data);
        let user = dataObj.filter(item => {
            return (item.id === Number(req.params.id));
        });
     //uncoment untuk mengembalikan hanya 1 data
       // if (user.length === 1)
       {
       //     user = user.pop();
       
            res.send({ user});
        }
      //  else res.status(400).send({'error' : 'NOT FOUND'});
      
    });
    
});
module.exports = Router;