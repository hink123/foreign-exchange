import React, {Component} from 'react';
import './HomePage.css';
import CurrencySelects from '../../components/CurrencySelects/CurrencySelects';

class HomePage extends Component {


    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <CurrencySelects />
            </div>
        )
    }
    
}

export default HomePage;