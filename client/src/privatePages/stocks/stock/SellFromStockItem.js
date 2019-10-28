import React from 'react';
import { Button, Form, Collapse } from 'react-bootstrap';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const SellFromStockItem = ((props) => {
    return (
        <Collapse in={props.sellOpen}>
            <Form id="sell-form" onSubmit={props.handleSell}>
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
                    className="collapse-sell"
                    variant="outline-light"
                    size="sm" block
                >{`Sell ${props.shares > 0 ? props.shares : 0} Shares`}</Button>
            </Form>
        </Collapse>
    );
})


export default SellFromStockItem;