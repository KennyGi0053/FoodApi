const { Router } = require('express');
const recipeId = require('../Handlers/recipesHandlersId');
const recipeName = require('../Handlers/recipesHandlersName')
const postrecipe = require('../Handlers/recipesHandlerspost')



const recipesRouter = Router()

recipesRouter.get('/:id', recipeId)

recipesRouter.get('/', recipeName)

recipesRouter.post('/',postrecipe)




module.exports = recipesRouter;


