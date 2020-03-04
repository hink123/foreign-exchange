import React, {Component} from 'react';
import userService from '../../utils/userService';

class LoginPage extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await userService.login(this.state);
            this.props.handleLogin();
            this.props.history.push('/');
        } catch (err) {
            // TODO
            alert('Invalid Credentials')
        }
    }

    render() {
        return (
            <div>
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <div className="control">
                            <input type="text" className="input" value={this.state.email} name="email" onChange={this.handleChange} placeholder='Email'/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input type="text" className="input" value={this.state.password} name="password" onChange={this.handleChange} placeholder="Password" />
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default LoginPage;