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
  const [ticketsForFilter, seTicketsForFilter] = useState([])
  const [timesButtonPressed, setTimesButtonPressed] = useState(0)
  const [filteredCheepTickets, setFilteredCheepTickets] = useState(false)
  const ticketsToRender = tickets.slice(0, 5 + timesButtonPressed * 5)

  useEffect(() => {
    MainApi.getSearchId().then(res => {
      MainApi.getTickets(res.searchId).then(result => {
        setTickets(result.tickets)
        seTicketsForFilter(result.tickets)
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
    setTimesButtonPressed(timesButtonPressed + 1)
  }

  function filterCheepTickets() {
    if (filteredCheepTickets === false) {
      setFilteredCheepTickets(true)
      const price = tickets.map(ticket => (
        ticket.price
      ))
      const minPrice = Math.min(...price)
      const cheepTicket = tickets.filter((ticket) => {
        return ticket.price === minPrice
      })
      setTickets(cheepTicket)
    } else {
      setFilteredCheepTickets(false)
      setTickets(ticketsForFilter)
    }
  }


  return (
    <div className="app">
      <MainLogo/>
      <div className='app__filter-wrapper'>
        <CheckboxFilter/>
        <div className='app__filter'>
          <Filter
            handleFilterCheepTickets={filterCheepTickets}
            filteredCheepTickets={filteredCheepTickets}
          />
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
