import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../Thunk/userThunk";

export default function Signup() {
    const dispatch = useDispatch();
    const history = useHistory()
    const token = useSelector((state) => state.Users.token);
  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target.email.value && e.target.password.value) {
        dispatch(
          loginUser({
            email: e.target.email.value,
            password: e.target.password.value,
          })
        );
        if (token) {
          history.push("/");
        }
      } else {
        alert("invlid input");
      }
  };
  return (
    <div>
      <br />
      <h1>Login Page</h1>
      <br />
      <br />
      <Container>
        <Form onSubmit={submitHandler}>
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
