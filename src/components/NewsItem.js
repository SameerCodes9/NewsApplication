import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className="my-3">
        <div className="card" style={{width:"18rem"}}>
    <img className="card-img-top" src={!imageUrl?"https://th.bing.com/th/id/R.36a0d0fbf87e6a054b6cb676c889c2a6?rik=57ude8tbRl9kxQ&riu=http%3a%2f%2fwww.livenewsmag.com%2fwp-content%2fuploads%2f2016%2f08%2fCNBC-News-USA.gif&ehk=I4G2gA72KGqqxwQ1ZYC6zE7DsvE1mer1k5HensJFu18%3d&risl=&pid=ImgRaw&r=0":imageUrl} alt="Article pic"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} className="btn btn-sm btn-outline-primary">Read full story</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
