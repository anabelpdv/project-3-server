const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const Location = require('../models/Location');



router.post("/api/comments", (req,res,next)=>{
    Comment
            .create(req.body)
            .then(comment=>{
                  Location
                          .findByIdAndUpdate(req.body.locationId,{ $push: { comments: comment } })
                          .then(res=>{
                            
                          })
                          .catch(err=>{
                            next(err)
                          })
              res.status(200).json(comment);
            })
            .catch(err=>{
              next(err)
            })
  
});


router.get("/api/comments", (req,res,next)=>{
  Comment
          .find()
          .then(response=>{
            res.status(200).json(response);
          })
          .catch(err=>{
            next(err)
          })

});


module.exports = router;