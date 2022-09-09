import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import "../styles/BlogCard.css";

const BlogCard = ({ img, data: { id, title, body } }) => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  return (
    <>
      <Card className="bg-photo " style={{ width: "18rem" }} key={id}>
        {/* <Card.Img variant="top" src={img} /> */}
        <Card.Title id="title">{title}</Card.Title>
        <div className="ver_mas text-center">
          <span
            id="click"
            style={{ cursor: "pointer" }}
            className="lnr lnr-eye"
            onClick={() => handleShow(true)}>
            Open ↗️
          </span>
        </div>
        <img src={img} alt="" />
      </Card>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
      </Modal>
    </>
  );
};

export default BlogCard;
