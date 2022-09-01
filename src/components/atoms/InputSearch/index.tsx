import { useContext } from 'react'
import {ContainerInput} from './style'
import {valueCartContext} from '../../../App'

export const InputSearch = () => {

    const {textBySearch,setTextBySearch} = useContext(valueCartContext)

    return(
        <ContainerInput placeholder={'Search in....'} onChange={(e) => setTextBySearch(e.target.value)}/>  
    )
}


    

