import React from 'react';
import EditableListItem from '../EditableListItem/EditableListItem';

class List extends React.Component {
    render() {
        const listItems = this.props.listItems.map(listItem => (
            <EditableListItem
                key={listItem.id} 
                id={listItem.id}
                quantity={listItem.quantity}
                unit={listItem.unit}
                product={listItem.product}
                category={listItem.category}
                onFormSubmit={this.props.onFormSubmit}
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
