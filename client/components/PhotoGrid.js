import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo'

const Single = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {
          this.props.posts.map( (a,i) => {
            return (<Photo {...this.props} key={i} i={i} post={a} />);
          })
        }
      </div>
    )
  }
});

export default Single;