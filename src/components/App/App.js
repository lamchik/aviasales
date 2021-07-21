import './App.css';
import MainLogo from '../MainLogo/MainLogo'
import Filter from '../Filter/Filter'
import CheckboxFilter from "../CheckboxFilter/CheckboxFilter";
import ButtonMore from "../ButtonMore/ButtonMore";
import MainApi from "../../utils/MainApi";
import Tickets from "../Tickets/Tickets";
import {useEffect, useState} from "react";

function App() {
  const [tickets, setTickets] = useState([])
  const [timesButtonPressed, setTimesButtonPressed] = useState(0)
  const ticketsToRender = tickets.slice(0, 5 + timesButtonPressed*5)

  useEffect(() => {
    MainApi.getSearchId().then(res => {
      MainApi.getTickets(res.searchId).then(result => {
        setTickets(result.tickets)
      })
        .catch((err) => {
          console.log(err)
        })
    })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  function handleClick() {
    setTimesButtonPressed(timesButtonPressed+1)
  }

  return (
    <div className="app">
      <MainLogo/>
      <div className='app__filter-wrapper'>
        <CheckboxFilter/>
        <div className='app__filter'>
          <Filter/>
          <Tickets
            tickets={ticketsToRender}
          />
          <ButtonMore
            handleClick={handleClick}
            isVisibleButton={ticketsToRender.length < tickets.length}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
