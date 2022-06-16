import React from "react"


class Birds extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        let {name} = event.target;
        const { order, handleAdopt } = this.props
        order.push(name.value);
        handleAdopt(order);
        //console.log(`handlSubmit: ${order}`)
    }

    render() {
        const { name, img, amount, handleAdopt } = this.props        
        return(
            <>
                <li>name: {name}</li>
                <li><img src={img} width='250'></img></li>
                <li>price: {amount}</li>   
                <form onSubmit={this.handleSubmit}>
                    <input type="hidden" name="name" value={name}/>
                    <input type="submit" value="Adopt" />
                </form>
            </>            
        )
    }
}

export default Birds;