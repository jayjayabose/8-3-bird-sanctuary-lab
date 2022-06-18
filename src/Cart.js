import React from "react";
import birdData from "./data/birds";
import Bonus from "./Bonus";

class Cart extends React.Component {

    render(){
        const {order} = this.props;
        let total = 0;
        let discount = (order.length >= 3) ? 10 : 0;

        //console.log(`App.render: order: ${order}`)
        //console.log(`Cart.render: order.length: ${order.length}`)
        //console.log(`Cart.render: order[4]: ${order[4]}`)

        let birdListItems = order.map(birdName => {            
            let price = birdData.find(obj => obj.name === birdName).amount;
            total += price;            
            return (<li>{birdName} ${price}</li>)
        })

        return (
            <>
                <h3>Cart</h3>                
                <h4>Discount: {discount}%</h4>
                <h4>Total: ${total}</h4>                
                <ol>{birdListItems}</ol>      
                <Bonus
                    total = {total}
                />          
            </>
            
        )
    }
}

export default Cart;