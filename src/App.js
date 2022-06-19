import React from "react";
import BirdList from "./BirdList";
import Cart from "./Cart"
import Checkout from "./Checkout";
/**
 * END NOTE: all user stories satisfied; tests fail, perhaps b/c component naming  
 * bonus logic is working, now write the correct output
 * order update reaches cart succeessfully; build cart display
 * next step: update cart based on order array // created cart copmonent. chased my tail for an hour b/c order did not seem to update in JSX
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

  //Adopt button event handler
  handleAdopt = (order) => {
    this.setState({
      order: order
    })
  }

  //Checkout submit event handler
  handleCheckout = () => {
    this.setState({
      order:[]
    })
  }

  render(){
    return (
      <div>
        <h1>App</h1>    
        <Cart
          order = {this.state.order}
        />
        <Checkout
          handleCheckout = {this.handleCheckout}
        />
        <BirdList
          handleAdopt = {this.handleAdopt}
          order = {this.state.order}
        />
      </div>
    );
  }

}

export default App;
