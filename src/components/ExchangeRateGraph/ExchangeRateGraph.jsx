import React, {Component} from 'react'; 
import CanvasJSReact from '../../services/canvasjs.react';
// import favoritesService from '../../utils/favoritesService';
// import userService from '../../utils/userService';
import './ExchangeRateGraph.css';


//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints=[]

class ExchangeRateGraph extends Component {

    state = {
        curr1: '',
        curr2: ''
    }

    async componentDidMount() {
        await this.setState({
            curr1: this.props.graphData['Meta Data']['2. From Symbol'],
            curr2: this.props.graphData['Meta Data']['3. To Symbol']
        });

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

    handleTimeChange = async (e) => {
        e.preventDefault();
        await this.props.handleExchangeRateSearch(this.props.graphData['Meta Data']['2. From Symbol'], this.props.graphData['Meta Data']['3. To Symbol'], e.target.name);
        this.componentDidMount();
    }

    handleHeartClick = (e) => {
        // e.preventDefault();
        // await this.props.addToFavorites(this.props.graphData['Meta Data']['2. From Symbol'], this.props.graphData['Meta Data']['3. To Symbol']);
        // try {
        //     let user = await favoritesService.addFavorite(this.state);
        //     console.log('DONE', user);
        //     console.log('OR AM I', userService.getUser());
        // } catch (err) {
        //     console.log('Fail');
        //     throw err;
        // }
        this.props.addToFavorites(this.state);
    }

    render() {
        let parenthIdx = this.props.graphData['Meta Data']['1. Information'].indexOf('(');
        const options = {
            title: {
              text: `${this.props.graphData['Meta Data']['2. From Symbol']} to ${this.props.graphData['Meta Data']['3. To Symbol']}`,
              fontColor: '#5DCEB3'
            },
            height: 500,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            axisX :{
                title: `${this.props.graphData['Meta Data']['1. Information'].slice(0, parenthIdx)}`,
                labelAngle: -30,
                titleFontColor: '#5DCEB3',
                labelFontColor: 'white',
                lineColor: 'white',
                margin: 10
            },
            axisY: {
                title: `${this.props.graphData['Meta Data']['3. To Symbol']}/${this.props.graphData['Meta Data']['2. From Symbol']}`,
                includeZero: false,
                titleFontColor: '#5DCEB3',
                labelFontColor: 'white',
                lineColor: 'white',
                margin: 10
            },
            data: [{				
                type: "line",
                dataPoints: dataPoints,
                color: '#5DCEB3'
            }]
        }
        return (
            <div className='chart-container'>
                <div className='special-message'>{this.props.message}</div>
                <div className='js-chart'>
                    <CanvasJSChart 
                        options={options}
                        onRef={ref => this.chart = ref}
                    />
                </div>
                <div className='button-container test-time'>
                    <button className='is-primary button time' disabled={(this.props.timeFormat==='FX_INTRADAY')} name='FX_INTRADAY' onClick={this.handleTimeChange}>Intraday</button>
                    <button className='is-primary button time' disabled={(this.props.timeFormat==='FX_DAILY')} name='FX_DAILY' onClick={this.handleTimeChange}>Daily</button>
                    <button className='is-primary button time' disabled={(this.props.timeFormat==='FX_WEEKLY')} name='FX_WEEKLY' onClick={this.handleTimeChange}>Weekly</button>
                    <button className='is-primary button time' disabled={(this.props.timeFormat==='FX_MONTHLY')} name='FX_MONTHLY' onClick={this.handleTimeChange}>Monthly</button>
                </div>
                <div className='button-container'>
                    <button style={(this.props.user ? {display: 'inline-block'} : {display: 'none'})} className='button heart new' onClick={this.handleHeartClick}>&hearts;</button>
                    <button onClick={this.props.handleNewSearch} className='is-primary button new'>New Search</button>
                </div>
            </div>
        )
    }
}

export default ExchangeRateGraph;