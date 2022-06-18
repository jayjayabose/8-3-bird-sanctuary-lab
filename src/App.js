import React from "react";
import BirdList from "./BirdList";
import Cart from "./Cart"
/**
 * END NOTE: bonus logic is working, now write the correct output
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
    console.log(`App.handleAdopt: order: ${this.state.order}`)
  }

  render(){
    console.log(`App.render: order: ${this.state.order}`)
    console.log(`App.render: typeof order: ${typeof this.state.order}`)
    console.log(`App.render: order.length: ${this.state.order.length}`)
    console.log(`App.render: order[1]: ${this.state.order[1]}`)
    console.log(`App.render: test: ${this.state.test}`)
    return (
      <div>
        <h1>Hello, world! 2</h1>    

        <Cart
          order = {this.state.order}
        />
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
