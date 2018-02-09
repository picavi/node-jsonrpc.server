//==========================================================================
// Required node-modules
//==========================================================================
var express = require('express');
var bodyParser = require('body-parser');
var methods = require('./functions');
var configs = require('./configs');
//==========================================================================
// Express / Bodyparser
//==========================================================================
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//==========================================================================
// Error Handling
//==========================================================================
app.use(function(err, req, res, next) {
    console.info("["+new Date+ "] "+"Request  -- " +req.body);
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      var err = {
        "code": -32700,
        "message": "Parse error",
        "data": err.message,
        "id": null
      };
      console.debug("["+new Date+ "] " + "Err at request: "+ req);
      console.info("["+new Date+ "] "+"Response  -- " +JSON.stringify(err));
      res.end(JSON.stringify(err));
    }
});
//==========================================================================
// Fetching false endpoints
//==========================================================================
app.use(function(req, res, next) {
    
    if(req.url !== configs.ENDPOINT){
        res.end("Cannot "+req.method +" "+req.url);
    }else{
        next();
    }
});
//==========================================================================
// Logging request
//==========================================================================
app.use(function(req, res, next) {
    console.info("["+new Date+ "] "+"Request  -- " +JSON.stringify(req.body));
    next();
});
//==========================================================================
// Check JSON-RPC-Version
//==========================================================================
app.use(function(req, res, next){
    if(req.body.jsonrpc !== "2.0"){
        
        console.debug("["+new Date+ "] " +"wrong version" + req.body.jsonrpc);

        if(req.body.jsonrpc === undefined){
            var err = {
                "code": -32600,
                "message": "Invalid Request",
                "data": "JSON-RPC version is undefined.",
                "id": null
              };    
        }
        else{
            var err = {
                "code": -32600,
                "message": "Invalid Request",
                "data": "Wrong JSON-RPC version.",
                "id": null
              };
        }
        console.info("["+new Date+ "] "+"Response  -- " +JSON.stringify(err));
        res.end(JSON.stringify(err));
    }
    else{
        next();
    }
});
//==========================================================================
// Does a method exist (in general)?
//==========================================================================
app.use(function(req, res, next){
    if(req.body.method === undefined){
        var err = {
            "code": -32600,
            "message": "Invalid Request",
            "data": "No method defined.",
            "id": null
          };
          console.info("["+new Date+ "] "+"Response  -- " +JSON.stringify(err));
          res.end(JSON.stringify(err));
    }
    else{
        next();
    }
});
//==========================================================================
// Does the specific method exist?
//==========================================================================
app.use(function(req, res, next){
    if(req.body.method in methods){
        console.log('Method found');
        console.log(methods[req.body.method]());
        next();
        
    }
    else{
        var err = {
            "code": -32601,
            "message": "Method not found",
            "data": "The method does not exist / is not available",
            "id": null
          };
          console.info("["+new Date+ "] "+"Response  -- " +JSON.stringify(err));
          res.end(JSON.stringify(err));
    }
});
//==========================================================================
// Define API route
//==========================================================================
app.post(configs.ENDPOINT, function(req, res){
    console.info("["+new Date+ "] "+"Response  -- " +JSON.stringify(req.body));
    res.end(JSON.stringify(req.body));
});
//==========================================================================
// Start listening
//==========================================================================
app.listen(configs.PORT, function(){
    console.info("["+new Date+ "] " +"Started server at PORT "+configs.PORT);
});