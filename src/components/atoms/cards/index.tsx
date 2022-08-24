import {ContainerCard, ImgCard} from './style'

interface HeaderProps {
    url:string,
    price:number,
    text:string
}

export const Cards:React.FC<HeaderProps> = ({url, price, text}) => {
  return (
    <>
        <ContainerCard>
            <ImgCard src={url}/>
            <b>{text}</b>
            <p>R$:{price},00</p>
        </ContainerCard>
    </>
  )
}
