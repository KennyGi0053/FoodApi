import { useState } from "react"
import { useDispatch } from 'react-redux'
import { searchByName } from '../../Redux/actions'
import style from './SearchBar.module.css'

const SearchBar = ({returnToFirstPage}) => {
const dispatch = useDispatch()
const [name, setName] = useState('')

const handleChange = (event) => {
    event.preventDefault()
    setName(event.target.value)
}
const handleButton = (event) => {
    event.preventDefault()
    dispatch(searchByName(name))
    .then(() => { returnToFirstPage()})
}

return (
    <div className={style.container}>
        <input type="text" placeholder="Search by Name" onChange={(event) => handleChange(event)} className={style.input}/>
        <button type="submit" onClick={(event) => handleButton(event)} className={style.button}>Search</button>
        </div>
)

}

export default SearchBar

