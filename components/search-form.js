import { Button, Card, Form, Table } from 'react-bootstrap'

export default class SearchForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            jobs: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault(); // stops refresh
        var temp = {}
        fetch('/api/?seq=' + this.state.value)
            .then(response => response.json())
            .then(data => temp=data)
            .then(data => this.setState({jobs: [...this.state.jobs, temp]}));
        console.log("submitting dna search for: " + this.state.value) 
        this.setState({"value": ""})
    }

    render() {
        return (
            <>
                <section>
                    <Card>
                        <Card.Header>
                            Enter the sequence you'd like to search for
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={async event => {this.handleSubmit(event)}}>
                                <Form.Group controlId="sequenceForm.TextArea">
                                    <Form.Control as="textarea" rows="2" value={this.state.value} onChange={this.handleChange}/>
                                </Form.Group>
                                <Button variant="outline-primary" type="submit">Search</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <br/>
                </section>

                <section>
                    <h4>Jobs</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>dna input</th>
                                <th>status</th>
                                <th>locus tag</th>
                                <th>location</th>
                                <th>protein sequence</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.jobs.map((job, index) => (
                                <tr key={index}>
                                    <td>{job.dna}</td>
                                    <td>{job.found}</td>
                                    <td>{job.locus_tag}</td>
                                    <td>{job.location}</td>
                                    <td>{job.seq}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </section>
            </>
        )
    }
}