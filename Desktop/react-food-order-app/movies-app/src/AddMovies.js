import { Button, Col, Form } from "react-bootstrap";

const AddMovies = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Log the values of each form field
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
  };

  return (
    <Col lg={6} className="mx-auto mt-5 p-4 bg-primary text-light rounded">
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="title" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" />
        </Form.Group>

        <Form.Group controlId="openingText" className="mb-3">
          <Form.Label>Opening Crawl</Form.Label>
          <Form.Control as="textarea" rows={3} name="openingText" />
        </Form.Group>

        <Form.Group controlId="releaseDate" className="mb-3">
          <Form.Label>Release Date</Form.Label>
          <Form.Control type="date" name="releaseDate" />
        </Form.Group>

        <Button variant="light" type="submit">
          Add Movie
        </Button>
      </Form>
    </Col>
  );
};

export default AddMovies;
