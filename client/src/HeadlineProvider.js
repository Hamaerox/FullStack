import React, {Component} from 'react'
import axios from 'axios'

const HeadlineContext = React.createContext()

class HeadlineProvider extends Component{
    constructor(){
        super()
        this.state = {
            news: ''
        }
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}

export default HeadlineProvider