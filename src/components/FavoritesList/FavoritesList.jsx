import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './FavoritesList.css';
import favoritesService from '../../utils/favoritesService';

class FavoritesList extends Component {

    async componentDidMount() {
        if(this.props.user) {
            const favorites = await favoritesService.getFavorites();
            this.props.handleUpdateFavorites(favorites)
        }
    }

    handleDelete = async (e) => {
        e.preventDefault();
        await this.props.deleteFavorite(e.target.id);
        this.componentDidMount();
    }

    handleClick = (e) => {
        this.props.toggleFavMenu();
        this.props.handleExchangeRateSearch(JSON.parse(e.target.id).curr1, JSON.parse(e.target.id).curr2, 'FX_DAILY');
    }

    render() {
        const favRows = this.props.favorites.map((fav, idx) => (
            <div key={idx} className='individual-fav-container'>
                <button onClick={this.handleDelete} id={fav._id} className='button remove'>X</button>
                <Link to='/' onClick={this.handleClick} id={JSON.stringify(fav)} className='individual-fav'>
                    {fav.curr1} to {fav.curr2}
                </Link>
            </div>
        ));
        return (
            <div className='favs-container hidden'>
                <div className='fav-list-title'>
                    Favorites List
                </div>
                <div>
                    {favRows}
                </div>
                <div className='close-favs' onClick={this.props.toggleFavMenu}>Close</div>
            </div>
        )
    }
}

export default FavoritesList;