import React, {Component} from 'react';
import './FavoritesList.css';

class FavoritesList extends Component {


    handleDelete = (e) => {
        e.preventDefault();
        this.props.deleteFavorite(e.target.id);
    }

    render() {
        return (
            <div>
                {this.props.user.favorites.map((fav, idx) => 
                    <div key={idx}>
                        <button onClick={this.handleDelete} id={idx}>X</button>
                        <div>
                            {fav[0]} to {fav[1]}
                        </div>
                    </div>
                )}

            </div>
        )
    }
}

export default FavoritesList;