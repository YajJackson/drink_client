import React, { Component } from 'react';
import Form from './components/form'
import Table from './components/table'

class App extends Component {
  render() {
    return (
      <div className="mdl-grid">
        <Form />
        <Table />
      </div>
    );
  }
}

export default App;
