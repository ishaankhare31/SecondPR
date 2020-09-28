const express=require('express');
const bodyParser=require('body-parser');

const leaderRouter=express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','test/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send detatils of all leaders to you!');
})
.put((req,res,next)=>{
    res.end('put operation is not supportes on /leaders');
})
.post((req,res,next)=>{
    res.end('Will add the leader: '+req.body.name+' with details: '+req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting all leaders!');
})

leaderRouter.route('/:leaderId')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','test/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send detatils of leader: '+req.params.leaderId);
})
.put((req,res,next)=>{
    res.write('Updating leader '+req.params.leaderId+'\n');
    res.end('Will update the leader: '+req.body.name+' with details: '+req.body.description);
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end('post operations is not supported on /leaders/'+req.params.leaderId);
})
.delete((req,res,next)=>{
    res.end('Deleting the leader: '+req.params.leaderId);
})

module.exports=leaderRouter;