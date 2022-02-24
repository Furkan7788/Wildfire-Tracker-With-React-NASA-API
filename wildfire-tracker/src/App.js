import Map from "./components/Map";
import {useState, useEffect} from 'react'
function App() {
  const [eventData, setEventData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events');
      const {events} = await res.json();
      setEventData(events);
      setLoading(false);
    }
    await fetchEvents();
  }, [])

  return (
    <div className="App">
      {console.log(eventData)}
     {eventData ? <Map eventData = {eventData}></Map> : "Loading.."}
    </div>
  );
}

export default App;
