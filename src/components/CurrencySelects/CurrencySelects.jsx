import React, {Component} from 'react';
import CURRENCIES from '../../utils/CurrencyConstant';
import './CurrencySelects.css';

class CurrencySelects extends Component {

    state = {
        currency1: '',
        currency2: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleExchangeRateSearch(this.state.currency1, this.state.currency2);
    }

    render() {
        return(
            <div>
                <h2>Please Select Two Currencies</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <div className="control">
                            <select name="currency1" className='input' onChange={this.handleChange}>
                                {CURRENCIES.map((currency, idx) => 
                                    <option value={currency[0]} key={idx}>{currency[1]}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <select name="currency2" className='input' onChange={this.handleChange}>
                                {CURRENCIES.map((currency, idx) => 
                                    <option value={currency[0]} key={idx}>{currency[1]}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default CurrencySelects;
