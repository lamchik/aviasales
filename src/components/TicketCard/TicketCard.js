import './TicketCard.css'
import transporterLogo from '../../images/transporterLogo.png'

function getTimeFromMinutes(minutes) {
  let hours = Math.trunc(minutes / 60);
  let fullMinutes = minutes % 60;
  return hours + 'ч ' + fullMinutes + 'м';
}

function TicketCard(props) {
  const {
    price,
    // carrier,
    origin,
    destination,
    time,
    duration,
    originBack,
    destinationBack,
    stops,
    timeOfReturn,
    durationOfReturn,
    stopsOnTheWayBack,
  } = props

  const convertedDuration = getTimeFromMinutes(duration);
  const convertedDurationOfReturn = getTimeFromMinutes(durationOfReturn)
  const convertedTime = String(time).match(/\d\d:\d\d/)
  const convertedDateBack = String(timeOfReturn).match(/\d\d:\d\d/)
  // const convertedPrice = String(price).replace(/(\d)(?=(\d\d\d)$)/g, '$1 ')
  const convertedPrice = price.toLocaleString('ru-RU')
  const departureDate = new Date(time)
  const arrivalDate = new Date(+departureDate + duration * 6e4)
  const departureDateBack = new Date(timeOfReturn)
  const arrivalDateBack = new Date(+departureDateBack + duration * 6e4)

  function prependZero(time) {
    if (time < 10) {
      return '0' + time
    }
    return time
  }

  const arrivalTime = (
    `${prependZero(arrivalDate.getUTCHours())}:${prependZero(arrivalDate.getUTCMinutes())}`
  )
  const arrivalTimeBack = (
    `${prependZero(arrivalDateBack.getUTCHours())}:${prependZero(arrivalDateBack.getUTCMinutes())}`
  )

  function countTransfers(arrayOfTransfers) {
    let countOfStops = ''
    if(arrayOfTransfers.length === 1) {
       countOfStops = countOfStops +'1 пересадка'
    } else if (arrayOfTransfers.length > 1) {
      countOfStops = countOfStops + `${arrayOfTransfers.length} пересадки`
    } else if (arrayOfTransfers.length === 0) {
      countOfStops = countOfStops + 'без пересадок'
    }
    return countOfStops
  }

  return (
    <div className='ticket'>
      <div className='ticket__header'>
        <p className='ticket__header-price'>{`${convertedPrice} Р`}</p>
        <img className='ticket__header-transporter' alt='логотип компании-перевозчика' src={transporterLogo}/>
      </div>
      <div className='ticket__info'>
        <div className='ticket__info-wrap'>
          <div className='ticket__info-flight'>
            <p className='ticket__info-header-text'>{`${origin} - ${destination}`}</p>
            <p className='ticket__info-text'>{`${convertedTime} - ${arrivalTime}`}</p>
          </div>
          <div className='ticket__info-flight'>
            <p className='ticket__info-header-text'>В пути</p>
            <p className='ticket__info-text'>{convertedDuration}</p>
          </div>
          <div className='ticket__info-flight'>
            <p className='ticket__info-header-text'>{countTransfers(stops)}</p>
            <p className='ticket__info-text'>{stops.join(' ')}</p>
          </div>
        </div>
        <div className='ticket__info-wrap'>
          <div className='ticket__info-flight'>
            <p className='ticket__info-header-text'>{`${originBack} - ${destinationBack}`}</p>
            <p className='ticket__info-text'>{`${convertedDateBack} - ${arrivalTimeBack}`}</p>
          </div>
          <div className='ticket__info-flight'>
            <p className='ticket__info-header-text'>В пути</p>
            <p className='ticket__info-text'>{convertedDurationOfReturn}</p>
          </div>
          <div className='ticket__info-flight'>
            <p className='ticket__info-header-text'>{countTransfers(stopsOnTheWayBack)}</p>
            <p className='ticket__info-text'>{stopsOnTheWayBack.join(' ')}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TicketCard