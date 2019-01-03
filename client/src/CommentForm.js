import React from 'react'

const CommentForm = props => {
    const{handleChange, handleSubmit, newComment, name} = props
    return(
        <div className='commentForm'>
            <form onSubmit={handleSubmit}>
                <input type='text'
                       name='name'
                       value={name}
                       onChange={handleChange} 
                       placeholder='Name' />
                       <br></br>
                <textarea rows='5' cols='40'
                       placeholder='Comment'
                       name='newComment'
                       value={newComment}
                       onChange={handleChange} />
                       <br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CommentForm