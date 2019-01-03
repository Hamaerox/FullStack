import React, {Component} from 'react'

class Landing extends Component{
    constructor(){
    super()
        this.state = {

        }
    }
    render(){
        return(
            <div className='welcome'>
                <h1 className='welcome' >Welcome to my FullStack Presentation!</h1>
                <div className='tim' >
                    <img src='https://media.giphy.com/media/rQ5i3I1A0Y9VK/source.gif' alt=''/>
                </div>
            </div>
        )
    }
}

export default Landing