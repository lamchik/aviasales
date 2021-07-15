import './Filter.css'

function Filter() {

  return (
    <div className='filter'>
      <div className='filter__text-wrap'>
        <p className='filter__text filter__text_white'>Самый дешевый</p>
      </div>
      <div className='filter__text-wrap'>
        <p className='filter__text'>Самый быстрый</p>
      </div>
      <div className='filter__text-wrap'>
        <p className='filter__text'>Оптимальный</p>
      </div>
    </div>
  )
}

export default Filter