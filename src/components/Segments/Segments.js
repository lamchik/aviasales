import './Segments.css'

function getTimeFromMinutes(minutes) {
  let hours = Math.trunc(minutes / 60);
  let fullMinutes = minutes % 60;
  return hours + 'ч ' + fullMinutes + 'м';
}

function Segments(props) {

  const {origin, destination, timeOfDeparture, duration, stops} = props

  const convertedDuration = getTimeFromMinutes(duration);
  const departureTime = String(timeOfDeparture).match(/\d\d:\d\d/)
  const departure = new Date(timeOfDeparture)
  const arrival = new Date(+departure + duration * 6e4)

  function prependZero(time) {
    if (time < 10) {
      return '0' + time
    }
    return time
  }

  const arrivalTime = (
    `${prependZero(arrival.getUTCHours())}:${prependZero(arrival.getUTCMinutes())}`
  )

  function countOfStops(arrayOfTransfers) {
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
    <div className='ticket__info'>
      <div className='ticket__info-wrap'>
        <div className='ticket__info-flight'>
          <p className='ticket__info-header-text'>{`${origin} - ${destination}`}</p>
          <p className='ticket__info-text'>{`${departureTime} - ${arrivalTime}`}</p>
        </div>
        <div className='ticket__info-flight'>
          <p className='ticket__info-header-text'>В пути</p>
          <p className='ticket__info-text'>{convertedDuration}</p>
        </div>
        <div className='ticket__info-flight'>
          <p className='ticket__info-header-text'>{countOfStops(stops)}</p>
          <p className='ticket__info-text'>{stops.join(' ')}</p>
        </div>
      </div>
    </div>
  )
}

export default Segments
