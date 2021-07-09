import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ToggleableListItemForm from './components/ToggleableListItemForm/ToggleableListItemForm'
import List from './components/List/List'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: [
        {
          id: uuidv4(),
          quantity: '500',
          unit: 'g',
          product: 'Flour',
          category: 'Cupboard',
        },
        {
          id: uuidv4(),
          quantity: '4',
          unit: '',
          product: 'Apples',
          category: 'Fresh'
        }
      ]
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addListItem = this.addListItem.bind(this);
  }

  handleFormSubmit(listItem) {
      this.addListItem(listItem);
  }

  addListItem(listItem) {
    let newListItem = {
      id: uuidv4(),
      quantity: listItem.quantity,
      unit: listItem.unit,
      product: listItem.product,
      category: listItem.category,
    };

    this.setState({
      listItems: this.state.listItems.concat(newListItem),
    })
  }

  render() {
    return (
      <div className="App">
        <List 
          listItems={this.state.listItems}
        />
        <ToggleableListItemForm 
          onFormSubmit={this.handleFormSubmit} 
        />
      </div>
    );
  }
}

export default App;
