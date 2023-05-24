const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    name: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    recipeSummary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stepByStep: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
   
  },
  {timestamps: false}
  );
};
