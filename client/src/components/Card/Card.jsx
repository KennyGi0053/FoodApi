import React from 'react';
import style from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
      <div className={style.global2}>
        <div className={style.global3}>

        <div className={style.global}>   
        


        <p>{props.name}</p>
          <Link to={`/detail/${props.id}`}>
                        
        <img src={props.image} alt="" />
          </Link> 
        
        
        <p>Health Score {props.healthScore}</p>
        
        
            <li>Diets: {
                props.diets.map((d, index) => {
                    d=d.charAt(0).toUpperCase() + d.slice(1)
                    return <span key={index}> {d}</span>
                })
            } </li>
                    </div>
                  </div>
            </div>
            
            
        
        
    )
}


export default Card;