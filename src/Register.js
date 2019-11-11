import React from 'react';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = errors => {
    let valid = true;

    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    )

    return valid;
}

const countErrors = errors => {
    let count = 0;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (count = count+1)
    )

    return count;
}

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fullName: null,
            email: null,
            password: null,
            formValid: false,
            errorCount: null,
            errors : {
                fullName: '',
                email: '',
                password: '',
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        const{ name, value } = e.target;
        let errors =  this.state.errors;

        switch(name){
            case "fullName":
                errors.fullName = value.length < 5 ? 'Full Name must be 5 characters long!' : '';
                break; 

            case 'email':
                errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';
                break;

            case 'password':
                errors.password = value.length < 8 ? 'Password must be 8 characters!' : '';
                break;

            default:

                break;
        }

        this.setState({errors, [name]: value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({formValid: validateForm(this.state.errors)});
        this.setState({errorCount: countErrors(this.state.errors)});
    }

    render(){

        const { errors, formValid} =  this.state;

        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h2>Register</h2>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="fullName">
                            <label htmlFor="fullName">Full Name</label>
                            <input 
                                type="text" 
                                name="fullName" 
                                onChange={this.handleChange}
                                placeholder="Type your name"
                                noValidate
                            />
                            {errors.fullName.length > 0 && <span className='error'>{errors.fullName}</span>}
                        </div>
                        <div className="email">
                            <label htmlFor="email">E-Mail</label>
                            <input
                                type="email" 
                                name="email" 
                                onChange={this.handleChange}
                                placeholder="Enter e-mail"
                                noValidate
                            />
                            {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password" 
                                name="password" 
                                onChange={this.handleChange}
                                placeholder="Enter password"
                                noValidate
                            />
                            {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                        </div>
                        <div className="info">
                            <small>Password must be eight characters long</small>
                        </div>
                        <div className="submit">
                            <button>Create</button>
                        </div>
                        {this.state.errorCount !== null ? <p className="form-status">
                            Form is {formValid ? 'valid ✅' : 'invalid ❌'}
                        </p> : 'Form not submitted'}
                    </form>
                </div>
            </div>
        )
    }
}

export default Register;