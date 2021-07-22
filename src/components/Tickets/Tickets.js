import './Tickets.css'
import TicketCard from "../TicketCard/TicketCard";

function Tickets(props) {
  const {tickets} = props

  const ticket = tickets.map((ticket, i) => (
    <TicketCard
      key={i}
      ticket={ticket}
    />
  ))

  return (
    <div>{ticket}</div>
  )
}

export default Tickets