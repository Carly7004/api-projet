import {  useState } from "react";
import "./App.css";
import Card from "./Card";


function App() {
  const [apiData, setApiData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const dataJson = await response.json();
    setApiData(dataJson);
    console.log(apiData);
  };

  // useEffect((e) => {
  //   getData()
  // }, [])

  return (
    <div className="App">
      <button onClick={getData}>Get Json</button>
      <div className="content">
        {apiData.map((data, index) => {
          return (
            <Card data={data}/>
          );
        })}
      </div>
    </div>
  );
}

export default App;
