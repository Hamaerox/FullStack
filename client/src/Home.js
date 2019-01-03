import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import CarouselComponent from './CarouselComponent'
import "react-responsive-carousel/lib/styles/carousel.min.css" 

class Home extends Component {
    constructor(){
        super()
        this.state = {
            lol: '',
            coc: '',
            smashBros: '',
            overwatch: '',
            fortnite: '',
            redDead: ''
        }
    }

    async componentDidMount(){
        const lol = await axios.get(`/forwarder?url=http://www.gamespot.com/api/games/?filter=name:league%20of%20legends&api_key=${process.env.REACT_APP_APIKEY}&format=json`)
        const coc = await axios.get(`/forwarder?url=http://www.gamespot.com/api/games/?filter=name:clash%20of%20clans&api_key=${process.env.REACT_APP_APIKEY}&format=json`)
        const smashBros = await axios.get(`/forwarder?url=http://www.gamespot.com/api/games/?filter=name:super%20smash%20bros&api_key=${process.env.REACT_APP_APIKEY}&format=json`)
        const overwatch = await axios.get(`/forwarder?url=http://www.gamespot.com/api/games/?filter=name:overwatch&api_key=${process.env.REACT_APP_APIKEY}&format=json`)
        const fortnite = await axios.get(`/forwarder?url=http://www.gamespot.com/api/games/?filter=name:fortnite&api_key=${process.env.REACT_APP_APIKEY}&format=json`)
        const redDead = await axios.get(`/forwarder?url=http://www.gamespot.com/api/games/?filter=name:red%20dead%20redemption%202&api_key=${process.env.REACT_APP_APIKEY}&format=json`)
        const stateObj = {
            lol: lol.data.results[0].image.original.replace(/ /g, "+"),
            coc: coc.data.results[0].image.original,
            smashBros: smashBros.data.results[4].image.original,
            overwatch: overwatch.data.results[0].image.square_small,
            fortnite: fortnite.data.results[0].image.original,
            redDead: redDead.data.results[0].image.original
        }
        this.setState(stateObj)
    }

