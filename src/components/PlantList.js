import React from "react";
import PlantCard from "./PlantCard";

function PlantList(props) {
  console.log(props.plants.name)
  return (
    <PlantCard>
      <ul className="cards" name={props.plants.name} image={props.plants.image} price={props.plants.price} />
      </PlantCard>
  );
}

export default PlantList;
