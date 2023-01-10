const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Please provide a recipe title"]
    },
    cookingTime:{
        type:Number,
        required: [true, "Please provide a cooking time"],
        min: 5,
    },
    method:{
        type:String,
        required: [true, "Please provide the recipe's method"],
    },
    ingredients:{
        type:Array,
        of:String
    }
})

module.exports = mongoose.model("recipes", RecipeSchema)