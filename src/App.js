import React from 'react';
import Content from './components/Content';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Content text="Hola mundo!" button="Cambia de color el texto"/>
      </React.Fragment>
    );
  }
}

export default App;
