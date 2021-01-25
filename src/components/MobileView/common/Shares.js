import React from 'react';
import {withRouter} from 'react-router';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
} from 'react-share';
import PropTypes from 'prop-types';
import {HOST} from '../../../host';

const styles = {
  container: {
    margin: '0.5em 0',
    display: 'flex',
    alignItems: 'center'
  }
}

class Shares extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }
  render() {
    const {match} = this.props;
    return (
      <div style={styles.container}>
        <div style={{margin:'0 2px', cursor:'pointer'}}>
          <FacebookShareButton url={`${HOST}${match.url}`}>
             <FacebookIcon
               size={32}
             />
          </FacebookShareButton>
        </div>
        <div style={{margin:'0 2px', cursor:'pointer'}}>
          <TwitterShareButton url={`${HOST}${match.url}`}>
             <TwitterIcon
               size={32}
             />
          </TwitterShareButton>
        </div>
        <div style={{margin:'0 2px', cursor:'pointer'}}>
          <GooglePlusShareButton url={`${HOST}${match.url}`}>
             <GooglePlusIcon
               size={32}
             />
          </GooglePlusShareButton>
        </div>
        <div style={{margin:'0 2px', cursor:'pointer'}}>
          <WhatsappShareButton url={`${HOST}${match.url}`}>
             <WhatsappIcon
               size={32}
             />
          </WhatsappShareButton>
        </div>
      </div>
    );
  }
}

export default withRouter(Shares);
