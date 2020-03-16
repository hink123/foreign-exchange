import React, {Component} from 'react';
import './HomePage.css';
import CurrencySelects from '../../components/CurrencySelects/CurrencySelects';
import ExchangeRateGraph from '../../components/ExchangeRateGraph/ExchangeRateGraph';

class HomePage extends Component {


    render() {
        return (
            <div>
                <h1>Home Page</h1>
                {this.props.graphData ?
                    <ExchangeRateGraph 
                        graphData={this.props.graphData}
                        handleNewSearch={this.props.handleNewSearch}
                        timeFormat={this.props.timeFormat}
                    />
                    :
                    <CurrencySelects 
                        handleExchangeRateSearch={this.props.handleExchangeRateSearch}
                    />
                }
            </div>
        )
    }
    
}

export default HomePage;