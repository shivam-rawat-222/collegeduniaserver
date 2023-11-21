const express = require("express")
const router = express.Router();
const clients = require("../Schemas/form")
router.route("/form").post(async(req,res)=>{
    const {name,mail,number,location,course} = req.body;
    if(!name || !mail ||!number ||!location ||!course)
    {
        res.status(400).send("plz enter the correct data")
        
    }
    else{
        const resp = await clients.create(
            {
                name,
                mail,
                number,
                location,
                course
            }
        )
        if(!resp)
        {
            res.status(404)
        throw new Error("cant submit the data");
        }

        res.status(200).json({
            "message": "data sent successfully"
        })

        console.log(req.body)

    }


})
module.exports = router;