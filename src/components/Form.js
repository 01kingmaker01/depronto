import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormCon() {
  const reset_value = {
    name: "",
    email: "",
    textarea: "",
    date: "",
    checkbox: false,
  };
  const [state, setState] = useState(reset_value);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Submiteed", state);

    setState(reset_value);
  };
  const onChangeHandler = ({ target }) => {
    setState((state) => ({
      ...state,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    }));
  };
  return (
    <Form className="mb-5" id="feedback" onSubmit={onSubmitHandler}>
      <h4>Feedback Form</h4>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          onChange={onChangeHandler}
          value={state.name}
          placeholder="Enter name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          onChange={onChangeHandler}
          value={state.email}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Write Message</Form.Label>
        <Form.Control
          as="textarea"
          name="textarea"
          onChange={onChangeHandler}
          rows={3}
          value={state.textarea}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          onChange={onChangeHandler}
          name="date"
          value={state.date}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onChange={onChangeHandler}
          label="Check me out"
          name="checkbox"
          value={state.checkbox}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormCon;
