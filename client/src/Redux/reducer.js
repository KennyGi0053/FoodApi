import { GET_RECIPES, GET_DIETS, GET_DETAIL, POST_RECIPE, GET_SEARCH_BY_NAME, ORDER_BY_HEALTHSCORE, FILTER_BY_DIETS, ORDER_BY_NAME} from "./actions";




const initialState = {
    recipes: [],
    allrecipes:[],
    diets:[],
    detail:[]

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPES: 
        return {...state, 
            recipes: action.payload,
            allrecipes:action.payload }
        
        case GET_DIETS:
                return {
                    ...state, diets: action.payload}
                    
                    case POST_RECIPE:
                        return {
                            ...state,
                        }
                        case GET_DETAIL:
                            return {
                                ...state,
                                detail: action.payload
                            }
                            case GET_SEARCH_BY_NAME:
                                return {
                                    ...state, 
                                    recipes: action.payload
                                }
                                case FILTER_BY_DIETS:
                                    
                                    const recipes = state.allrecipes
                                    const recipesWithDiet = action.payload === 'all' ? recipes :
                                    recipes.filter(reci => {
                                        let names = reci.diets.map(die => die.name)
                                        if (names.includes(action.payload)) return reci
                                    })
                                    return {
                                        ...state,
                                        recipes: recipesWithDiet
                                    }
                                    case ORDER_BY_NAME:
                                        const recipesSorted = action.payload === 'asc' ?
                                        state.recipes.sort((a,b) => {
                                            if (a.name > b.name) return 1
                                            if (b.name > a.name) return -1
                                            return 0
                                        }) :
                                        state.recipes.sort((a,b) => {
                                            if (a.name > b.name) return -1
                                            if (b.name > a.name) return 1
                                            return 0
                                        })
                                        return {
                                            ...state,
                                            recipes: recipesSorted
                                        }
                                        case ORDER_BY_HEALTHSCORE:
                                            const recipesByHealthscore = action.payload === 'asc' ?
                                            state.recipes.sort((a,b) => {
                                                if (a.healthScore > b.healthScore) return 1
                                                if (b.healthScore > a.healthScore) return -1
                                                return 0
                                            }) :
                                            state.recipes.sort((a,b) => {
                                                if (a.healthScore > b.healthScore) return -1
                                                if (b.healthScore > a.healthScore) return 1
                                                return 0
                                            })
                                            return {
                                                ...state,
                                                recipes: recipesByHealthscore
                                            }
                                          

                                default:
                                    return {...state}
                        }
                    }
                    
                    
                    export default rootReducer