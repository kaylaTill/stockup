import React from 'react';
import { Form } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Search.css';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleSearch(this.state.value);
        this.clearSearch()
    }

    clearSearch() {
        this.setState({
            value: ''
        })
    }


    render() {
        return(
            <Form className="search" onSubmit={this.handleSubmit}>
                <Form.Control
                    name="value"
                    autoComplete="off"
                    placeholder="Filter By Search.."
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </Form>
        )
    }
}


export default Search;