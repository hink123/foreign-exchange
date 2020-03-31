import React, {Component} from 'react'; 
import CanvasJSReact from '../../services/canvasjs.react';
import './ExchangeRateGraph.css';

//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints=[]

class ExchangeRateGraph extends Component {

    componentDidMount() {
        let timeSeriesFX = '';
        if(this.props.timeFormat==='FX_INTRADAY') {
            timeSeriesFX = this.props.graphData['Time Series FX (60min)'];
        } else if(this.props.timeFormat==='FX_DAILY') {
            timeSeriesFX = this.props.graphData['Time Series FX (Daily)'];
        } else if(this.props.timeFormat==='FX_WEEKLY') {
            timeSeriesFX = this.props.graphData['Time Series FX (Weekly)'];
        } else if(this.props.timeFormat==='FX_MONTHLY') {
            timeSeriesFX = this.props.graphData['Time Series FX (Monthly)'];
        }

        var chart = this.chart;

        for(const property in timeSeriesFX) {
            if(this.props.timeFormat==='FX_INTRADAY') {
                dataPoints.push({
                    x: new Date(property.slice(0, 4), property.slice(5, 7) - 1, property.slice(8, 10), property.slice(11, 13)),
                    y: parseFloat(timeSeriesFX[property]['1. open'])
                });
            } else {
                dataPoints.push({
                    x: new Date(property.slice(0, 4), property.slice(5, 7) - 1, property.slice(8, 10)),
                    y: parseFloat(timeSeriesFX[property]['1. open'])
                });
            }
            
        }
        dataPoints.splice(50);
        dataPoints.reverse();
        chart.render();
        dataPoints = [];
		
    }

    render() {
        let parenthIdx = this.props.graphData['Meta Data']['1. Information'].indexOf('(');
        const options = {
            title: {
              text: `From ${this.props.graphData['Meta Data']['2. From Symbol']} to ${this.props.graphData['Meta Data']['3. To Symbol']}`
            },
            theme: 'dark2',
            axisX :{
                title: `${this.props.graphData['Meta Data']['1. Information'].slice(0, parenthIdx)}`,
                labelAngle: -30,
            },
            axisY: {
                title: `${this.props.graphData['Meta Data']['3. To Symbol']}/${this.props.graphData['Meta Data']['2. From Symbol']}`,
                includeZero: false
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