import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import style from './CardsContainer.module.css'



const CardsContainer = () => {
    
    const Recipes = useSelector(state => state.recipes)
    return (
        <div className={style.container}>
        {Recipes.map(Recipe => {
            return (
                <Card 
                
                id ={Recipe.id}
                image ={Recipe.image}
                name ={Recipe.name}
                healthScore ={Recipe.healthScore}
                diets ={Recipe.diets}
                

                />
                )
            })}
                
          </div>
    )
}


export default CardsContainer;