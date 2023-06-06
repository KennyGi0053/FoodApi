const { Recipe, Diets} = require('../db');
require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios')



const allrecipeName = async (name) => {
    const api = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=12`)
    //recordar colocarlo en 100 nuevamente

   
      
    const apirecipes = api.data.results.map(element => {
        return {
            id:element.id,
            name:element.title,
            image:element.image,
            recipeSummary: element.summary,
            healthScore: element.healthScore,
            stepByStep: element.analyzedInstructions[0] ? element.analyzedInstructions[0].steps.map(s => s.step).join(' ') : '',
            diets:element.diets
        }
    })
  
    const dbrecipes = await Recipe.findAll({ 
        include: {
          model: Diets,
        }
      }).then(data => data.map(rec => { 
        return {
          id: rec.id,
          name: rec.name,
          image: rec.image,
          recipeSummary: rec.recipeSummary,
          healthScore: rec.healthScore,
          stepByStep: rec.stepBystep,
          diets: rec.diets.map(diet => diet.name)
        }
      }))

      const allrecipes = dbrecipes.concat(apirecipes)

      if (name) {
        const Filteredreci = allrecipes.filter(element => element.name.toLowerCase().includes(name.toLowerCase()) )
        return Filteredreci
      }else {
        
        return allrecipes
      }
}

    

module.exports = allrecipeName