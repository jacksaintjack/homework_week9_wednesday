import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

// import Artists from './artists'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: []
    };
    this.handleArtistData = this.handleArtistData.bind(this);
  }

  handleArtistData(data) {
    this.setState({artists: data.results})
  }

  componentDidMount() {
    $.ajax({
      url: 'https://api.spotify.com/v1/search?q=Nick&type=artist',
      success: this.handleArtistData
    });
  }

  render() {
    let childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {artists: this.state.unicorns})
    });
    return (
      <div>
        <header>
          <h1>Bands Bands Bands!</h1>
            <Link to="login">Login</Link>
        </header>
        {childrenWithProps}
      </div>
    )
  }
}

export default Home;
