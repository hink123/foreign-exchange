import React, {Component} from 'react'
import userService from '../../utils/userService';
import './SignupPage.css';

class SignupPage extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConf: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.signup(this.state);
            this.props.handleSignup();
            this.props.history.push('/');
        } catch (err) {
            //TODO
            console.log('FAIL');
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='signup-form'>
                    <div className="field">
                        <div className="control first-div">
                            <div className='login-title'>
                                Signup
                            </div>
                            <input type="text" className="input special is-large is-primary" value={this.state.name} name="name" onChange={this.handleChange} placeholder='Name'/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control first-div">
                            <input type="text" className="input special is-large is-primary" value={this.state.email} name="email" onChange={this.handleChange} placeholder='Email'/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control first-div">
                            <input type="text" className="input special is-large is-primary" value={this.state.password} name="password" onChange={this.handleChange} placeholder='Password'/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control last-div">
                            <input type="text" className="input special is-large is-primary" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} placeholder='Confirm Password' />
                            <button type="submit" className="button is-primary" disabled={this.isFormInvalid()}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupPage;