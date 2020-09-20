import { Button, Form } from 'react-bootstrap'

export default function SearchForm() {
    return (
        <>
            <Form
                onSubmit={
                    async e => {
                        e.preventDefault(); // stops refresh
                        console.log("submitting dna search")
                    }
                }
            >
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows="2" />
                </Form.Group>
                <Button variant="outline-primary" type="submit">Search</Button>
            </Form>
        </>
    )
}