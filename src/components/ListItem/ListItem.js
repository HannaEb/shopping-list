import React from 'react';

class ListItem extends React.Component {
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
            </div>
        )
    }
}

export default ListItem;
