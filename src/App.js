import React from 'react';
import './App.css';
import ToggleableListItemForm from './components/ToggleableListItemForm/ToggleableListItemForm'
import List from './components/List/List'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ToggleableListItemForm />
        <List />
      </div>
    );
  }
}

export default App;
