import React, { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([{ name: "Philipp", surname: "Timokhin" }]);

  const [names, setNames] = useState("");
  const [surnames, setSurnames] = useState("");

  const enabled = surnames.length > 0 && names.length > 0;

  const total = list.length;

  const clearInputs = () => {
    setNames("");
    setSurnames("");
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setList((list) => [...list, { name: names, surname: surnames }]);
    // setList([...list, { surname: names }]);
    // setList(list.concat({ surname: names }));
    // setList((list) => list.concat({ surname: names }));
    clearInputs();
  };

  const handleChangeValue = (e, i) => {
    const { result } = e.target.value;
    const value = [...list];
    value[i].surname = result;
    value[i].name = result;
    setList(value);
  };

  const handleOnDelete = (name) => {
    const remove = list.filter((item) => item.name !== name);
    setList(remove);
  };

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <input
          className="Input"
          placeholder="Your Name"
          type="text"
          value={names}
          onChange={(event) => setNames(event.target.value)}
        />
        <input
          className="Input"
          placeholder="Your surname"
          type="text"
          value={surnames}
          onChange={(event) => setSurnames(event.target.value)}
        />
        <button disabled={!enabled}>submit</button>
        <p>Total contacts: {total}</p>
      </form>
      {list.map((item, i) => (
        <ul key={item.name}>
          <li>
            <input
              type="text"
              value={item.surname}
              onChange={(e) => handleChangeValue(e, i)}
            />
            <input
              type="text"
              value={item.name}
              onChange={(e) => handleChangeValue(e, i)}
            />
          </li>
          <button onClick={() => handleOnDelete(item.name)}>delete</button>
        </ul>
      ))}
    </div>
  );
}

export default App;
