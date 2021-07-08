import React from 'react';
import EditableListItem from '../EditableListItem/EditableListItem';

class List extends React.Component {
    render() {
        const listItems = this.props.listItems.map(listItem => (
            <EditableListItem 
                quantity={listItem.quantity}
                unit={listItem.unit}
                product={listItem.product}
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
