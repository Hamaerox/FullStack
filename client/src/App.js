import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Menubar from './Menubar'
import Popup from 'reactjs-popup'
import Navbar from './Navbar'
import SelectedGame from './SelectedGame'
import Headlines from './Headlines'
import Contact from './Contact'
import SignUp from './SignUp'

class App extends Component{
    render(){
        const styles = {
              fontFamily: "sans-serif",
              textAlign: "center"
          }
          const contentStyle = {
                background: "rgba(255,255,255,0)",
                width: "80%",
                border: "none"
          }

    return(
        <div>
            <header>
                <div className='titleContainer'>
                    <h1 className='title'>GLHF!</h1> 
                    <h4 className='titlePara'>Welcome to Good luck and have fun!</h4>
                </div>
                <form className='loginForm'>
                    <input type='text' placeholder='UserName' />
                        <br></br>
                            <input type='text' placeholder='Password' />
                                <br></br>
                            <button>Login</button>
                        <a href='/Signup'>
                            <p className='newSignup'>Stranger?  Signup!</p>
                        </a>
                </form>
            </header>
            <div style={styles}>
                <Popup
                    modal
                    overlayStyle={{background: 'rgba(255,255,255,0.98'}}
                    contentStyle={contentStyle}
                    closeOnDocumentClick={false}
                    trigger={open => <Menubar open={open} />}
                >
                    {close => <Navbar close={close} />}
                </Popup>
            </div>
            <Switch>
                <Route path='/' component={Home}/>
                <Route path='/selectedgame/:id' component={SelectedGame}/>
                <Route path='/headlines' component={Headlines}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/SignUp' component={SignUp}/>
            </Switch>
        </div>
        )  
    }
}

export default App