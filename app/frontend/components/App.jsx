import React from 'react';
import Fact from "./Fact";
import AnimalSelection from './AnimalSelection';
import FactContainer from './FactContainer';
import './container.css'

const App = () => {
  const [data, setData] = React.useState([]);
  const [animal, setAnimal] = React.useState("cat");
  const [factAmount, setFactAmount] = React.useState(5);

  const optionsCondensed = [`animal=${animal}`, `amount=${factAmount}`].join("&")
  React.useEffect(() => {
    fetch(`/api/v1/facts?${optionsCondensed}`)
    .then((res) => res.json())
    .then((data) => data.map((fact) => JSON.parse(fact)))
    .then((data) => setData(data));
  }, [animal, factAmount]);

  if (data) {
    return (
      <main>
      <h1>Fact Finder</h1>

      <div className="grid-container grid-x grid-padding-x">
        <div className="medium-6 cell">
          <AnimalSelection animal={animal} onChange={setAnimal} />
        </div>

        <div className="medium-6 cell">
          <label>Number of Facts
            <input value={factAmount} onChange={e => setFactAmount(e.target.value)} type="number" />
          </label>
        </div>
      </div>

      <h3>Displayed Facts</h3>
      <FactContainer>
        {data.map(fact => <Fact key={fact.id} fact={fact} />)}
      </FactContainer>
      </main>
    );
  } else {
    return (<div>LOADING...</div>)
  }
}

export default App;