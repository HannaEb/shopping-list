import React from 'react';
import ListItemForm from '../ListItemForm/ListItemForm';

class ToggleableListItemForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.handleFormOpen = this.handleFormOpen.bind(this);
    }

    handleFormOpen() {
        this.setState({ isOpen: true });
    }

    render() {
        if (this.state.isOpen) {
            return (
                <ListItemForm />
            )
        } else {
            return (
                <button onClick={this.handleFormOpen}>
                    Add
                </button>
             )
        }
    }
}

export default ToggleableListItemForm;
