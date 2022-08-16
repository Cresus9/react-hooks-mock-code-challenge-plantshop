import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants}) {
  console.log(plants)

  // const list= plants.map((plant) =>{
  //   return (<PlantList name={plant.name} image={plant.image} price={plant.price} />)
  //  })

  return (
    <main>
      <NewPlantForm />
      <Search />
    <PlantList name={plants[0].name} image={plants[0].image} price={plants[0].price} />
    <PlantList name={plants[1].name} image={plants[1].image} price={plants[1].price} />
    <PlantList name={plants[2].name} image={plants[2].image} price={plants[2].price} />
    <PlantList name={plants[3].name} image={plants[3].image} price={plants[3].price} />
    <PlantList name={plants[4].name} image={plants[4].image} price={plants[4].price} />
    <PlantList name={plants[5].name} image={plants[5].image} price={plants[5].price} />
    <PlantList name={plants[6].name} image={plants[6].image} price={plants[6].price} />
   

    </main>
  );
}

export default PlantPage;
