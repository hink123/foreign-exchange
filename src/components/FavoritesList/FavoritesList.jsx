import React, {Component} from 'react';
import './FavoritesList.css';

class FavoritesList extends Component {


    render() {
        return (
            <div>
                {this.props.user.favorites.map((fav, idx) => 
                    <div>
                        <button>X</button>
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