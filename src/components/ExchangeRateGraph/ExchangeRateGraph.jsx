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
            timeSeriesFX = this.props.graphData['Time Series FX (5min)'];
        } else if(this.props.timeFormat==='FX_DAILY') {
            timeSeriesFX = this.props.graphData['Time Series FX (Daily)'];
        } else if(this.props.timeFormat==='FX_WEEKLY') {
            timeSeriesFX = this.props.graphData['Time Series FX (Weekly)'];
        } else if(this.props.timeFormat==='FX_MONTHLY') {
            timeSeriesFX = this.props.graphData['Time Series FX (Monthly)'];
        }

        var chart = this.chart;
        // dataPoints = [];

        for(const property in timeSeriesFX) {
            // console.log(property.slice(11));
            dataPoints.unshift({
                // x: property.slice(11, 16),
                // x: new Date(2020, 3, 12, 14, i),
                y: parseFloat(timeSeriesFX[property]['1. open'])
            });

        }
        console.log('DATA HERE', dataPoints);
        chart.render();
        dataPoints = [];
		
    }

    render() {
        const options = {
            title: {
              text: `From ${this.props.graphData['Meta Data']['2. From Symbol']} to ${this.props.graphData['Meta Data']['3. To Symbol']}`
            },
            theme: 'dark2',
            axisX :{
                title: `${this.props.graphData['Meta Data']['1. Information']}`,
                // labelAngle: -30,
                // interval: 1,
                // intervalType: "hour",
                // includeZero: false
                // // valueFormatString: "D"
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