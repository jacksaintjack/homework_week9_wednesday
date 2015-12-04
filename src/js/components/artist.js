import React from 'react';

class Artist extends React.Component {
  render() {
    return (
      <li>{this.props.artist}</li>
    )
  }
}

export default Artist;
