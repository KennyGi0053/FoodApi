import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { recipeDetail } from "../../Redux/actions";

const Detail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(recipeDetail(id))
    }, [dispatch, id])

    const detailedRecipe = useSelector(state => state.detail)
    console.log(detailedRecipe)

    return (
        <div>
            {
                detailedRecipe.length > 0 ?
        <div>   
            <h1>{detailedRecipe[0].name}</h1>
            <div>
                <img src={detailedRecipe[0].image} alt='img not found'
                width='500px' height='400px' />
                </div>
                <div>
                    <h3>Health Score {detailedRecipe[0].healthScore}</h3>
                    <h3>Step by step</h3>
                    <p dangerouslySetInnerHTML={{__html: detailedRecipe[0].instructions}}></p>
                    <h3 >Summary</h3><p dangerouslySetInnerHTML={{__html: detailedRecipe[0].recipeSummary}}></p>
                    <h3>Diet type</h3><ul>{detailedRecipe[0].diets.map(die => <li>{die.name}</li>)} </ul>
                </div>
                
        </div> :
        <p>Loading...</p>
        
        }
        <Link to='/home'>
            <button>Back to Home</button>
        </Link>
        </div> 
        
    )
}


export default Detail;