import React from 'react';

class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.onDelete(this.props.id)
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.quantity}
                </div>
                <div>
                    {this.props.unit}
                </div>
                <div>
                    {this.props.product}
                </div>
                <button onClick={this.props.onEdit}>
                    Edit 
                </button>
                <button onClick={this.handleDelete}>
                    Delete 
                </button>
            </div>
        )
    }
}

export default ListItem;
