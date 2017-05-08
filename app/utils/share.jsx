import React, { Component } from 'react';
import { ShareButtons,ShareCounts,generateShareIcon } from 'react-share';


const { FacebookShareButton,GooglePlusShareButton,LinkedinShareButton,TwitterShareButton } = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');

class Share extends Component {
    constructor(props){
        super(props)
    }
  render() {
    const shareUrl = this.props.share;
    const title = this.props.title;

    return (
      <div className="Demo__container">
        <p>share via</p>
        <div className="Demo__some-network">
          <FacebookShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button sharetbn">
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>
        
       
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button sharetbn">
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>
       
      
          <GooglePlusShareButton
            url={shareUrl}
            className="Demo__some-network__share-button sharetbn">
            <GooglePlusIcon
              size={32}
              round />
          </GooglePlusShareButton>
       
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            windowWidth={750}
            windowHeight={600}
            className="Demo__some-network__share-button sharetbn">
            <LinkedinIcon
              size={32}
              round />
          </LinkedinShareButton>
        </div>
      </div>
    );
  }
}

export default Share;