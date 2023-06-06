import { Link } from "react-router-dom";
import styles from './Landing.module.css'


const Landing = () => {
    return (
        <div className={styles.general}>   
       
        <Link to='/home'>
        <button className={styles.button}>Click to Home</button>
        </Link>
        <h2 className={styles.title}>PI - FOOD</h2>
          <h3 className={styles.letras}>Individual project created for ¡Soy Henry! </h3>
        
          <h3 className={styles.letras}>By: Kenny Perez</h3>
          </div>
    )
}


export default Landing;