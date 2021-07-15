import './App.css';
import MainLogo from '../MainLogo/MainLogo'
import Filter from '../Filter/Filter'
import TicketCard from "../TicketCard/TicketCard";
import CheckboxFilter from "../CheckboxFilter/CheckboxFilter";
import ButtonMore from "../ButtonMore/ButtonMore";
// import Tickets from "../Tickets/Tickets";

function App() {
  return (
    <div className="app">
      <MainLogo/>
      <div className='app__filter-wrapper'>
        <CheckboxFilter/>
        <div className='app__filter'>
          <Filter/>
          <TicketCard/>
          <TicketCard/>
          <TicketCard/>
          <TicketCard/>
          {/*<Tickets/>*/}
          <ButtonMore/>
        </div>
      </div>
    </div>
  );
}

export default App;
