import React, {Component} from 'react';
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
        console.log('NICE');
    }

    render() {
        return(
            <div>
                <h2>Please Select Two Currencies</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <div className="control">
                            <input type="text" className="input" value={this.state.currency1} name="currency1" onChange={this.handleChange} placeholder='Base Currency'/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input type="text" className="input" value={this.state.currency2} name="currency2" onChange={this.handleChange} placeholder="Second Currency" />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default CurrencySelects;

