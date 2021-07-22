import './Filter.css'

function Filter(props) {
  const {handleFilterByPrice, filteredByPrice, handleFilterByDuration, filteredByDuration} = props

  const isFilterByPriceActive = filteredByPrice ? 'filter__text-wrap_blue' : ''
  const isTextOfFilterByPriceActive = filteredByPrice ? 'filter__text_white' : ''
  const isFilterByDurationActive = filteredByDuration ? 'filter__text-wrap_blue' : ''
  const isTextOfFilterByDurationActive = filteredByDuration ? 'filter__text_white' : ''


  return (
    <div className='filter'>
      <button className={`filter__text-wrap ${isFilterByPriceActive}`} onClick={handleFilterByPrice}>
        <p className={`filter__text ${isTextOfFilterByPriceActive}`}>Самый дешевый</p>
      </button>
      <button className={`filter__text-wrap ${isFilterByDurationActive}`} onClick={handleFilterByDuration}>
        <p className={`filter__text ${isTextOfFilterByDurationActive}`}>Самый быстрый</p>
      </button>
      <button className='filter__text-wrap'>
        <p className='filter__text'>Оптимальный</p>
      </button>
    </div>
  )
}

export default Filter