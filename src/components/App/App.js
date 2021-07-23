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
  const [ticketsFilteredByPrice, setTicketsFilteredByPrice] = useState(false)
  const [ticketsFilteredByDuration, setTicketsFilteredByDuration] = useState(false)
  const [ticketsFilteredByPriceAndDuration, setTicketsFilteredByPriceAndDuration] = useState(false)
  const ticketsToRender = tickets.slice(0, 5 + timesButtonPressed * 5)
  const segments = ticketsForFilter.map(ticket => (
    ticket.segments
  ))

  function compareNumbers(a, b) {
    return a - b;
  }

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

  function filterByPrice() {
    if (ticketsFilteredByPrice === false && ticketsFilteredByDuration === false) {
      setTicketsFilteredByPrice(true)
      const price = tickets.map(ticket => (
        ticket.price
      ))
      const minPrice = Math.min(...price)
      const cheepTicket = tickets.filter((ticket) => {
        return ticket.price === minPrice
      })
      setTickets(cheepTicket)
    } else if (ticketsFilteredByPrice === false && ticketsFilteredByDuration === true) {
      setTicketsFilteredByDuration(false)
      setTicketsFilteredByPrice(true)
      setTickets(ticketsForFilter)
      console.log(tickets)
      const price = ticketsForFilter.map(ticket => (
        ticket.price
      ))
      const minPrice = Math.min(...price)
      const cheepTicket = ticketsForFilter.filter((ticket) => {
        return ticket.price === minPrice
      })
      setTickets(cheepTicket)
    } else {
      setTicketsFilteredByPrice(false)
      setTickets(ticketsForFilter)
    }
  }

  function filterByDuration() {
    if (ticketsFilteredByDuration === false && ticketsFilteredByPrice === false) {
      setTicketsFilteredByDuration(true)
      const segment = segments.map(segment => (
        (segment[0].duration + segment[1].duration)
      ))
      const minDuration = (Math.min(...segment))
      const fastestTicket = ticketsForFilter.filter((ticket) => {
        return minDuration === ticket.segments[0].duration + ticket.segments[1].duration
      })
      setTickets(fastestTicket)
    } else if (ticketsFilteredByDuration === false && ticketsFilteredByPrice === true) {
      setTicketsFilteredByPrice(false)
      setTicketsFilteredByDuration(true)
      const segment = segments.map(segment => (
        (segment[0].duration + segment[1].duration)
      ))
      const minDuration = (Math.min(...segment))
      const fastestTicket = ticketsForFilter.filter((ticket) => {
        return minDuration === ticket.segments[0].duration + ticket.segments[1].duration
      })
      setTickets(fastestTicket)
    } else {
      setTicketsFilteredByDuration(false)
      setTickets(ticketsForFilter)
    }
  }

  function filterByPriceAndDuration() {
    if (
      ticketsFilteredByPrice === false &&
      ticketsFilteredByDuration === false &&
      ticketsFilteredByPriceAndDuration === false
    ) {
      setTicketsFilteredByPriceAndDuration(true)
      const segment = segments.map(segment => (
        (segment[0].duration + segment[1].duration)
      ))
      const slice = segment.sort(compareNumbers).slice(0, 10)
      const filter = ticketsForFilter.filter((ticket) => {
        function isTrue(a) {
          return a === ticket.segments[0].duration + ticket.segments[1].duration
        }

        return slice.some(isTrue)
      })
      const price = filter.map(ticket => (
        ticket.price
      ))
      const minPrice = Math.min(...price)
      const optimalTicket = ticketsForFilter.filter((ticket) => {
        return ticket.price === minPrice
      })
      setTickets(optimalTicket)
    } else if (
      ticketsFilteredByPrice === true &&
      ticketsFilteredByDuration === false &&
      ticketsFilteredByPriceAndDuration === false
    ) {
      setTicketsFilteredByPrice(false)
      setTicketsFilteredByPriceAndDuration(true)
      const segment = segments.map(segment => (
        (segment[0].duration + segment[1].duration)
      ))
      const slice = segment.sort(compareNumbers).slice(0, 10)
      console.log(ticketsForFilter)
      const filter = ticketsForFilter.filter((ticket) => {
        function isTrue(a) {
          return a === ticket.segments[0].duration + ticket.segments[1].duration
        }

        return slice.some(isTrue)
      })
      const price = filter.map(ticket => (
        ticket.price
      ))
      const minPrice = Math.min(...price)
      const optimalTicket = ticketsForFilter.filter((ticket) => {
        return ticket.price === minPrice
      })
      setTickets(optimalTicket)
    } else if (
      ticketsFilteredByPrice === false &&
      ticketsFilteredByDuration === true &&
      ticketsFilteredByPriceAndDuration === false
    ) {
      setTicketsFilteredByDuration(false)
      setTicketsFilteredByPriceAndDuration(true)
      const segment = segments.map(segment => (
        (segment[0].duration + segment[1].duration)
      ))
      const slice = segment.sort(compareNumbers).slice(0, 10)
      console.log(ticketsForFilter)
      const filter = ticketsForFilter.filter((ticket) => {
        function isTrue(a) {
          return a === ticket.segments[0].duration + ticket.segments[1].duration
        }

        return slice.some(isTrue)
      })
      const price = filter.map(ticket => (
        ticket.price
      ))
      const minPrice = Math.min(...price)
      const optimalTicket = ticketsForFilter.filter((ticket) => {
        return ticket.price === minPrice
      })
      setTickets(optimalTicket)
    } else if (ticketsFilteredByPriceAndDuration === true) {
      setTicketsFilteredByPriceAndDuration(false)
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
            handleFilterByPrice={filterByPrice}
            filteredByPrice={ticketsFilteredByPrice}
            handleFilterByDuration={filterByDuration}
            filteredByDuration={ticketsFilteredByDuration}
            handleFilterByPriceAndDuration={filterByPriceAndDuration}
            filteredByPriceAndDuration={ticketsFilteredByPriceAndDuration}
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
