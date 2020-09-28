const express=require('express');
const bodyParser=require('body-parser');

const promoRouter=express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader=('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send details of all promotions to you!');
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('Put method is not supported in /promotions');
})
.post((req,res,next)=>{
    res.end('Will add the promotion: '+req.body.name+' with details: '+req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting all the promotions!');
});

promoRouter.route('/:promoId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader=('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will sent details of promotions '+req.params.promoId);
})
.put((req,res,next)=>{
    res.write('Updating promotion '+req.params.promoId+'\n');
    res.end('The promotion: '+req.body.name+' will be updated with details: '+req.body.description); 
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end('post opertation is not supported on /promotions/'+req.params.promoid);
})
.delete((req,res,next)=>{
    res.end('The promotion '+req.params.promoId+' will be deleted');
})

module.exports=promoRouter;