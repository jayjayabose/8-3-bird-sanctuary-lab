import React from "react";
import BirdList from "./BirdList";
/**
 * END NOTE: next step: update cart based on order array
 * stop: button is calling function. it is passing nothing. I tihnk I need to make a form in birds.js
 * progress: made form + onSubmit function; realized I could simply update, then pass arrau in handldAeop
 */

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      order: [] 
    };
  }

  handleAdopt = (order) => {
    this.setState({
      order: order
    })
    console.log(`handleAdopt, order: ${this.state.order}`)
  }

  render(){
    return (
      <div>
        <h1>Hello, world! 2</h1>    
        <h2>test: {this.state.order}</h2>  
        <BirdList
          handleAdopt = {this.handleAdopt}
          order = {this.state.order}
        />
      </div>
    );
  }

}

/*
const App = () => {
  return (
    <div>
      <h1>Hello, world!</h1>      
      <BirdList/>
    </div>
  );
};
*/

export default App;
