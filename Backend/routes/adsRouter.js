const express = require("express");
const { adsModel, companyModel } = require("../model/ads.model");
const adsRouter = express.Router();

adsRouter.get("/get", async (req, res) => {
    let search = req.query.search
    search=search || ""
    try{
        let data = await adsModel.find({$or:[{primaryText:{$regex:search, $options: 'i'}},{headline:{$regex:search, $options: 'i'}},{description:{$regex:search, $options: 'i'}}]}).populate("companyId")
        res.send(data)
    }catch(err){
        res.send(err.message)
        console.log('err:', err)
    }
})

module.exports={
    adsRouter
}