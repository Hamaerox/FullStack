import React, {Component} from 'react'

class Comment extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            newComment: '',
            videoGame: '',
            isEditing: false
        }
    }

handleChange = e => {
    const {name, value} = e.target
    this.setState({
        [name]: value
    })
}

handleSubmit = e => {
    e.preventDefault()
    const update = {
        name: this.state.name,
        comment: this.state.newComment,
        videoGame: this.state.videoGame
    }
    this.props.handleEdit(this.props.id, update)
    this.setState({
        name: '',
        comment: '',
        videoGame: ''
    })
    this.editToggler()
}

editToggler = () => {
    this.setState(prevState => ({
        isEditing: !prevState.isEditing
    }))
}

    render(){
        return(
            <div>
                {this.state.isEditing ?
                    <div className='editComments' >
                        <form onSubmit={this.handleSubmit}>
                            <input type='text'
                                   value={this.state.name}
                                   name='name'
                                   onChange={this.handleChange}
                                   placeholder={this.props.name}/>
                            <input type='text'
                                   value={this.state.newComment}
                                   onChange={this.handleChange}
                                   name='newComment'
                                   placeholder={this.props.newComment}/>
                                   <button>Save</button>
                        </form>
                        <button onClick={this.editToggler}>Cancel</button>
                    </div>
                :
                <div className='displayedComments' >
                    <p className='commentName' >Name: {this.props.name}</p>
                    <p className='commentBody' >Comment: {this.props.comment}</p>
                    <div className='buttonContainer'>
                        <button className='deleteButton' onClick={() => this.props.handleDelete(this.props.id)}>Delete</button>
                        <button className='editButton' onClick={this.editToggler}>Edit</button>
                    </div>
                </div>
                }   
            </div>
        )
    }
}

export default Comment