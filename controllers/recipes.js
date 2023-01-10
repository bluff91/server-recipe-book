const Recipe = require('../models/recipeModel')
const {StatusCodes} = require('http-status-codes')


  
const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({})
        res.status(StatusCodes.OK).json(recipes)
    } catch (error){
        throw new Error(`${error.message}`)
    }
}

const getRecipe = async (req, res) => {
    try {
        const { id } = req.params
        const recipe = await Recipe.findOne({_id:id})
        if (!recipe) {
            throw new Error("No recipe with such Id")
        }
        res.status(StatusCodes.OK).json(recipe)
    } catch (error) {
        throw new Error(`The Id ${error.value} you have provided is invalid`)
    }
}

const createRecipe = async (req, res) => {
    try {
        const {title, cookingTime, method, ingredients} = req.body
        console.log(title, cookingTime, method, ingredients)
        if (!title || !cookingTime || !method) {
            throw new Error("Bad request error. You need to provide valid values for all the fields")
        }
        
        const recipe = await Recipe.create(req.body)
        res.status(StatusCodes.CREATED).json({recipe})
    }catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {getAllRecipes, getRecipe, createRecipe}