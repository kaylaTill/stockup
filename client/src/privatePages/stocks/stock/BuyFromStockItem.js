import React from 'react';
import { Button, Form, Collapse } from 'react-bootstrap';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const BuyFromStockItem = ((props) => {
    return (
        <Collapse in={props.buyMoreOpen}>
            <Form id="buy-more-form" onSubmit={props.handleBuy}>
                <Button variant="outline-light"
                    size="sm"
                    name="decrease"
                    className="decrease"
                    onClick={props.handleShareUpdate}>
                    -</Button>
                <input
                    type="number"
                    className="share-quantity"
                    name="shares"
                    min={0}
                    max={100}
                    value={props.shares > 0 && props.shares}
                    onChange={props.handleChange}
                />
                <Button variant="outline-light"
                    size="sm" name="increase"
                    className="increase"
                    onClick={props.handleShareUpdate} >
                    +</Button>
                <Button
                    type="submit"
                    className="collapse-buy"
                    variant="outline-light"
                    size="sm" block
                >{`Buy ${props.shares > 0 ? props.shares : 0} More Shares`}</Button>
            </Form>
        </Collapse>
    );
})


export default BuyFromStockItem;