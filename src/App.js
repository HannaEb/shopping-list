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

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addListItem = this.addListItem.bind(this);
  }

  handleFormSubmit(listItem) {
      this.addListItem(listItem);
  }

  addListItem(listItem) {
    let newListItem = {
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
        <ToggleableListItemForm onFormSubmit={this.handleFormSubmit} />
        <List 
          listItems={this.state.listItems}
        />
      </div>
    );
  }
}

export default App;
