import React from "react";
import bonusItems from "./data/bonusItems";

class Bonus extends React.Component {
    render(){
        const {total} = this.props;
        let bonusLevel = 0;
        let bonusList = [];

        switch (true) {
            case (total > 1000):
                bonusLevel = 4;
                break
            case (total > 500):
                bonusLevel = 3;
                break
            case (total > 300):
                bonusLevel = 2;
                break
            case (total > 100):
                bonusLevel = 1;
                break
            }
        
        for (let i = 0; i < bonusLevel; i++){
            bonusList.push(<li>{bonusItems[i]}</li>);  //why does this work; why not //> Error: Unexpected token '<'
        }

        if (bonusLevel === 0){
            return (
                    <>
                    <h3>Bonus</h3>
                    <p>Your donation has qualified you for the following items:</p>
                    </>
                )
        }else{
            return (
                <>
                <h3>Bonus</h3>
                <p>Your donation has qualified you for the following items:</p>
                <ul>
                    {bonusList}
                </ul>
                </>
            )
        }        
    }
}

export default Bonus;