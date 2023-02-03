const express = require('express')
const router = express.Router()

const {getAllRecipes, getRecipe, createRecipe, searchRecipes} = require('../controllers/recipes')

router.get('/recipes', getAllRecipes)
router.get('/recipes/search', searchRecipes)
router.get('/recipes/:id', getRecipe)
router.post('/recipes', createRecipe)

module.exports = router