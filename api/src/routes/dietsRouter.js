const { Router } = require('express');
const diets = require('../Handlers/dietsHandlers')



const dietsRouter = Router()




dietsRouter.get('/', diets)



module.exports = dietsRouter;