    render(){
        const lolImg = this.state.lol
        const cocImg = this.state.coc
        const smashBrosImg = this.state.smashBros
        const overwatchImg = this.state.overwatch
        const fortniteImg = this.state.fortnite
        const redDeadImg = this.state.redDead
        return(
            <div>
                <div className='carousel' >
                    <CarouselComponent />
                </div>
                <div className='newReleases'>
                    <p className='essentialsPara'>New Game Realeases</p>
                    <div className='releaseContent'>
                        <div className='forza'>
                        <img className='forzaImg' src='https://c-3sux78kvnkay76x24yzgzoix2eskzgix78ozoix2eius.g00.metacritic.com/g00/3_c-3ccc.skzgix78ozoi.ius_/c-3SUXKVNKAY76x24nzzvyx3ax2fx2fyzgzoi.skzgix78ozoi.iusx2fosgmkyx2fvx78ujaizyx2fmgskyx2f4x2fk51k0k44k372gk493ij0i787l97gij02-54.pvmx3fo76i.sgx78qx3dosgmk_$/$/$/$/$/$' alt=''/>
                        <p className='essentialsPara'>Forza 4 <br></br>Horizon</p>
                        <div className='forzaHover'>
                        <img className ='forzaImg' src='https://c-3sux78kvnkay76x24yzgzoix2eskzgix78ozoix2eius.g00.metacritic.com/g00/3_c-3ccc.skzgix78ozoi.ius_/c-3SUXKVNKAY76x24nzzvyx3ax2fx2fyzgzoi.skzgix78ozoi.iusx2fosgmkyx2fvx78ujaizyx2fmgskyx2f4x2fk51k0k44k372gk493ij0i787l97gij02-54.pvmx3fo76i.sgx78qx3dosgmk_$/$/$/$/$/$' alt=''/>
                        <p><b>Platform:</b> Xbox One</p>
                        <p><b>Release Date:</b> Dec 13, 2018</p>
                        <p><b>Microsoft Game Studios</b></p>
                        </div>
                        </div>
                            <div className='dusk'>
                            <img className='duskImg' src='https://c-3sux78kvnkay76x24yzgzoix2eskzgix78ozoix2eius.g00.metacritic.com/g00/3_c-3ccc.skzgix78ozoi.ius_/c-3SUXKVNKAY76x24nzzvyx3ax2fx2fyzgzoi.skzgix78ozoi.iusx2fosgmkyx2fvx78ujaizyx2fmgskyx2f1x2f5697k43h422kikg3g7h8l91ij1044829-54.pvmx3fo76i.sgx78qx3dosgmk_$/$/$/$/$/$' alt=''/>
                            <p className='essentialsPara'>Dusk</p>
                            <div className='duskHover'>
                            <img className='duskImg' src='https://c-3sux78kvnkay76x24yzgzoix2eskzgix78ozoix2eius.g00.metacritic.com/g00/3_c-3ccc.skzgix78ozoi.ius_/c-3SUXKVNKAY76x24nzzvyx3ax2fx2fyzgzoi.skzgix78ozoi.iusx2fosgmkyx2fvx78ujaizyx2fmgskyx2f1x2f5697k43h422kikg3g7h8l91ij1044829-54.pvmx3fo76i.sgx78qx3dosgmk_$/$/$/$/$/$' alt=''/>
                            <p><b>Platform:</b> PC</p>
                            <p><b>Release Date:</b> Dec 10, 2018</p>
                            <p><b>New Blood Interactive</b></p>
                            </div>
                            </div>
                            <div className='aaero'>
                                <img className='aaeroImg' src='https://c-3sux78kvnkay76x24yzgzoix2eskzgix78ozoix2eius.g00.metacritic.com/g00/3_c-3ccc.skzgix78ozoi.ius_/c-3SUXKVNKAY76x24nzzvyx3ax2fx2fyzgzoi.skzgix78ozoi.iusx2fosgmkyx2fvx78ujaizyx2fmgskyx2f3x2f2886l791g7k7764j37jk50l50445jk3i-54.pvmx3fo76i.sgx78qx3dosgmk_$/$/$/$/$/$' alt=''/>
                                <p className='essentialsPara'>Aaero: Complete Edition</p>
                                <div className='aaeroHover'>
                                <img className='aaeroImg' src='https://c-3sux78kvnkay76x24yzgzoix2eskzgix78ozoix2eius.g00.metacritic.com/g00/3_c-3ccc.skzgix78ozoi.ius_/c-3SUXKVNKAY76x24nzzvyx3ax2fx2fyzgzoi.skzgix78ozoi.iusx2fosgmkyx2fvx78ujaizyx2fmgskyx2f3x2f2886l791g7k7764j37jk50l50445jk3i-54.pvmx3fo76i.sgx78qx3dosgmk_$/$/$/$/$/$' alt=''/>
                                <p><b>Platform:</b> Switch</p>
                                <p><b>Release Date:</b> Dec 24, 2018</p>
                                <p><b>Mad Fellows Ltd</b></p>
                            </div>
                            </div>
                            
                    </div>
                </div>
                <div className='essentials'>
                    <p className='essentialsPara'>ESSENTIAL LINKS</p>
                    <br></br>
                    <a href='https://www.metacritic.com/pictures/all-time-best-games-on-every-platform'>All-Time Best Games on Each Platform</a>
                    <br></br>
                    <a href='https://www.metacritic.com/pictures/worst-videogames-of-2018'>Worst Games of 2018</a>
                    <br></br>
                    <a href='https://www.metacritic.com/feature/vote-for-the-best-of-2018'>Vote for the Best of 2018</a>
                    <br></br>
                    <a href='https://www.metacritic.com/feature/major-upcoming-video-game-release-dates-xbox-ps4-pc-switch'>Release Dates for Notable Upcoming Games</a>
                    <br></br><br></br>
                    <a href='https://www.metacritic.com/feature'>More Articles -></a>
                </div>
                    <h1 className='trending' >Top Games</h1>
                    <div className='gameContainer'>
                        {lolImg.length > 0 ?
                        <div className='gameOne'>
                            <Link to='/selectedgame/40335' >
                                <img className='gameOneImg' src={lolImg} alt=''/>
                            </Link> 
                        </div>
                        :
                        <div className='loadingIcon'>loading...</div>
                        }
                            {cocImg.length > 0 ?
                            <div className='gameTwo'>
                                <Link to='/selectedgame/149003' >
                                    <img className='gameTwoImg' src={cocImg} alt='' />
                                </Link> 
                            </div>
                            :
                            <div className='loadingIcon'>loading...</div>              
                            }
                                {smashBrosImg.length > 0 ?
                                <div className='gameThree'>
                                    <Link to='/selectedgame/480957' >
                                        <img className='gameThreeImg' src={smashBrosImg} alt='' />
                                    </Link> 
                                </div>
                                :
                                <div className='loadingIcon'>loading...</div>                                
                                }
                            {overwatchImg.length > 0 ?
                            <div className='gameFour'>
                                <Link to='/selectedgame/355766' >
                                    <img className='gameFourImg' src={overwatchImg} alt='' />
                                </Link> 
                            </div>
                            :
                            <div className='loadingIcon'>loading...</div>
                            }
                        {fortniteImg.length > 0 ?
                        <div className='gameFive'>
                            <Link to='/selectedgame/125765' >
                                <img className='gameFiveImg' src={fortniteImg} alt='' />
                            </Link>
                        </div>
                        :
                        <div className='loadingIcon'>loading...</div>
                        }
                    {redDeadImg.length > 0 ?
                    <div className='gameSix'>
                        <Link to='/selectedgame/458780' >
                            <img className='gameSixImg' src={redDeadImg} alt='' />
                        </Link>
                    </div>
                    :
                    <div className='loadingIcon'>loading...</div>
                    }
                </div>
            </div>
        )
    }
}

export default Home