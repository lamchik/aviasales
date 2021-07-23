import './CheckboxFilter.css'


function CheckboxFilter(props) {
  const {
    changeValueAllTickets,
    changeValueWithoutTransfer,
    changeValueOneTransfer,
    changeValueTwoTransfer,
    changeValueThreeTransfer,
    valueAllTickets,
    valueWithoutTransfer,
    valueOneTransfer,
    valueTwoTransfers,
    valueThreeTransfers
  } = props

  return (
    <form className='checkboxes'>
      <p className='checkboxes__header'>Количество пересадок</p>
      <div className='checkboxes__wrapper'>
        <input className='checkboxes__checkbox' type="checkbox" id='all' value={valueAllTickets}
               onClick={changeValueAllTickets}/>
        <label htmlFor='all'/>
        <p className='checkboxes__checkbox-text'>Все</p>
      </div>
      <div className='checkboxes__wrapper'>
        <input className='checkboxes__checkbox' type="checkbox" id='0' value={valueWithoutTransfer}
               onClick={changeValueWithoutTransfer}/>
        <label htmlFor='0'/>
        <p className='checkboxes__checkbox-text'>Без пересадок</p>
      </div>
      <div className='checkboxes__wrapper'>
        <input className='checkboxes__checkbox' type="checkbox" value={valueOneTransfer} id='1'
               onClick={changeValueOneTransfer}/>
        <label htmlFor='1'/>
        <p className='checkboxes__checkbox-text'>1 пересадка</p>
      </div>
      <div className='checkboxes__wrapper'>
        <input className='checkboxes__checkbox' type="checkbox" id='2' value={valueTwoTransfers}
               onClick={changeValueTwoTransfer}/>
        <label htmlFor='2'/>
        <p className='checkboxes__checkbox-text'>2 пересадки</p>
      </div>
      <div className='checkboxes__wrapper'>
        <input className='checkboxes__checkbox' type="checkbox" id='3' value={valueThreeTransfers}
               onClick={changeValueThreeTransfer}/>
        <label htmlFor='3'/>
        <p className='checkboxes__checkbox-text'>3 пересадки</p>
      </div>
    </form>
  )
}

export default CheckboxFilter