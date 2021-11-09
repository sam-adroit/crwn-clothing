import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";


import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '', 
            password: ''
        }
    }

    handleSubmit = async event => {
       event.preventDefault();

       const { email, password } = this.state;

       signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            this.setState({ email: '', password: ''});
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`${errorCode} => ${errorMessage}`);
        });

    }

    handleChange = event => {
        const { value, name} = event.target;

        this.setState({ [name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="email" required/>
                    
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="password" required/>
                    <div className='buttons'>
                        <CustomButton type="submit" > Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;