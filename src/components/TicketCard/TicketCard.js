import './TicketCard.css'
import transporterLogo from '../../images/transporterLogo.png'
import Segments from "../Segments/Segments";


function TicketCard(props) {
  const {ticket} = props

  const convertedPrice = ticket.price.toLocaleString('ru-RU')
  const segments = ticket.segments.map((segment) => (
    <Segments
      origin={segment.origin}
      destination={segment.destination}
      timeOfDeparture={segment.date}
      // arrivalTime={555}
      duration={segment.duration}
      stops={segment.stops}
      countStops={2}
    />
  ))
  
  return (
    <div className='ticket'>
      <div className='ticket__header'>
        <p className='ticket__header-price'>{`${convertedPrice} Р`}</p>
        <img className='ticket__header-transporter' alt='логотип компании-перевозчика' src={transporterLogo}/>
      </div>
      <div>{segments}</div>
    </div>
  )
}

export default TicketCard