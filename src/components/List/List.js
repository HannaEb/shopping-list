import React from 'react';
import EditableListItem from '../EditableListItem/EditableListItem';

class List extends React.Component {
    render() {
        const listItems = this.props.listItems.map(listItem => (
            <EditableListItem 
                id={listItem.id}
                quantity={listItem.quantity}
                unit={listItem.unit}
                product={listItem.product}
                onDelete={this.props.onDelete}
            />
        ));
        return (
            <div>
                {listItems}
            </div>
        )
    }
}

export default List;
