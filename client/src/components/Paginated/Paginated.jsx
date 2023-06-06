import React from "react";
import style from "./Paginated.module.css";


const Paginated = ({recipesPerPage, allRecipes, paginated}) => {

     const pageNumbers = []

    for (let i = 0; i <= Math.ceil(allRecipes/recipesPerPage); i++) {
         pageNumbers.push(i+1)
     }
     return (
         <div className={style.pag}>
             <ul className={style.pag}>
             {

                 pageNumbers && pageNumbers.map(number => (
                     <p key={number}>
                         <button className={style.butt} onClick={() => paginated(number)}>{number}</button>

                        </p>
                    
                 ))
             }

             </ul>
                

         </div>
     )
}
        
export default Paginated