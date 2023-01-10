const express = require('express')
const router = express.Router()

const {getAllRecipes, getRecipe, createRecipe} = require('../controllers/recipes')

router.get('/recipes', getAllRecipes)
router.get('/recipes/:id', getRecipe)
router.post('/recipes', createRecipe)

module.exports = router