import React, {Component} from 'react';
import CURRENCIES from '../../utils/CurrencyConstant';
import './CurrencySelects.css';

class CurrencySelects extends Component {

    state = {
        currency1: '',
        currency2: '',
        timeFormat: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleExchangeRateSearch(this.state.currency1, this.state.currency2, this.state.timeFormat);
    }

    render() {
        return(
            <div>
                
                <form onSubmit={this.handleSubmit} className='curr-form'>
                    <div className="field">
                        <div className="control first-div">
                            <div className='form-title'>
                                Foreign Exchange Markets
                            </div>
                            <div className='special-message'>{this.props.message}</div>
                            <select name="currency1" className='select special is-large has-background-primary' onChange={this.handleChange}>
                                {CURRENCIES[0].map((currency, idx) => 
                                    <option value={currency[0]} key={idx}>{currency[1]}</option>
                                )}
                            </select>
                        </div>
                    </div>
                
                    <div className="field">
                        <div className="control first-div">
                            <select name="currency2" className='select special is-large has-background-primary' onChange={this.handleChange}>
                                {CURRENCIES[1].map((currency, idx) => 
                                    <option value={currency[0]} key={idx}>{currency[1]}</option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control last-div">
                            <select name="timeFormat" className='select special is-large has-background-primary' onChange={this.handleChange}>
                                <option value=''>Select Time Series</option>
                                <option value='FX_INTRADAY'>Intraday</option>
                                <option value='FX_DAILY'>Daily</option>
                                <option value='FX_WEEKLY'>Weekly</option>
                                <option value='FX_MONTHLY'>Monthly</option>
                            </select>
                            <button type="submit" className='button is-primary' >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CurrencySelects;

