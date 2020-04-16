import React, {Component} from 'react';
import './HomePage.css';
import CurrencySelects from '../../components/CurrencySelects/CurrencySelects';
import ExchangeRateGraph from '../../components/ExchangeRateGraph/ExchangeRateGraph';

class HomePage extends Component {


    render() {
        return (
            <div>
                {this.props.graphData ?
                    <ExchangeRateGraph 
                        graphData={this.props.graphData}
                        message={this.props.message}
                        handleNewSearch={this.props.handleNewSearch}
                        timeFormat={this.props.timeFormat}
                        handleExchangeRateSearch={this.props.handleExchangeRateSearch}
                        addToFavorites={this.props.addToFavorites}
                        user={this.props.user}
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