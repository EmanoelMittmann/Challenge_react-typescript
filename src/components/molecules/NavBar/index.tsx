import { InputSearch } from '../../atoms/InputSearch'
import { BtnIconPurchases } from '../../atoms/btnIconPurchases';
import {Container, Logotext, ContainerChildren} from './style'

interface HeaderProps {
    logoName: string;
}

const Navbar: React.FC<HeaderProps> = ({logoName}) => {
  return (
    <Container>
        <ContainerChildren>
            <Logotext>{logoName}</Logotext>
        </ContainerChildren>
        <ContainerChildren>
            <InputSearch name='Search in...'/>
        </ContainerChildren>
        <ContainerChildren>
            <BtnIconPurchases/>
        </ContainerChildren>
    </Container>
  )
}

export default Navbar