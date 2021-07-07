import React from 'react';
import EditableListItem from '../EditableListItem/EditableListItem';

class List extends React.Component {
    render() {
        return (
            <div>
                <EditableListItem 
                    quantity='500'
                    unit='Grams'
                    product='Flour'
                />
                <EditableListItem 
                    quantity='4'
                    unit='Item'
                    product='Apples'
                />
            </div>
        )
    }
}

export default List;
