import React from 'react';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h2>Register</h2>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="fullName">
                            <label htmlFor="fullName">Full Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                onChange={this.handleChange}
                                noValidate
                            />
                        </div>
                        <div className="email">
                            <label htmlFor="email">E-Mail</label>
                            <input
                                type="email" 
                                name="email" 
                                onChange={this.handleChange}
                                noValidate
                            />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password" 
                                name="password" 
                                onChange={this.handleChange}
                                noValidate
                            />
                        </div>
                        <div className="info">
                            <small>Password must be 8 characters long</small>
                        </div>
                        <div className="submit">
                            <button>Create</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;