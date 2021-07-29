import './TicketCard.css'
import s7 from '../../images/s7.png'
import ey from '../../images/ey.png'
import fv from '../../images/fv.jpeg'
import ek from '../../images/ek.png'
import tg from '../../images/tg.png'
import su from '../../images/su.png'
import mh from '../../images/mh.png'
import Segments from "../Segments/Segments";

function showCarriersLogo(carrier) {
  if (carrier === 'S7') {
    return s7
  } else if (carrier === 'EY') {
    return ey
  } else if (carrier === 'FV') {
    return fv
  } else if (carrier === 'EK') {
    return ek
  } else if (carrier === 'TG') {
    return tg
  } else if (carrier === 'SU') {
    return su
  } else if (carrier === 'MH') {
    return mh
  } else {
    return s7
  }
}

function TicketCard(props) {
  const {ticket} = props

  const convertedPrice = ticket.price.toLocaleString('ru-RU')
  const segments = ticket.segments.map((segment, index) => (
    <Segments
      key={index}
      origin={segment.origin}
      destination={segment.destination}
      timeOfDeparture={segment.date}
      duration={segment.duration}
      stops={segment.stops}
    />
  ))

  return (
    <div className='ticket'>
      <div className='ticket__header'>
        <p className='ticket__header-price'>{`${convertedPrice} Р`}</p>
        <img className='ticket__header-transporter' alt='логотип компании-перевозчика'
             src={showCarriersLogo(ticket.carrier)}/>
      </div>
      <div>{segments}</div>
    </div>
  )
}

export default TicketCard