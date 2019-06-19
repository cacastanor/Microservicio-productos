

module.exports = {

reduceEvents:function(type,payload,functions){
var req = {body:{}}
switch(type){
    case "clientCreated":
        req.body.type = payload.products[0]
        req.body.cc = payload.cc
        req.body.done = payload.done
        functions.create(req,null)
        break;
}
}   
}