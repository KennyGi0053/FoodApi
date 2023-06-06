import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets, postRecipe } from "../../Redux/actions";
import { Link } from 'react-router-dom'
import style from './Form.module.css'

const validate = (post) => {

    let errors = {};
    if (!post.name) {
         errors.name = 'Enter recipe name'
    }
    if (!post.image){
        errors.image = 'Enter URL of some representative image'
    }
    if (!post.healthScore || post.healthScore < 0 || post.healthScore > 100){
        errors.healthScore = 'Enter a value from 0 to 100'
    }
    if (!post.recipeSummary){
        errors.recipeSummary = 'Write a short summary of the recipe'
    }
    if (!post.stepByStep.length){
        errors.stepByStep = 'Write the step by step to make the recipe'
    }
    if (!post.diets.length){
        errors.diets = 'choose at least one type of diet'
    }
    

    return errors;
}



 export default function Form () {
     const [errors, setErrors] = useState({})
     const dispatch = useDispatch()
     const diets = useSelector(state => state.diets)
     
     useEffect(() => {
         dispatch(getDiets())
     }, [dispatch])

    const [post, setPost] = useState ({
        name: "",
        image: "",
        healthScore: 0,
        recipeSummary: "",
        stepByStep: "",
        diets:[]
    })


    
    const handleInputChange = (event) =>{
        setPost({
            ...post,
            [event.target.name]: event.target.value
        })
        setErrors(validate({
            ...post,
            [event.target.name]: event.target.value
        }))
    }
console.log(post)
    const handleSubmit = (event) => {
        event.preventDefault()
         if (Object.values(errors).length > 0) alert('Please fill in all the fields')
         else {
             dispatch(postRecipe(post))
             alert('Recipe created successfully')
             
             
         }
       
    }
    const handleSelectDiets = (event) => {
        if(!post.diets.includes(event.target.value))
        setPost({
            ...post,
            diets: [...post.diets, event.target.value]
        })
        setErrors(validate({
            ...post,
            diets: [...post.diets, event.target.value]
        }))
    }
    

    const handleSteps = (event) => {
        setPost({
            ...post,
            stepByStep: [event.target.value]
        })
        setErrors(validate({
            ...post,
            stepByStep: event.target.value
        }))
    } 

    const handleDietDelete = (diet) => {
        setPost({
            ...post,
            diets: post.diets.filter(element => element !== diet)
        })
        setErrors(validate({
            ...post,
            diets: [...post.diets]
        }))
    }

    return (
        <div className={style.general}>
            <form onSubmit={event => handleSubmit(event)} className={style.form}>
            <h1 className={style.h1}>RECIPE CREATOR</h1>
        <div className={style.label}>   
        <label className={style.labeln}>Name</label>
        <input type="text" value={post.name} name="name" onChange={event => handleInputChange(event)} className={style.input}/>
        {errors.name && (
            <p className={style.error}>{errors.name}</p>
        )}
        </div>
        
          <div>   
          <label>Image</label>
          <input type="text" value={post.image} name='image' onChange={event => handleInputChange(event)} className={style.input}/>
          {errors.image && (<p className={style.error}>{errors.image}</p>)}
          </div>

            <div>   
            <label>Health Score</label>
            <input type= "number" min='0' max='100' value={post.healthScore} name="healthScore" onChange={event => handleInputChange(event)} className={style.input}/>
            {errors.healthScore && (<p className={style.error}>{errors.healthScore}</p>)}
            </div>

            <div>   
            <label>Recipe summary</label>
            <input type="text" value={post.recipeSummary} name="recipeSummary" onChange={event => handleInputChange(event)} className={style.input}/>
            {errors.recipeSummary && (<p className={style.error}>{errors.recipeSummary}</p>)}
            </div>

            <div>   
            <label>Step by step</label>
            <input type="text" value={post.stepByStep} name="stepByStep" onChange={event => handleSteps(event)} className={style.input}/>
            {errors.stepByStep && (<p className={style.error}>{errors.stepByStep}</p>)}
            </div>

            <div >
                <select onChange={event => handleSelectDiets(event)} defaultValue='default' className={style.diets}>
                    <option value='default' disabled >Choose diets</option>
                {diets && diets.map((diet, index) => (
                    <option value={diet.name} key={index} >{diet.name}</option>
                ))}
                </select>
                {errors.diets && (<p className={style.error}>{errors.diets}</p>
                )}
                {post.diets.map((index, diet) => 
                    <div key={index}>
                        <p>{diet}</p>
                        <button onClick={() => handleDietDelete(diet)}>X</button>
                    </div>
                    
                    )}
            </div>
            <button type='submit' className={style.buttonc}>CREATE</button>
            <Link to='/home'>
                <button className={style.buttonb}>Back</button>
            </Link>
            </form>
            </div>
            
            
    )
}


