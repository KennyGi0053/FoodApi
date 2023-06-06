const { Diets } = require('../db')
const axios = require('axios')
require('dotenv').config();
const {API_KEY} = process.env;








const alldiets= async () => {
  let dietas = []
    const response= await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)

    const diets = response.data.results.map(recipe => recipe.diets)
   for (let i = 0; i < diets.length; i++) {
      for (let j = 0; j < diets[i].length; j++) {
        
        if(!dietas.includes(diets[i][j])){
          dietas.push(diets[i][j])
        }
      }
     
   }
   await Diets.bulkCreate(dietas.map(diet => {
    return {
        name:diet
    }
}), {ignoreDuplicates: true});



  };

  

  module.exports = {
    alldiets}