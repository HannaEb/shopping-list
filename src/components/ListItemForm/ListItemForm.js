import React from 'react';

class ListItemForm extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Quantity</label>
                        <input type='number' />
                    </div>
                    <div>
                        <label>Unit</label>
                        <select>
                            <option>Item</option>
                            <option>Kilograms</option>
                            <option>Grams</option>
                        </select>
                    </div>
                    <div>
                        <label>Product</label>
                        <input type='text' />
                    </div>
                    <div>
                        <label>Catergory</label>
                        <select>
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
                    <button>
                        Add
                    </button>
                </form>
            </div>
        )
    }
}

export default ListItemForm;
