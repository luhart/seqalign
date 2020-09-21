import { Button, Form } from 'react-bootstrap'

export default class SearchForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault(); // stops refresh
        fetch('/api/?seq=' + this.state.value)
            .then(response => response.json())
            .then(data => console.log(data));
        console.log("submitting dna search for: " + this.state.value) 
        this.setState({"value": ""})
    }

    render() {
        return (
            <Form onSubmit={async e => {this.handleSubmit(e)}}>
                <Form.Group controlId="sequenceForm.TextArea">
                    <Form.Control as="textarea" rows="2" />
                </Form.Group>
                <Button variant="outline-primary" type="submit">Search</Button>
            </Form>
        )
    }
}