const postData = require('../Controllers/postrecipe')


const postrecipe = async(req, res) => {

    
    try {
        const { name, recipeSummary, healthScore, stepByStep, image, diets} = req.body
        
        const recipe = await postData(name, image, recipeSummary, healthScore, stepByStep, diets)

        res.status(201).json("recipe created successfully!")
    } catch (error) {
        
        res.status(500).json({error: error.message})
    }
}

module.exports = postrecipe