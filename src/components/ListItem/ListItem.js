import React from 'react';
import ListItemForm from '../ListItemForm/ListItemForm';
import Quantity from '../Quantity/Quantity';
import Unit from '../Unit/Unit';
import Product from '../Product/Product';

class ListItem extends React.Component {
    render() {
        if(this.props.formOpen) {
            return (
                <ListItemForm />
            )
        } else {
            return (
                <div>
                    <Quantity value={this.props.value} />
                    <Unit name={this.props.name} />
                    <Product name={this.props.name} />
                </div>
            )
        } 
    }
}

export default ListItem;
