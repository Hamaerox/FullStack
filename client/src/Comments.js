import React, {Component} from 'react'
import axios from 'axios'
import Comment from './Comment'
import CommentForm from './CommentForm'
import {withGame} from './VideoGameProvider'
import { withRouter } from 'react-router-dom'


class Comments extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            newComment: '',
            comments: []
        }
    }

componentDidMount(){
    axios.get(`/comment/${this.props.match.params.id}`).then(response => {
        this.setState({
            comments : response.data
        })
    })
}

handleSubmit = e => {
    e.preventDefault()
    const addComment = {
        name: this.state.name,
        comment: this.state.newComment,
        videoGame: this.props.match.params.id
    }
    axios.post(`/comment`, addComment).then(response => {
        this.setState(prevState => {
            return {
                comments: [...prevState.comments, response.data],
                name: '',
                newComment: ''
            }
        })
    })
}

handleChange = e => {
    const {name, value} = e.target
    this.setState({
        [name]: value
    })
}

handleDelete = (id) => {
    axios.delete(`/comment/${id}`).then(response => {
        this.setState(prevState => {
            return{
                comments: prevState.comments.filter(comment => comment._id !== id)
            }
        })
    })
}

handleEdit = (id, update) => {
    axios.put(`/comment/${id}`, update).then(response => {
        this.setState(prevState => ({
            comments: prevState.comments.map(comment => comment._id === id ? response.data : comment)
        }))
    })
}

    render(){
        return(
            <div>
                {this.state.comments.map(comment =>
                <Comment name={comment.name}
                         comment={comment.comment}
                         key={comment._id}
                         handleDelete={this.handleDelete}
                         handleEdit={this.handleEdit}
                         id={comment._id}/>)}
                <CommentForm
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default withRouter(withGame(Comments))