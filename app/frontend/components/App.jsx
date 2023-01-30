import React from 'react';
import Fact from "./Fact";
import AnimalSelection from './AnimalSelection';

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
      <div>
        Facts
        <AnimalSelection animal={animal} onChange={setAnimal} />
        <input value={factAmount} onChange={e => setFactAmount(e.target.value)} />
        {data.map(fact => <Fact key={fact.id} fact={fact} />
        )}
      </div>
    );
  } else {
    return (<div>LOADING...</div>)
  }
}

export default App;