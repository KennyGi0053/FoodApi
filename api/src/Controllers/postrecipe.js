const {Recipe, Diets} = require('../db')


const postData = async(name, image, recipeSummary, healthScore, stepByStep, diets) => {

    const recipe = await Recipe.create({
        name,
        image,
        recipeSummary,
        healthScore,
        stepByStep,        
    })
    
    const idDiets = await Diets.findAll({
        where: {name: diets}
      })
    await recipe.addDiets(idDiets)
   
    return recipe
}


  module.exports = postData;
  