import React, {Component} from 'react'
import axios from 'axios'

const VideoGameContext = React.createContext()

class VideoGameProvider extends Component {
    constructor(){
        super()
        this.state = {
            videoGame: ''
        }
    }

    getVideoGame = (id) => {
        axios.get(`/forwarder?url=https://www.gamespot.com/api/games/?filter=id:${id}&api_key=${process.env.REACT_APP_APIKEY}&format=json`).then(response => {
        this.setState({
                videoGame: response.data.results[0].id
            })
        })
    }

    render(){
        return(
            <VideoGameContext.Provider
                value = {{videoGame: this.state.videoGame, getVideoGame: this.getVideoGame}}>
                {this.props.children}
            </VideoGameContext.Provider>
        )
    }
}

export default VideoGameProvider

export const withGame = C => props => (
    <VideoGameContext.Consumer>
        {value => <C {...props} {...value}/>}
    </VideoGameContext.Consumer>
)