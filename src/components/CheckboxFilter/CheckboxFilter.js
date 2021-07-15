import './CheckboxFilter.css'

function CheckboxFilter() {
  return (
    <form className='checkboxes'>
      <p className='checkboxes__header'>Количество пересадок</p>
      <div className='checkboxes__wrapper'>
        <input className='checkboxes__checkbox' type="checkbox" value='Все' id='all'/>
        <label for='all'></label>
        <p className='checkboxes__checkbox-text'>Все</p>
      </div>
      <div className='checkboxes__wrapper'>
        <input className='checkboxes__checkbox' type="checkbox" id='0'/>
        <label htmlFor='0'></label>
        <p className='checkboxes__checkbox-text'>Без пересадок</p>
      </div>
      <div className='checkboxes__wrapper'>
        <input className='checkboxes__checkbox' type="checkbox" id='1'/>
        <label htmlFor='1'></label>
        <p className='checkboxes__checkbox-text'>1 пересадка</p>
      </div>
      <div className='checkboxes__wrapper'>
        <input className='checkboxes__checkbox' type="checkbox" id='2'/>
        <label htmlFor='2'></label>
        <p className='checkboxes__checkbox-text'>2 пересадки</p>
      </div>
      <div className='checkboxes__wrapper'>
        <input className='checkboxes__checkbox' type="checkbox" id='3'/>
        <label htmlFor='3'></label>
        <p className='checkboxes__checkbox-text'>3 пересадки</p>
      </div>
    </form>
  )
}

export default CheckboxFilter