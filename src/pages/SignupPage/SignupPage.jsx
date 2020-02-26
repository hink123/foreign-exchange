import React, {Component} from 'react'
import './SignupPage.css';

class SignupPage extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConf: ''
    };

    render() {
        return (
            <div>
                <h1>Signup</h1>
                <form action="">
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='John Smith'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input type="text" className="input" placeholder='john.smith@gmail.com'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input type="text" className="input"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Confirm Password</label>
                        <div className="control">
                            <input type="text" className="input" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupPage;