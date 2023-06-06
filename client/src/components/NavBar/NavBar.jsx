import { Link } from "react-router-dom";
import style from './NavBar.module.css'



const NavBar = () => {
    return (
        <div className={style.Container}>   
        <Link to='/create'>
        <button className={style.button}>
            Create
        </button>
        </Link>
      

        
        </div>
        
        
    )
}


export default NavBar;