import React, { Component } from 'react'

import NewsItem from './NewsItem';

export class News extends Component {
   
    constructor(){
        super();
        this.state= {articles: [],
        loading:false
                    }
    }
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=d3dfc5ad19e94d34b4415ea24b8030ea"
        let data=await fetch(url);
        let parsedData=await data.json()
        this.setState({articles:parsedData.articles})
    }

  render() {
    return (
      <div className="container my-3">
        <div className="className ">
        <h2>CNBC News - Top Headlines</h2>
        </div>
        <div className="row my-2">
        {this.state.articles.map((element)=>{
            return  <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>

        })}
        </div>
        </div>
    )
  }
}

export default News
