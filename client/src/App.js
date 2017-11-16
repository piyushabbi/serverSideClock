import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

import ServerSideClock from './ServerSideClock';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: 'http://127.0.0.1:4001'
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('seconds.update', data => this.setState({ response: data }));
  }
  
  render() {
    const { response } = this.state;
    
    return <div>
        {response ? <section>
            <ServerSideClock time={new Date(response.time)} />
            <h2>This is some static data.</h2>
          </section> : <i>Loading...</i>}
      </div>;
  }
}

export default App;