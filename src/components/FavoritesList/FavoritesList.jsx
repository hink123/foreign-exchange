import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './FavoritesList.css';
import userService from '../../utils/userService';

class FavoritesList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         user: userService.getUser()
    //     }
    // }

    handleDelete = async (e) => {
        e.preventDefault();
        await this.props.deleteFavorite(e.target.id);
    }

    handleClick = (e) => {
        this.props.handleExchangeRateSearch(JSON.parse(e.target.id).curr1, JSON.parse(e.target.id).curr2, 'FX_DAILY');
    }

    // componentDidMount() {
    //     this.setState({
    //         user: userService.getUser()
    //     })
    // }

    render() {
        return (
            <div>
                {this.props.user.favorites.map((fav, idx) => 
                    <div key={idx}>
                        <button onClick={this.handleDelete} id={idx}>X</button>
                        <Link to='/' onClick={this.handleClick} id={JSON.stringify(fav)}>
                            {fav.curr1} to {fav.curr2}
                        </Link>
                    </div>
                )}

            </div>
        )
    }
}

export default FavoritesList;