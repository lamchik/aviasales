import './App.css';
import MainLogo from '../MainLogo/MainLogo'
import Filter from '../Filter/Filter'
import TicketCard from "../TicketCard/TicketCard";
import CheckboxFilter from "../CheckboxFilter/CheckboxFilter";
import ButtonMore from "../ButtonMore/ButtonMore";
import MainApi from "../../utils/MainApi";
import Tickets from "../Tickets/Tickets";
import {useEffect, useState} from "react";

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    console.log('HERE')
    MainApi.getSearchId().then(res => {
      console.log(res.searchId)
      MainApi.getTickets(res.searchId).then(result => {
        setItems(result.tickets)
        console.log(result.tickets)
        console.log(items)
      })
        .catch((err) => {
          console.log(err)
        })
    })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="app">
      <MainLogo/>
      <div className='app__filter-wrapper'>
        <CheckboxFilter/>
        <div className='app__filter'>
          <Filter/>

          <Tickets
            array={items}
          />
          <ButtonMore/>
        </div>
      </div>
    </div>
  );
}

export default App;
