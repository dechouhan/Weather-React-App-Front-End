import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { locationCordinatesAction } from "../Redux/Actions/weatherAction";
import { loginUser } from "../Thunk/userThunk";

export default function Signup() {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target.email.value && e.target.password.value) {
      dispatch(
        loginUser({
          email: e.target.email.value,
          password: e.target.password.value,
        })
      );
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        dispatch(
          locationCordinatesAction({ latitude: latitude, longitude: longitude })
        );
      });
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
