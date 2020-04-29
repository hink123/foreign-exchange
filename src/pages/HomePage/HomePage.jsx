import React, {Component} from 'react';
import FavoritesList from '../../components/FavoritesList/FavoritesList';
import './HomePage.css';
import CurrencySelects from '../../components/CurrencySelects/CurrencySelects';
import ExchangeRateGraph from '../../components/ExchangeRateGraph/ExchangeRateGraph';

class HomePage extends Component {


    render() {
        return (
            <div>
                 <FavoritesList 
                  deleteFavorite={this.props.deleteFavorite}
                  handleExchangeRateSearch={this.props.handleExchangeRateSearch}
                  user={this.props.user}
                  favorites={this.props.favorites}
                  handleUpdateFavorites={this.props.handleUpdateFavorites}
                  toggleFavMenu={this.props.toggleFavMenu}
                />
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
                        message={this.props.message}
                    />
                }
            </div>
        )
    }
    
}

export default HomePage;