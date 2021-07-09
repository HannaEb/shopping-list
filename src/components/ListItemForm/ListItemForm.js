import React from 'react';

class ListItemForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: this.props.quantity || '',
            unit: this.props.unit || '',
            product: this.props.product || '',
            category: this.props.category || '',
        };

        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleUnitChange = this.handleUnitChange.bind(this);
        this.handleProductChange = this.handleProductChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleQuantityChange(e) {
        this.setState({ quantity: e.target.value });
    };

    handleUnitChange(e) {
        this.setState({ unit: e.target.value });
    };

    handleProductChange(e) {
        this.setState({ product: e.target.value });
    };

    handleCategoryChange(e) {
        this.setState({ category: e.target.value });
    };

    handleSubmit() {
        this.props.onFormSubmit({
            id: this.props.id,
            quantity: this.state.quantity,
            unit: this.state.unit,
            product: this.state.product,
            category: this.state.category,
        })
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Quantity</label>
                        <input 
                            type='text' 
                            value={this.state.quantity} 
                            onChange={this.handleQuantityChange}
                            />
                    </div>
                    <div>
                        <label>Unit</label>
                        <select value={this.state.unit} onChange={this.handleUnitChange}>
                            <option></option>
                            <option>kg</option>
                            <option>g</option>
                            <option>l</option>
                            <option>ml</option>
                        </select>
                    </div>
                    <div>
                        <label>Product</label>
                        <input 
                            type='text' 
                            value={this.state.product} 
                            onChange={this.handleProductChange}
                            />
                    </div>
                    <div>
                        <label>Category</label>
                        <select value={this.state.category} onChange={this.handleCategoryChange}>
                            <option>Fresh</option>
                            <option>Bakery</option>
                            <option>Cupboard</option>
                            <option>Frozen</option>
                            <option>Chilled</option>
                            <option>Drinks</option>
                            <option>Household</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <button onClick={this.handleSubmit}>
                        Confirm
                    </button>
                    <button onClick={this.props.onFormClose}>
                        Cancel
                    </button>
                </form>
            </div>
        )
    }
}

export default ListItemForm;
