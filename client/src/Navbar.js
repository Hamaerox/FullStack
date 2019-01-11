import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div>
            <div className='navColor'>
            <Link to='/home' onClick={props.close}>Home</Link>
            <Link to='/headlines' onClick={props.close}>Headlines</Link>
            <Link to='/contact' onClick={props.close}>Contact</Link>
            <Link to='/signup' onClick={props.close}>SignUp</Link>
            </div>
        </div>
    )
}

export default Navbar