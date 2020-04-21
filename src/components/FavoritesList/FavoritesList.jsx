import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './FavoritesList.css';
import userService from '../../utils/userService';

class FavoritesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: userService.getUser()
        }
    }

    handleDelete = async (e) => {
        e.preventDefault();
        await this.props.deleteFavorite(e.target.id);
    }

    handleClick = (e) => {
        console.log('LOOK HERE', e.target.id)
        this.props.handleExchangeRateSearch(e.target.id.slice(0, 3), e.target.id.slice(4), 'FX_DAILY');
    }

    componentDidMount() {
        this.setState({
            user: userService.getUser()
        })
    }

    render() {
        return (
            <div>
                {this.state.user.favorites.map((fav, idx) => 
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