import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signupUser } from "../Thunk/userThunk";

export default function Signup() {
  const dispatch = useDispatch();
  const history = useHistory()
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      e.target.names.value &&
      e.target.password.value &&
      e.target.email.value
    ) {
      dispatch(
        signupUser({
          name: e.target.names.value,
          password: e.target.password.value,
          email: e.target.email.value,
        })
      );
      history.push("/login")
    }
  };
  return (
    <div>
      <br />
      <h1>Signup Page</h1>
      <br />
      <br />
      <Container>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="names" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
