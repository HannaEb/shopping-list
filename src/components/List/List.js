import React from 'react';
import EditableListItem from '../EditableListItem/EditableListItem';

class List extends React.Component {
    render() {
        const items = this.props.listItems;
        let sortedItems = [...items];
        
        sortedItems.sort((a, b) => {
            if (a.category < b.category) return -1;
            if (a.category > b.category) return 1;
            return 0;
        })

        const listItems = sortedItems.map(listItem => (
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
