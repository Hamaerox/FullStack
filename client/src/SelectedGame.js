import React, {Component} from 'react'
import axios from 'axios';
import Comments from './Comments'

class SelectedGame extends Component{
    constructor(){
        
        super()
        this.state = {
            gameImg: '',
            releaseDate: '',
            description: ''
        }
    }

    componentDidMount(){
        axios.get(`/forwarder?url=https://www.gamespot.com/api/games/?filter=id:${this.props.match.params.id}&api_key=${process.env.REACT_APP_APIKEY}&format=json`).then(response => {
        this.setState({
                gameImg: response.data.results[0].image.square_small,
                releaseDate: response.data.results[0].release_date,
                description: response.data.results[0].description,
                videoGame: response.data.results[0].id
            })
        })
    }

    render(){
        return(
            <div>
                <div>
                    <img className='selectedGameImg' src={this.state.gameImg} alt='' />
                    <h3 className='selectedGameReleaseDate'>Released: <br></br>{this.state.releaseDate}</h3>
                    <p className='selectedGameDescription'>{this.state.description}</p>
                </div>
                <div>
                    <Comments />
                </div>
            </div>
        )
    }
}

export default SelectedGame