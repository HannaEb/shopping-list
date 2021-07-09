import React from 'react';
import ListItemForm from '../ListItemForm/ListItemForm';

class ToggleableListItemForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.handleFormOpen = this.handleFormOpen.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormOpen() {
        this.setState({ isOpen: true });
    }

    handleFormSubmit(listItem) {
        this.props.onFormSubmit(listItem);
        this.setState({ isOpen: false })
    }

    handleFormClose() {
        this.setState({ isOpen: false })
    }

    render() {
        if (this.state.isOpen) {
            return (
                <ListItemForm 
                    onFormSubmit={this.handleFormSubmit} 
                    onFormClose={this.handleFormClose}
                />
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
