import Card from "./components/Card";
import data from "./components/data";
import "./App.css";

function App() {
 const placeCards = data.map(place => {
  return (
    <Card title ={place.title} location = {place.location} imageUrl={place.imageUrl}/>
  )
 })

  return (
    <div>
    { placeCards }
      </div>
  )

  }
export default App;
