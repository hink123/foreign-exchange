import React, {Component} from 'react'; 
import CanvasJSReact from '../../services/canvasjs.react';
import './ExchangeRateGraph.css';

//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints=[]
class ExchangeRateGraph extends Component {


    componentDidMount() {
        let timeSeriesFX = this.props.graphData['Time Series FX (5min)'];
        var chart = this.chart;
        for(const property in timeSeriesFX) {
            dataPoints.push({
                // x: property,
                y: parseFloat(timeSeriesFX[property]['1. open'])
            });
        }
        console.log('DATA HERE', dataPoints);
		chart.render();
		
    }

    render() {
        const options = {
            title: {
              text: `From ${this.props.graphData['Meta Data']['2. From Symbol']} to ${this.props.graphData['Meta Data']['3. To Symbol']}`
            },
            axisX :{
                labelAngle: -30
            },
            data: [{				
                type: "line",
                dataPoints: dataPoints
            }]
        }
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