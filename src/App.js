import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import GoogleMap from './components/GoogleMap/GoogleMap'

class App extends Component {



  render() {

    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', justifyContent: 'stretch' }} className="App">
        <Layout>
          <div style={{
            flex: '0 0 80%'
          }}>
            <GoogleMap />
      </div>
        </Layout>
      </div>
    );
  }
}

export default App;
