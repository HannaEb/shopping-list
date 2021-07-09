import React from 'react';
import ListItem from '../ListItem/ListItem';

class EditableListItem extends React.Component {
    render() {
        return (
            <ListItem 
                id={this.props.id}
                quantity={this.props.quantity}
                unit={this.props.unit}
                product={this.props.product}
            />
        )
    }
}

export default EditableListItem;
