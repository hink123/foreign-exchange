import React from 'react'; 
import './ExchangeRateGraph.css';

const ExchangeRateGraph = (props) => {
    return (
        <div>
            Here is the Graph
            <button onClick={props.handleNewSearch}>New Search</button>
        </div>
    )
}

export default ExchangeRateGraph;