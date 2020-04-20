import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './FavoritesList.css';

class FavoritesList extends Component {


    handleDelete = (e) => {
        e.preventDefault();
        this.props.deleteFavorite(e.target.id);
    }

    handleClick = (e) => {
        console.log('LOOK HERE', e.target.id)
        this.props.handleExchangeRateSearch(e.target.id.slice(0, 3), e.target.id.slice(4), 'FX_DAILY');
    }

    render() {
        return (
            <div>
                {this.props.user.favorites.map((fav, idx) => 
                    <div key={idx}>
                        <button onClick={this.handleDelete} id={idx}>X</button>
                        <Link to='/' onClick={this.handleClick} id={fav}>
                            {fav[0]} to {fav[1]}
                        </Link>
                    </div>
                )}

            </div>
        )
    }
}

export default FavoritesList;