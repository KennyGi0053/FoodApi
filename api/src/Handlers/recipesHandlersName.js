const allrecipeName = require('../Controllers/getrecipeName')


const recipeName = async (req, res) => {

    const { name } = req.query
    try {
        
            const apiName = await allrecipeName(name)

            return res.status(200).json(apiName)

    } catch (error) {
        return res.status(400).json({ message:`No existe alguna receta que tenga ese "${name}"`})
        
    }
}









module.exports = recipeName