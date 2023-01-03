import Card from "./components/Card";
import Header from "./components/Header";
import data from "./components/data";
import "./App.css";

function App() {
  const placeCards = data.map((place) => {
    return (
      <div>
        <Card
          key={place.id}
          location={place.location}
          title={place.title}
          map={place.googleMapsUrl}
          startDate={place.startDate}
          endDate={place.endDate}
          description={place.description}
          imageUrl={place.imageUrl}
        />
      </div>
    );
  });

  return (
    <div>
      <Header />
      <section className="page--cards">{placeCards}</section>
    </div>
  );
}
export default App;
