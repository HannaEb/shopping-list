import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

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
                <ListGroup.Item>
                        {this.props.quantity}
                        {this.props.unit}
                        {this.props.product}
                        <Button className='btn-primary' size='sm' onClick={this.props.onEdit}>
                            &#x270E;
                        </Button>
                        <Button className='btn-secondary' size='sm' onClick={this.handleDelete}>
                            &#xff38; 
                        </Button>
                </ListGroup.Item>
            </div>
        )
    }
}

export default ListItem;
