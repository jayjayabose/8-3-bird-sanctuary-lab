/**
 * DIRECTION: https://github.com/joinpursuit/Pursuit-Core-Web/tree/master/react/props_and_component_structure
 * follow the ProductPage.js model; function calling an object

 * 
 */

import birdData from "./data/birds";
import Birds from "./Birds";





const BirdList = (props) => {
    const {handleAdopt, order} = props;
    //console.log(handleAdopt)

    let birds = birdData.map(bird => {
        return (
            //<li>{bird.name}</li>
            <Birds
                name = {bird.name}
                img = {bird.img}
                amount = {bird.amount}
                handleAdopt = {handleAdopt}
                order = {order}
            />
        )
    });


    return (
      <div>
        <h2>BirdList</h2>      
            <ul>
                {birds}
            </ul>
      </div>
    );
  };
  
  export default BirdList;
  