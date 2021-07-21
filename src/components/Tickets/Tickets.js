import './Tickets.css'
import TicketCard from "../TicketCard/TicketCard";

function Tickets(props) {
  const {array} = props
  console.log(array)

  const ticket = array.map((ticket) => (
    <TicketCard
      ticket={ticket}
    />
  ))

  return (
    <div>{ticket}</div>
  )
}

export default Tickets