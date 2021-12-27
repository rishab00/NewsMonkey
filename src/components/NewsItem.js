import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div>
            <div className="card" style={{width: "18rem"}}>
            <img src={!imageUrl?"https://www.thegoandroid.com/wp-content/uploads/2021/09/Oppo-Android-12-ColorOS-12.png":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}..</h5>
              <p className="card-text">{description}..</p>
              <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
            </div>
        )
    }
}

export default NewsItem
