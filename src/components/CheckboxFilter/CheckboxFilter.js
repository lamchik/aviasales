import './CheckboxFilter.css'


function CheckboxFilter(props) {
  const {
    changeValueAllTickets,
    changeValueWithoutTransfer,
    changeValueOneTransfer,
    changeValueTwoTransfer,
    changeValueThreeTransfer
  } = props

  return (
    <form className='checkboxes'>
      <p className='checkboxes__header'>Количество пересадок</p>
      <div className='checkboxes__wrapper'>
        <input className='checkboxes__checkbox' type="checkbox" id='all'  name='valueAllTickets'
               onClick={changeValueAllTickets}/>
        <label htmlFor='all'/>
        <p className='checkboxes__checkbox-text'>Все</p>
      </div>
      <div className='checkboxes__wrapper'>
        <input className='checkboxes__checkbox' type="checkbox" id='0'
               name='valueWithoutTransfer'
               onClick={changeValueWithoutTransfer}/>
        <label htmlFor='0'/>
        <p className='checkboxes__checkbox-text'>Без пересадок</p>
      </div>
      <div className='checkboxes__wrapper'>
        <input className='checkboxes__checkbox' type="checkbox"  id='1' name='valueOneTransfer'
               onClick={changeValueOneTransfer}/>
        <label htmlFor='1'/>
        <p className='checkboxes__checkbox-text'>1 пересадка</p>
      </div>
      <div className='checkboxes__wrapper'>
        <input className='checkboxes__checkbox' type="checkbox" id='2'
               name='valueTwoTransfers'
               onClick={changeValueTwoTransfer}/>
        <label htmlFor='2'/>
        <p className='checkboxes__checkbox-text'>2 пересадки</p>
      </div>
      <div className='checkboxes__wrapper'>
        <input className='checkboxes__checkbox' type="checkbox" id='3'
               name='valueThreeTransfers'
               onClick={changeValueThreeTransfer}/>
        <label htmlFor='3'/>
        <p className='checkboxes__checkbox-text'>3 пересадки</p>
      </div>
    </form>
  )
}

export default CheckboxFilter