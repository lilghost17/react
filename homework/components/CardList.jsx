import Card from "./Card"
import piosImage from '../assets/pio.jpg'

const CardList = () => {
  return (
    <div className="card-list">  
        <Card name="Pio" image={piosImage} description="Cha 'Pio' Seung-hoon 
    (born March 24, 1996) is a Korean professional  PUBG player for 
    Gen.G. Approximately Total  Winnings: $872,306"/>
    </div>
  )
}

export default CardList