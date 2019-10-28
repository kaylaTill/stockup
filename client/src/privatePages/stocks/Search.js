import React from 'react';
import { Form, Button } from 'react-bootstrap';


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
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Control
                        name="value"
                        placeholder="Filter By Search.."
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </Form.Group>
            </Form>
        )
    }
}


export default Search;