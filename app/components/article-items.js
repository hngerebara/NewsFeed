import React from 'react';
import Share from '../utils/share';
let isoDate = require('iso-date');

//fix statelss classes
export default class ArticleItem extends React.Component {

//list of articles
    render() {
        let publishedAt = this.props.item.publishedAt;
        let image;
        let imageSource = this.props.item.urlToImage;
        if (publishedAt !== null){
            publishedAt = isoDate(this.props.item.publishedAt)
        }else{
            publishedAt = ''
        }
        if (imageSource !== null && imageSource !== undefined && imageSource !== ''){
            image = [<img key={this.props.item.url}  className="article-image" src={imageSource}
                          style={{height: '280px', width: '450px'}}/> ]
        }
        return (
            <article>
                <div className="col-lg-12">
                <h2><a href={this.props.item.url} target = "_blank">{this.props.item.title}</a></h2>
                    <div className= "col-lg-5">
                        {image}
                    </div>
                    <div className="col-lg-7">
                        <h3>{this.props.item.description}</h3>
                        <h4>Author: {this.props.item.author}</h4>
                        <h5>Published: {publishedAt}</h5>
                        <Share share={`${this.props.item.url}`}  title= {`${this.props.item.title}`} />
                    </div>
                    
                     {/*<button type="button"
                        className="btn btn-info btn-lg" data-toggle="modal"
                        data-target="#myModal">Open Modal</button>*/}
                </div>

            </article>
        )
    }

}