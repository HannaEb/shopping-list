import React from 'react';
import './App.css';
import ToggleableListItemForm from './components/ToggleableListItemForm/ToggleableListItemForm'
import List from './components/List/List'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: [
        {
          quantity: '500',
          unit: 'Grams',
          product: 'Flour',
          category: 'Cupboard',
        },
        {
          quantity: '4',
          unit: '',
          product: 'Apples',
          category: 'Fresh'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <ToggleableListItemForm />
        <List 
          listItems={this.state.listItems}
        />
      </div>
    );
  }
}

export default App;
