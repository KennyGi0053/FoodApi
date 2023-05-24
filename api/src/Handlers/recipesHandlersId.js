const allrecipeId = require('../Controllers/getrecipeId')





const recipeId = async (req,res) => {

const { id } = req.params

try {
    const reciId = await allrecipeId(id)

    res.status(200).json(reciId)


} catch (error) {
    
    res.status(400).json({error: error.message})
}
}



module.exports = recipeId;