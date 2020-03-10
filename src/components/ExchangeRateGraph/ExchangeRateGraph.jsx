import React, {Component} from 'react'; 
import CanvasJSReact from '../../services/canvasjs.react';
import './ExchangeRateGraph.css';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
    title: {
      text: `From ${this.props.graphData['Meta Data']['2. From Symbol']} to ${this.props.graphData['Meta Data']['3. To Symbol']}`
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

class ExchangeRateGraph extends Component {


    componentDidMount() {
        var chart = this.chart;
		chart.render();
		
    }

    render() {
        return (
            <div>
                <h1>Here is the graph</h1>
                <div>
                    <CanvasJSChart 
                        options={options}
                        onRef={ref => this.chart = ref}
                    />
                </div>
                <button onClick={this.props.handleNewSearch}>New Search</button>
            </div>
        )
    }
}

export default ExchangeRateGraph;