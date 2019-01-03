import React from "react"
import { Carousel } from "react-responsive-carousel"

const CarouselComponent = () => (
  <Carousel showThumbs={false} showIndicators={false}  infiniteLoop={true} centerMode={false} autoPlay>
    <a href='https://www.ign.com/articles/2018/10/20/call-of-duty-black-ops-4-review'>
        <div>
            <img src="https://assets3.thrillist.com/v1/image/2796729/size/tl-horizontal_main_2x.jpg" alt='' />
            <p className='legend'>Call Of Duty: Black Ops 4</p>
        </div>
    </a>
        <a href='https://www.ign.com/articles/2018/10/01/assassins-creed-odyssey-review'>
            <div>
                <img src="https://assets3.thrillist.com/v1/image/2788769/size/tl-horizontal_main_2x.jpg" alt='' />
                <p className='legend'>Assassin's Creed Odyssey</p>
            </div>
        </a>
            <a href='https://www.ign.com/articles/2018/01/22/dragon-ball-fighterz-review'>
                <div>
                    <img src="https://assets3.thrillist.com/v1/image/2755391/size/tl-horizontal_main_2x.jpg" alt='' />
                    <p className='legend'>Dragon Ball FighterZ</p>
                </div>
            </a>
            <a href='https://www.ign.com/articles/2018/09/10/shadow-of-the-tomb-raider-review'>
                <div>
                    <img src="https://assets3.thrillist.com/v1/image/2788770/size/tl-horizontal_main_2x.jpg" alt='' />
                    <p className='legend'>Shadow of the Tomb Raider</p>
                </div>
            </a>
        <a href='https://www.ign.com/articles/2018/09/04/marvels-spider-man-ps4-review'>   
            <div>
                <img src="https://assets3.thrillist.com/v1/image/2788775/size/tl-horizontal_main_2x.jpg" alt='' />
                <p className='legend'>Marvel’s Spider-Man</p>
            </div>
        </a>
    <a href='https://www.ign.com/articles/2018/04/12/god-of-war-review'>
        <div>
            <img src="https://assets3.thrillist.com/v1/image/2782137/size/tmg-article_tall.jpg" alt='' />
            <p className='legend'>God of War</p>
        </div>
    </a>
    </Carousel>
)

export default CarouselComponent