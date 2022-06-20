import React from "react"

class Birds extends React.Component {
    //pushes name to order, then calls handleAdopt to update App.state
    handleSubmit = (event) => {
        event.preventDefault();
        let {name} = event.target; //should I get this from props?
        const { order, handleAdopt } = this.props
        order.unshift(name.value);
        handleAdopt(order);
    }

    render() {
        const { name, img, amount, handleAdopt } = this.props        
        return(
            <div class = "birdCard">
                
                <b>{name}</b>
                <img src={img} width='125'></img>
                <h4>price: ${amount}</h4>   
                <form onSubmit={this.handleSubmit}>
                    <input type="hidden" name="name" value={name}/>
                    <input type="submit" value="Adopt" />
                </form>
            </div>
        )
    }
}

export default Birds;