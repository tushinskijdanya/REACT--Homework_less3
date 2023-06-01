import Section from "./components/Section";
import novelties from "./data/novelties-data";


function App() {
  const noveltiesElement = novelties.map((card, idx) => <Section card={card} key={idx} />);

  return (
    <div className="container">
      <section className="novelties_cards">
        {noveltiesElement}
      </section>
    </div>
  );
}

export default App;
