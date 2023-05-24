const { Router } = require('express');
const recipeId = require('../Handlers/recipesHandlersId');





const recipesRouter = Router()

recipesRouter.get('/:id', recipeId)






module.exports = recipesRouter;


