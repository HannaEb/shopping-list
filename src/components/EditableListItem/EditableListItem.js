import React from 'react';
import ListItem from '../ListItem/ListItem';
import ListItemForm from '../ListItemForm/ListItemForm';

class EditableListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formOpen: false,
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.openForm = this.openForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }

    handleEdit() {
        this.openForm();
    }

    handleClose() {
        this.closeForm();
    }

    handleSubmit(listItem) {
        this.props.onFormSubmit(listItem);
        this.closeForm();
    }

    openForm() {
        this.setState({ formOpen: true });
    }

    closeForm() {
        this.setState({ formOpen: false });
    }

    handleSubmit

    render() {
        if (this.state.formOpen) {
            return (
                <ListItemForm 
                    id={this.props.id}
                    quantity={this.props.quantity}
                    unit={this.props.unit}
                    product={this.props.product}
                    category={this.props.category}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleClose}
                />
            )
        } else {
            return (
                <ListItem 
                    id={this.props.id}
                    quantity={this.props.quantity}
                    unit={this.props.unit}
                    product={this.props.product}
                    onEdit={this.handleEdit}
                    onDelete={this.props.onDelete}
                />
            )
        }
        
    }
}

export default EditableListItem;
