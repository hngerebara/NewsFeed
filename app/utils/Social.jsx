import React from 'react';
import PropTypes from 'prop-types';
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';


const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');

/**
 * @description share element
 * @param {object} props input for component
 * @returns {*} element to be rendered
 */
function Social(props) {
  const shareUrl = props.share;
  const title = props.title;

  return (
    <div className="Demo__container">
      <div className="Demo__some-network">
        <FacebookShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button sharetbn"
        >
          <FacebookIcon
            size={32}
            round
          />
        </FacebookShareButton>
      </div>
      <div className="Demo__some-network">
        <TwitterShareButton
          url={shareUrl}
          title={title}
          className="Demo__some-network__share-button sharetbn"
        >
          <TwitterIcon
            size={32}
            round
          />
        </TwitterShareButton>
      </div>
      <div className="Demo__some-network">
        <GooglePlusShareButton
          url={shareUrl}
          className="Demo__some-network__share-button sharetbn"
        >
          <GooglePlusIcon
            size={32}
            round
          />
        </GooglePlusShareButton>
      </div>

      <div className="Demo__some-network">
        <LinkedinShareButton
          url={shareUrl}
          title={title}
          windowWidth={750}
          windowHeight={600}
          className="Demo__some-network__share-button sharetbn"
        >
          <LinkedinIcon
            size={32}
            round
          />
        </LinkedinShareButton>
      </div>
    </div>
  );
}

export default Social;
Social.propTypes = {
  share: PropTypes.string,
  title: PropTypes.string
};

Social.defaultProps = {
  share: 'yahoo.com',
  title: 'yahoo'
};
