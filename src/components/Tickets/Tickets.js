import './Tickets.css'
import TicketCard from "../TicketCard/TicketCard";

function Tickets(props) {
  const {array} = props
  console.log(array)

  const ticket = array.map((ticket) => (
    // console.log(ticket.segments[0].origin)
    <TicketCard
      price={ticket.price}
      // carrier={ticket.carrier}
      origin={ticket.segments[0].origin}
      destination={ticket.segments[0].destination}
      stops={ticket.segments[0].stops}
      time={ticket.segments[0].date}
      duration={ticket.segments[0].duration}

      originBack={ticket.segments[1].origin}
      destinationBack={ticket.segments[1].destination}
      timeOfReturn={ticket.segments[1].date}
      durationOfReturn={ticket.segments[1].duration}
      stopsOnTheWayBack={ticket.segments[1].stops}
    />
  ))

  return (
    <div>{ticket}</div>
  )

}

export default Tickets