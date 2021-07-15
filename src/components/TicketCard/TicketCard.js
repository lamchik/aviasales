import './TicketCard.css'
import transporterLogo from '../../images/transporterLogo.png'

function TicketCard() {
  // const {price} = props
  return (
    <div className='ticket'>
      <div className='ticket__header'>
        <p className='ticket__header-price'>13 400 Р </p>
        <img className='ticket__header-transporter' alt='логотип компании-перевозчика' src={transporterLogo}/>
      </div>
      <div className='ticket__info'>
        <div className='ticket__info-wrap'>
          <div className='ticket__info-flight'>
            <p className='ticket__info-header-text'>MOW – HKT</p>
            <p className='ticket__info-text'>10:45 – 08:00</p>
          </div>
          <div className='ticket__info-flight'>
            <p className='ticket__info-header-text'>В пути</p>
            <p className='ticket__info-text'>21ч 15м</p>
          </div>
          <div className='ticket__info-flight'>
            <p className='ticket__info-header-text'>2 пересадки</p>
            <p className='ticket__info-text'>HKG, JNB</p>
          </div>
        </div>
        <div className='ticket__info-wrap'>
          <div className='ticket__info-flight'>
            <p className='ticket__info-header-text'>MOW – HKT</p>
            <p className='ticket__info-text'>11:20 – 00:50</p>
          </div>
          <div className='ticket__info-flight'>
            <p className='ticket__info-header-text'>В пути</p>
            <p className='ticket__info-text'>13ч 30м</p>
          </div>
          <div className='ticket__info-flight'>
            <p className='ticket__info-header-text'>1 пересадка</p>
            <p className='ticket__info-text'>HKG</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TicketCard