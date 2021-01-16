const router = require('express').Router();
const Game= require("../model/Game")
const Movie= require("../model/Movie")

router.post('/',async(req,res)=>{
    //getting data from frontend
    /**
     * get the data from front end in multiple vars we pass it to Game.find()
     * search in db with these data if its matchs we return data
     * else we return 404 
     */
    try {
        const games = await Game.find({})
        const movies = await Movie.find({})
        res.json({
            data : games,movies
        })
    }catch(err){
        console.log(err)
        res.status(400).send(err);
    }
    
});
module.exports=router;