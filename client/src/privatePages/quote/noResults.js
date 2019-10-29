import React from 'react';
import { Button, Collapse, Form, Table } from 'react-bootstrap';

const BuyFromQuote = ((props) => {
    return (
        <div>
            <Collapse id="buy-stock" in={props.open}>
                <Form onSubmit={props.handleBuy}>
                    <div>
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
                    </div>
                    <Button
                        type="submit"
                        className="submit-buy"
                        variant="outline-light"
                        size="sm" block
                    >
                        {`Buy ${props.shares > 0 ? props.shares : 0} shares of ${props.symbol} stock`}
                    </Button>
                </Form>
            </Collapse>
        </div>
    );

})

export default BuyFromQuote;