const mongoose = require("mongoose")

const adsSchema = mongoose.Schema(
    {
        _id : Number,
        companyId : { type: Number, ref: 'companie' },
        primaryText : String,
        headline : String,
        description : String,
        CTA : String,
        imageUrl : String
    },
    { versionKey: false }
)

const companySchema = mongoose.Schema(
    {
        _id : Number,
        name : String,
        url : String
    },
    { versionKey: false }
)

const adsModel = mongoose.model("ad", adsSchema)
const companyModel = mongoose.model("companie", companySchema)

module.exports = { adsModel, companyModel }
