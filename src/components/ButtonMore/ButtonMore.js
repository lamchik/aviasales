import './ButtonMore.css'

function ButtonMore(props) {
  const {handleClick, isVisibleButton} = props

  return (
    <button className={`button ${isVisibleButton ? '' :'button_invisible' }`} onClick={handleClick}>
      Показать еще 5 билетов!
    </button>
  )
}

export default ButtonMore