import './App.css';
import MainLogo from '../MainLogo/MainLogo'
import Filter from '../Filter/Filter'
import CheckboxFilter from "../CheckboxFilter/CheckboxFilter";
import ButtonMore from "../ButtonMore/ButtonMore";
import MainApi from "../../utils/MainApi";
import Tickets from "../Tickets/Tickets";
import {useCallback, useEffect, useState} from "react";

function App() {
  const [tickets, setTickets] = useState([])
  const [ticketsForFilter, seTicketsForFilter] = useState([])
  const [timesButtonPressed, setTimesButtonPressed] = useState(0)
  const [ticketsFilteredByPrice, setTicketsFilteredByPrice] = useState(false)
  const [ticketsFilteredByDuration, setTicketsFilteredByDuration] = useState(false)
  const [ticketsFilteredByPriceAndDuration, setTicketsFilteredByPriceAndDuration] = useState(false)
  const [checkedTickets, setCheckedTickets] = useState(
    {
      valueAllTickets: false,
      valueWithoutTransfer: false,
      valueOneTransfer: false,
      valueTwoTransfers: false,
      valueThreeTransfers: false
    })

  let filteredTickets = tickets.filter((ticket) => {
    return (checkedTickets.valueWithoutTransfer && ticket.segments[0].stops.length + ticket.segments[1].stops.length === 0)
      || (checkedTickets.valueOneTransfer && ticket.segments[0].stops.length + ticket.segments[1].stops.length === 1)
      || (checkedTickets.valueTwoTransfers && ticket.segments[0].stops.length + ticket.segments[1].stops.length === 2)
      || (checkedTickets.valueThreeTransfers && ticket.segments[0].stops.length + ticket.segments[1].stops.length === 3)
      || (checkedTickets.valueAllTickets && ticket.segments[0].stops.length + ticket.segments[1].stops.length >= 0)
      ||(
        !checkedTickets.valueWithoutTransfer &&
        !checkedTickets.valueOneTransfer &&
        !checkedTickets.valueTwoTransfers &&
        !checkedTickets.valueThreeTransfers &&
        !checkedTickets.valueAllTickets  &&
        ticket.segments[0].stops.length + ticket.segments[1].stops.length >= 0
      )
  })

  const ticketsToRender = filteredTickets.slice(0, 5 + timesButtonPressed * 5)

  console.log('ticketsToRender', ticketsToRender, 'filteredTickets', filteredTickets, 'tickets', tickets)

  const changeValueOneTransfer = useCallback(
    (e) => {
      setCheckedTickets({
          ...checkedTickets, [e.target.name]: !checkedTickets[e.target.name]
        }
      )
    },
    [checkedTickets]
  )


  console.log('from function', checkedTickets)


  //for finding most cheep ticket
  const segments = filteredTickets.map(ticket => (
    ticket.segments
  ))
  const price = filteredTickets.map(ticket => (
    ticket.price
  ))
  const minPrice = Math.min(...price)
  const cheepTicket = filteredTickets.filter((ticket) => {
    return ticket.price === minPrice
  })

  //for finding most fast ticket
  const segment = segments.map(segment => (
    (segment[0].duration + segment[1].duration)
  ))
  const minDuration = (Math.min(...segment))
  const fastestTicket = filteredTickets.filter((ticket) => {
    return minDuration === ticket.segments[0].duration + ticket.segments[1].duration
  })

  //for finding optimal ticket
  function compareNumbers(a, b) {
    return a - b;
  }

  const fastestTickets = segment.sort(compareNumbers).slice(0, 10)
  const duration = filteredTickets.filter((ticket) => {
    function isTrue(number) {
      return number === ticket.segments[0].duration + ticket.segments[1].duration
    }
    return fastestTickets.some(isTrue)
  })
  const pricesOfFastestTickets = duration.map(ticket => (
    ticket.price
  ))
  const minPriceOfFastTickets = Math.min(...pricesOfFastestTickets)
  const optimalTicket = filteredTickets.filter((ticket) => {
    return ticket.price === minPriceOfFastTickets
  })

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
    if (
      ticketsFilteredByPrice === false &&
      ticketsFilteredByDuration === false &&
      ticketsFilteredByPriceAndDuration === false
    ) {
      setTicketsFilteredByPrice(true)
      setTickets(cheepTicket)
    } else if (
      ticketsFilteredByPrice === false &&
      ticketsFilteredByDuration === true &&
      ticketsFilteredByPriceAndDuration === false
    ) {
      setTicketsFilteredByDuration(false)
      setTicketsFilteredByPrice(true)
      setTickets(ticketsForFilter)
      setTickets(cheepTicket)
    } else if (
      ticketsFilteredByPrice === false &&
      ticketsFilteredByDuration === false &&
      ticketsFilteredByPriceAndDuration === true
    ) {
      setTicketsFilteredByPriceAndDuration(false)
      setTicketsFilteredByPrice(true)
      setTickets(ticketsForFilter)
      setTickets(cheepTicket)
    } else {
      setTicketsFilteredByPrice(false)
      setTickets(ticketsForFilter)
    }
  }

  function filterByDuration() {
    if (
      ticketsFilteredByDuration === false &&
      ticketsFilteredByPrice === false &&
      ticketsFilteredByPriceAndDuration === false
    ) {
      setTicketsFilteredByDuration(true)

      setTickets(fastestTicket)
    } else if (
      ticketsFilteredByDuration === false &&
      ticketsFilteredByPrice === true &&
      ticketsFilteredByPriceAndDuration === false
    ) {
      setTicketsFilteredByPrice(false)
      setTicketsFilteredByDuration(true)
      setTickets(fastestTicket)
    } else if (
      ticketsFilteredByDuration === false &&
      ticketsFilteredByPrice === false &&
      ticketsFilteredByPriceAndDuration === true
    ) {
      setTicketsFilteredByPriceAndDuration(false)
      setTicketsFilteredByDuration(true)
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
      setTickets(optimalTicket)
    } else if (
      ticketsFilteredByPrice === true &&
      ticketsFilteredByDuration === false &&
      ticketsFilteredByPriceAndDuration === false
    ) {
      setTicketsFilteredByPrice(false)
      setTicketsFilteredByPriceAndDuration(true)
      setTickets(optimalTicket)
    } else if (
      ticketsFilteredByPrice === false &&
      ticketsFilteredByDuration === true &&
      ticketsFilteredByPriceAndDuration === false
    ) {
      setTicketsFilteredByDuration(false)
      setTicketsFilteredByPriceAndDuration(true)
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
        <CheckboxFilter
          changeValueOneTransfer={changeValueOneTransfer}
          changeValueTwoTransfer={changeValueOneTransfer}
          changeValueThreeTransfer={changeValueOneTransfer}
          changeValueWithoutTransfer={changeValueOneTransfer}
          changeValueAllTickets={changeValueOneTransfer}
        />
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
            isVisibleButton={ticketsToRender.length < filteredTickets.length}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
