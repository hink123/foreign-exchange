import React from 'react'; 
import CanvasJS from '../../services/canvasjs.react';
import './ExchangeRateGraph.css';

const ExchangeRateGraph = (props) => {

    const createGraph = () => {

        var chart = new CanvasJS.Chart("chartContainer", {
            title:{
                text: "My First Chart in CanvasJS"              
            },
            data: [              
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "column",
                dataPoints: [
                    { label: "apple",  y: 10  },
                    { label: "orange", y: 15  },
                    { label: "banana", y: 25  },
                    { label: "mango",  y: 30  },
                    { label: "grape",  y: 28  }
                ]
            }
            ]
        });
        chart.render();
    }

    return (
        <div>
            <h1>Here is the graph</h1>
            <button onClick={props.handleNewSearch}>New Search</button>
        </div>
    )
}

export default ExchangeRateGraph;