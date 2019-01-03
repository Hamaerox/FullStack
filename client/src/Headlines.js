import React, {Component, Fragment} from 'react'
import axios from 'axios'

class Headlines extends Component{
    constructor(){
        super()
        this.state = {
            articles: []
        }
    }

    componentDidMount(){
        axios.get(`https://newsapi.org/v2/top-headlines?sources=ign&apiKey=${process.env.REACT_APP_IGNKEY}`).then(response => {
            response.data.articles.forEach((article, i) => {
                article._id = article.title + i
            })
            this.setState({articles: response.data.articles})
        })
    }


    render(){
        const allArticles = this.state.articles.map((article, i) => {
            const myImage = article.urlToImage
            return <a href={article.url}><div className={`news` + i} >
                        <div  className={`news${i}Img`} style={{backgroundImage: `url(${myImage})`}}></div>
                            <h5 className={`news${i}Title`}>{article.title}</h5>
                        </div>
                    </a>
        })
        return(
            <Fragment>
                <h1 className='updates' >Check back daily for more updates</h1>
                <div className='newsContainer'>
                    {allArticles}
                </div>
            </Fragment>
        )
    }
}

export default Headlines