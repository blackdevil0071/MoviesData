import { Button, Col, Form } from "react-bootstrap";
import React, { useRef } from "react";

const AddMovies = (props) => {
  const titleRef = useRef('');
  const openingCrawlRef = useRef('');
  const releaseDateRef = useRef('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const movie = {
      title: titleRef.current.value,
      opening_crawl: openingCrawlRef.current.value,
      release_date: releaseDateRef.current.value
    };

    props.onAddMovie(movie);

    // Clear the form fields after submission
    titleRef.current.value = '';
    openingCrawlRef.current.value = '';
    releaseDateRef.current.value = '';
  };

  return (
    <Col lg={6} className="mx-auto mt-5 p-4 bg-primary text-light rounded">
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="title" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" ref={titleRef} />
        </Form.Group>

        <Form.Group controlId="openingText" className="mb-3">
          <Form.Label>Opening Crawl</Form.Label>
          <Form.Control as="textarea" rows={3} name="openingText" ref={openingCrawlRef} />
        </Form.Group>

        <Form.Group controlId="releaseDate" className="mb-3">
          <Form.Label>Release Date</Form.Label>
          <Form.Control type="date" name="releaseDate" ref={releaseDateRef} />
        </Form.Group>

        <Button variant="light" type="submit">
          Add Movie
        </Button>
      </Form>
    </Col>
  );
};

export default AddMovies;
