import React from 'react';
import { Table } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './StockList.css';
import StockListItem from './stock/StockItem';

const StockList  = ((props) => {
    return (
        <Table responsive className="stock-table">
            <thead>
                <div className="balance">Current Balance:   ${props.balance} | usd</div>
                <tr>
                    <th>Company Name</th>
                    <th>Symbol</th>
                    <th>Price Per Share</th>
                    <th>Total Shares</th>
                    <th>Total Price</th>
                </tr>
            </thead>
            <tbody className="stock">
                {props.stocks.map((stock, index) => {
                    return (
                        <StockListItem key={index} stock={stock}/>
                    )
                })}
            </tbody>
        </Table>
    );
})


export default StockList;