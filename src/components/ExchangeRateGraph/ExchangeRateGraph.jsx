import React from 'react'; 
import CanvasJSReact from '../../services/canvasjs.react';
import './ExchangeRateGraph.css';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ExchangeRateGraph = (props) => {

    const options = {
        title: {
          text: "Basic Column Chart in React"
        },
        data: [{				
                  type: "line",
                  dataPoints: [
                      { label: "Apple",  y: 10  },
                      { label: "Orange", y: 15  },
                      { label: "Banana", y: 25  },
                      { label: "Mango",  y: 30  },
                      { label: "Grape",  y: 28  }
                    ]
            }]
    }

    return (
        <div>
            <h1>Here is the graph</h1>
            <div>
                <CanvasJSChart 
                    options={options}
                />
            </div>
            <button onClick={props.handleNewSearch}>New Search</button>
        </div>
    )
}

export default ExchangeRateGraph;