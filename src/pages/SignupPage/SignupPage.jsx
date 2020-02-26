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
            //this.props.handleSignup();
            this.props.history.push('/');
        } catch (err) {
            //TODO
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf)
    }

    render() {
        return (
            <div>
                <h1>Signup</h1>
                <form action="">
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input type="text" className="input" value={this.state.name} name="name" onChange={this.handleChange} placeholder='John Smith'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input type="text" className="input" value={this.state.email} name="email" onChange={this.handleChange} placeholder='john.smith@gmail.com'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input type="text" className="input" value={this.state.password} name="password" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Confirm Password</label>
                        <div className="control">
                            <input type="text" className="input" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
                        </div>
                    </div>
                    <button type="submit" className="button is-primary" disabled={this.isFormInvalid()}>Submit</button>
                </form>
            </div>
        )
    }
}

export default SignupPage;