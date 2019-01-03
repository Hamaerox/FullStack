import React, {Component} from 'react'

class SignUp extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className='signUpForm'>
                <form>
                    <h1>SignUp!</h1>
                    <h4>Choose a Display Name:</h4>
                    <input type='text' placeholder='Name' name='name'/>
                    <h4>Enter your email address:</h4>
                    <input type='email' placeholder='Email Address' name='email'/>
                    <h4>Choose a password:</h4>
                    <input type='password' placeholder='Password' name='password'/>
                    <br></br>
                    <br></br>
                    <button>Create Account</button>
                </form>
            </div>
        )
    }
}

export default SignUp