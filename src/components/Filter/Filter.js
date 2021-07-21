import './Filter.css'

function Filter(props) {
  const {handleFilterCheepTickets, filteredCheepTickets} = props

  const filterOfCheepTickets = filteredCheepTickets ? 'filter__text-wrap_blue' : ''
  const textButtonOfCheepTickets = filteredCheepTickets ? 'filter__text_white' : ''


  return (
    <div className='filter'>
      <button className={`filter__text-wrap ${filterOfCheepTickets}`} onClick={handleFilterCheepTickets}>
        <p className={`filter__text ${textButtonOfCheepTickets}`}>Самый дешевый</p>
      </button>
      <button className='filter__text-wrap'>
        <p className='filter__text'>Самый быстрый</p>
      </button>
      <button className='filter__text-wrap'>
        <p className='filter__text'>Оптимальный</p>
      </button>
    </div>
  )
}

export default Filter