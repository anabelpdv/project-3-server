const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const Location = require('../models/Location');



router.post("/api/comments", (req,res,next)=>{
    Comment
            .create(req.body)
            .then(comment=>{
              console.log('Testing what is being populated',comment)
              res.status(200).json(comment);
            })
            .catch(err=>{
              next(err)
            })
  
});


router.get("/api/comments/:locationId", (req,res,next)=>{
  console.log('this is the parameter im looking for',req.params.locationId)
  Comment
          .find({location:req.params.locationId},{'content':1})
          .populate('author')
          .then(response=>{
            res.status(200).json(response);
          })
          .catch(err=>{
            next(err)
          })

});


module.exports = router;