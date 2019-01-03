import React, {Component} from 'react'
import axios from 'axios';

class Contact extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            description: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const name = this.state.name
        const email = this.state.email
        const description = this.state.description
        axios.post('/transport/send', {name, email, description }).then(res => {
            if(res.data.msg === 'success'){
                alert('Message was sent successfully and I will contact you soon!')
                this.resetForm()
                } else if (res.data.msg === 'fail'){
                    alert('Message failed to send properly.')
                }
            }
        )
    }

    resetForm(){
        this.setState({
            name: '',
            email: '',
            description: ''
        })
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div>
                <form className='contactForm' onSubmit={this.handleSubmit}>
                    <h4>Feel free to contact me below!</h4>
                    <input className='fName' 
                           type='text' 
                           placeholder='Your Name' 
                           name='name' 
                           value={this.state.name} 
                           onChange={this.handleChange}
                           />
                    <input className='email' 
                           type='email' 
                           placeholder='Your Email address' 
                           name='email' 
                           value={this.state.email} 
                           onChange={this.handleChange}
                           />
                    <textarea className='description' 
                              type='text' 
                              placeholder='Brief description of what I can do for you(:' 
                              name='description' 
                              value={this.state.description} 
                              onChange={this.handleChange}
                            ></textarea>
                    <button className='btn'>Send</button>
                </form>
            </div>
        )
    }
}

export default Contact