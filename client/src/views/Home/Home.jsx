import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, getDiets, filterByDiets, orderByName, orderByHealthscore} from "../../Redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";
import Paginated from "../../components/Paginated/Paginated";
import style from './Home.module.css'
import Card from "../../components/Card/Card";

const Home = () => {

    const dispatch = useDispatch()
    const allRecipes = useSelector(state => state.recipes)
    const diets = useSelector(state => state.diets)
    const [order, setOrder] = useState(true)
    useEffect (() => {
        dispatch(getRecipes())
    }, [dispatch])

    useEffect(() => {
        dispatch(getDiets())
    },[dispatch])

    const handleFilterByDiets = (event) => {
        dispatch(filterByDiets(event.target.value))
    }

    const handleOrderByName = (event) => {
        dispatch(orderByName(event.target.value))
        order ? setOrder(false) : setOrder(true)
    }

    const handleOrderByHealthscore = (event) => {
        dispatch(orderByHealthscore(event.target.value))
        order ? setOrder(false) : setOrder(true)
    }
    
    const [currentPage, setCurrentPage] = useState(1)
    const [recipesPerPage, setrecipesPerPage] = useState(9)
    const indexOfLastRecipe = currentPage * recipesPerPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const returnToFirstPage = () => {
        setCurrentPage(1)
    }
    
    return (
       <div className={style.fondoHome}>
       <div className={style.container}>
          <SearchBar returnToFirstPage={returnToFirstPage} />
          <select className={style.filter} onChange={event => handleOrderByName(event)} defaultValue='default' >
            <option value='default' disabled >Alphabetical Order</option>
            <option value='asc'>A-Z</option>
            <option value='desc'>Z-A</option>
          </select>
          <select className={style.filter} onChange={event => handleOrderByHealthscore(event)} defaultValue='default'>
            <option value='default' disabled >Order by Health Score</option>
            <option value='desc'>Higher</option>
            <option value='asc'>Lower</option>
          </select>

          <select className={style.filter} onChange={event => handleFilterByDiets(event)} defaultValue='default'>
            <option value='default' disabled>Select by diet type</option>
            {
                diets && diets.map(die => (
                    <option value={die.name} key={die.id}>{die.name}</option>
                ))
            }
            </select>
            </div>
            
                <Paginated
                recipesPerPage={recipesPerPage}
                allRecipes={allRecipes.length}
                paginated={paginated}
                />
                {currentRecipes?.map((cu) => {
                    return (

                <div >
                    
                <Card name={cu.name} image={cu.image} healthScore={cu.healthScore} diets={cu.diets} key={cu.id}/>

                   
                </div> 
                    )
                })}
               
               
              
                   
            
            
             
        </div>
       
    

        
    )
}


export default Home