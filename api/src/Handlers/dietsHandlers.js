const {Diets} = require('../db')




const diets = async (req,res) => {

    try {
        const dietsAll = await Diets.findAll()

        
        res.status(200).json(dietsAll)
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}



module.exports = diets;
