import React,{ useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants]=useState('')
  const url='http://localhost:3000/plants'

  useEffect(() =>{
    fetch(url)
    .then (resp =>resp.json())
    .then (data =>{
      

      setPlants(data)
      
      //console.log(plants.name)
    })
    
    

    // const palntsOutput = setPlants(data).map ((plant) =>{
    //   return <PlantPage key={plant.id} name={plant.name} image={plant.image} price={plant.price}/>;
    // })


  },[])
  




  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} />
    </div>
  );
}

export default App;
