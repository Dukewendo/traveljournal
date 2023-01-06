import Card from "./components/Card";
import Header from "./components/Header";
import data from "./components/data";
import "./App.css";

function App() {
  const placeCards = data.map((place) => {
    return (
      <div>
        <Card key={place.id} {...place} />
      </div>
    );
  });

  return (
    <div>
      <Header />
      <div>{placeCards}</div>
    </div>
  );
}
export default App;
