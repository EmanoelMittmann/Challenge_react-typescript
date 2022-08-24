
import {ContainerInput} from './style'

interface HeaderProps{
    name?: string
}

export const InputSearch: React.FC<HeaderProps> = ({name}) => {
    return(
        <ContainerInput placeholder={name}/>  
    )
}


    

