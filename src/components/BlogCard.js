import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import "../styles/BlogCard.css";

const BlogCard = ({ data: { id, title, body, img } }) => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      <Card className="bg-photo" style={{ width: "18rem" }} key={id}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button className="me-2 mb-2" onClick={() => handleShow(true)}>
            Open ↗️
          </Button>
        </Card.Body>
      </Card>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
    </>
  );
};

export default BlogCard;
