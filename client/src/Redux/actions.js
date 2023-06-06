import axios from 'axios'


export const GET_RECIPES = "GET_RECIPES"

export const getRecipes = () =>{
    return async(dispatch) =>{
        const apiData = await axios.get(`http://localhost:3001/recipes`);

        const recipes = apiData.data
        return dispatch({
            type: GET_RECIPES,
            payload: recipes
        })
    }

}


//  export const GET_RECIPE = "GET_RECIPE"

//  export const getRecipe = (id) =>{
//      return async(dispatch) =>{
//          const apiData = await axios.get(`http://localhost:3001/recipes/${id}`)

//          const recipes = apiData.data
//          return dispatch({
//              type: GET_RECIPE,
//              payload: recipes
//          })
//      }
//  }


  export const POST_RECIPE = "POST_RECIPE"
      export const postRecipe = () =>{
          return async(dispatch) => {
              const response = await axios.post('http://localhost:3001/recipes')

              return dispatch({
                  type: POST_RECIPE,
                  payload: response.data           
                  })
         }
     }



 export const GET_DIETS = "GET_DIETS"

 export const getDiets = () =>{
     return async(dispatch) => {
         const apiData = await axios.get(`http://localhost:3001/diets`)
         const diets = apiData.data
         return dispatch({
             type: GET_DIETS,
             payload: diets
            })
        }
    }
    

export const GET_DETAIL = 'GET_DETAIL'
export const recipeDetail = (id) =>{
    return async (dispatch) =>{
        const apiData = await axios.get(`http://localhost:3001/recipes/${id}`)
        const recipes = apiData.data
        return dispatch({
            type: GET_DETAIL,
            payload:recipes
        })
    }
}

export const GET_SEARCH_BY_NAME = 'GET_SEARCH_BY_NAME'

export const searchByName = (name) =>{
    return async (dispatch) => {
        const apiData = await axios.get(`http://localhost:3001/recipes?name=${name}`)
        const recipes = apiData.data
        return dispatch({
            type: GET_SEARCH_BY_NAME,
            payload: recipes
        })
    }
}
export const FILTER_BY_DIETS = 'FILTER_BY_DIETS'
export const filterByDiets = (payload) =>{
    return {
        type: FILTER_BY_DIETS,
        payload
    }
}

export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const orderByName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload
    }
}

export const ORDER_BY_HEALTHSCORE = 'ORDER_BY_HEALTHSCORE'
export const orderByHealthscore = (payload) =>{
    return {
        type: ORDER_BY_HEALTHSCORE,
        payload
    }
}



