import React from 'react';
import Share from '../utils/share';
import PropTypes from 'prop-types';

const isoDate = require('iso-date');

/**
 * Class to hold each article item from any source selected.
 * @extends React.Component
 * @param {props} item.url, item.title
 * @return {*} returns to the parent component - Articles
 */
const ArticleItem = (props) => {
  let publishedAt = props.item.publishedAt;
  let image;
  const imageSource = props.item.urlToImage;

  if (publishedAt !== null) {
    publishedAt = isoDate(props.item.publishedAt);
  } else {
    publishedAt = '';
  }

  if (imageSource !== null && imageSource !== undefined && imageSource !== '') {
    image = [
      <img
        key={props.item.url}
        className="article-image"
        src={imageSource}
        style={{ height: '200px', width: '350px' }}
      />
    ];
  }

  return (
    <article>
      <div className="col-lg-12">
        <h2>
          <a href={props.item.url} target="_blank">
            {props.item.title}
          </a>
        </h2>
        <div className="col-lg-5">
          {image}
        </div>
        <div className="col-lg-7">
          <h4>{props.item.description}</h4>
          <h4>Author: {props.item.author}</h4>
          <h5>Published: {publishedAt}</h5>
          <div className="row">
            <Share
              share={`${props.item.url}`}
              title={`${props.item.title}`}
            />
          </div>
        </div>
      </div>
    </article>
  );
};


ArticleItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    urlToImage: PropTypes.string,
    publishedAt: PropTypes.string
  }).isRequired
};


export default ArticleItem;
