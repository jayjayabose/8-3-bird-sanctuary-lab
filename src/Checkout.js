import React from "react";

class Checkout extends React.Component{
    constructor(){
        super();
        this.state = {
            fname: '',
            lname: '',
            email: '',
            zip: ''
        }
    }

    handleTextInput = (event) => { 
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {                        
        const {fname, lname, email, zip} = this.state;
        const {handleCheckout} = this.props;
        
        if (fname !== '' && lname !== '' && email !== '' && zip !== '' ) {
            alert('You have adopted birds. Thank you!');            
            const {handleCheckout} = this.props;
            handleCheckout()
        }else{
            event.preventDefault(); 
        }
    }

    render(){
        return (
           <>
            <h2>Checkout</h2>
            <form onSubmit={this.handleSubmit}>
                <label for="fname">First Name:</label>
                <input type="text" name="fname" value={this.fname} onChange={this.handleTextInput}/>

                <label for="lname">Last Name:</label>
                <input type="text" name="lname" value={this.lname} onChange={this.handleTextInput}/>

                <label for="email">Email:</label>
                <input type="text" name="email" value={this.email} onChange={this.handleTextInput}/>

                <label for="zip">Zip Code:</label>
                <input type="text" name="zip" value={this.zip} onChange={this.handleTextInput}/>

                <input type="submit" value="submit"/>
            </form> 
           </>
        )
    }
}

export default Checkout;