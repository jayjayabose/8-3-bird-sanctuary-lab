import birdData from "./data/birds";
import Birds from "./Birds";
import './App.css'; 


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
      <div class="birdList">
        {birds}
      </div>
    );
  };
  
  export default BirdList;
  