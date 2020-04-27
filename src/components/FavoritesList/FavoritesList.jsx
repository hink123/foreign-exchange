import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './FavoritesList.css';
import favoritesService from '../../utils/favoritesService';

class FavoritesList extends Component {

    async componentDidMount() {
        const favorites = await favoritesService.getFavorites();
        this.props.handleUpdateFavorites(favorites)
    }

    handleDelete = async (e) => {
        e.preventDefault();
        await this.props.deleteFavorite(e.target.id);
        this.componentDidMount();
    }

    handleClick = (e) => {
        this.props.handleExchangeRateSearch(JSON.parse(e.target.id).curr1, JSON.parse(e.target.id).curr2, 'FX_DAILY');
    }

    render() {
        const favRows = this.props.favorites.map((fav, idx) => (
            <div key={idx}>
                <button onClick={this.handleDelete} id={fav._id}>X</button>
                <Link to='/' onClick={this.handleClick} id={JSON.stringify(fav)}>
                    {fav.curr1} to {fav.curr2}
                </Link>
            </div>
        ));
        return (
            <div className='favs-container'>
                {favRows}
            </div>
        )
    }
}

export default FavoritesList;