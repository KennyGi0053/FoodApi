const axios = require('axios');
const {API_KEY} = process.env;
const { Recipe, Diets} = require('../db');
require('dotenv').config();

const allrecipeId = async (id) => {
    
    const apirecipeId = [(await axios (`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)).data]
    // luego solucionar lo del api key ya que cuando le paso {API_KEY} no me trae la info, solo me la trae
    // si coloco mi api key manual 
    const apiId =  (Number(id)) ?

    apirecipeId.map (element =>{

        return { 
            id: element.id,
            title: element.title,
            image: element.image,
            healthScore: element.healthScore,
            diets: element.diets,
            step: element.analyzedInstructions?.map(element=>{
                return{
                  number: element.number, 
                  step: element.steps.map( element =>{
                    return element.step;
                  })
                  
                 }
                }) 
                

    }})
    
    :  (await Recipe.findBypk(id,{
        include: {
            model:Diets, 
            attributes: ['name']
        }
        
    })).map(element => {
        
        return {

            name: element.name,
            image: element.image,
            recipeSummary: element.recipeSummary,
            healthScore: element.healthScore,
            stepByStep: element.stepByStep
        }
    })
    apirecipeId.filter((api) => {
        api.id === Number(id)

        } )
    return apiId;
    
}

module.exports = allrecipeId;
