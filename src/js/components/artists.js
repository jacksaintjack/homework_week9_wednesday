import React from 'react';

import Artist from './artist';

class Artists extends React.Component {
  render() {
    let artists = this.props.artists.map( artist => {
      return (<Artist key={artist.id} name={artist.name}/>)
    });
    return (
      <div>
        <h3>Band you might like</h3>
        {artists}
      </div>
    )
  }
}

export default Artists;
