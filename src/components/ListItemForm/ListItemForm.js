import React from 'react';
import {Container, Form, Row, Col, Button } from 'react-bootstrap';

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
                <Container>
                <Form>
                    <Form.Group as={Row} controlId='formQuantity'>
                        <Form.Label column sm={2}>Quantity</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type='text' 
                                value={this.state.quantity} 
                                onChange={this.handleQuantityChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId='formUnit'>
                        <Form.Label column sm={2}>Unit</Form.Label>
                        <Col sm={10}>
                            <Form.Control as='select' value={this.state.unit} onChange={this.handleUnitChange}>
                                <option></option>
                                <option>kg</option>
                                <option>g</option>
                                <option>l</option>
                                <option>ml</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId='formProduct'>
                        <Form.Label column sm={2}>Product</Form.Label>
                        <Col sm={10}>
                            <Form.Control 
                                type='text' 
                                value={this.state.product} 
                                onChange={this.handleProductChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId='formCategory'>
                        <Form.Label column sm={2}>Category</Form.Label>
                        <Col sm={10}>
                            <Form.Control as='select' value={this.state.category} onChange={this.handleCategoryChange}>
                                <option>Fresh</option>
                                <option>Bakery</option>
                                <option>Cupboard</option>
                                <option>Frozen</option>
                                <option>Chilled</option>
                                <option>Drinks</option>
                                <option>Household</option>
                                <option>Other</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Button type='button' onClick={this.handleSubmit}>
                        Confirm
                    </Button>
                    <Button type='submit' onClick={this.props.onFormClose}>
                        Cancel
                    </Button>
                </Form>
                </Container>
            </div>
        )
    }
}

export default ListItemForm;
