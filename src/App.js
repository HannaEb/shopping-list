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

    this.handleCreateFormSubmit = this.handleCreateFormSubmit.bind(this);
    this.addListItem = this.addListItem.bind(this);
    this.handleEditFormSubmit = this.handleEditFormSubmit.bind(this);
    this.updateListItem = this.updateListItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteListItem = this.deleteListItem.bind(this);
  }

  handleCreateFormSubmit(listItem) {
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

  handleEditFormSubmit(item) {
    this.updateListItem(item);
  }

  updateListItem(item) {
    this.setState({ 
      listItems: this.state.listItems.map(listItem => {
        if (listItem.id === item.id) {
          return Object.assign({}, listItem, {
            quantity: item.quantity,
            unit: item.unit,
            product: item.product,
            category: item.category,
          });
        } else {
          return listItem;
        }
      })
    })
  }

  handleDelete(listItemId) {
    this.deleteListItem(listItemId);
  }

  deleteListItem(listItemId) {
    this.setState({
      listItems: this.state.listItems.filter(listItem => listItemId !== listItem.id)
    })
  }

  render() {
    return (
      <div className="App">
        <List 
          listItems={this.state.listItems}
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
          onFormSubmit={this.handleEditFormSubmit}
        />
        <ToggleableListItemForm 
          onFormSubmit={this.handleCreateFormSubmit} 
        />
      </div>
    );
  }
}

export default App;
