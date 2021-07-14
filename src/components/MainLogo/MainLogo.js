import mainLogo from '../../images/Logo.svg'
import './MainLogo.css'

function MainLogo() {

  return (
    <div className='logo'>
      <img alt='plane' src={mainLogo}/>
    </div>
  )
}

export default MainLogo