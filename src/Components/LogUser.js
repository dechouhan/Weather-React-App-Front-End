import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetCityAction } from "../Redux/Actions/weatherAction";
import { showLogUser } from "../Thunk/userThunk";

export default function LogUser() {
  const dispatch = useDispatch();
  const logs = useSelector((state) => state.Users.loglist);
  const token = useSelector((state) => state.Users.token);
  useEffect(() => {
    dispatch(resetCityAction());
    dispatch(showLogUser(token));
  }, [dispatch, token]);

  const log = logs.map((record) => {
    return (
      <tr key={record._id}>
        <td>{record.date}</td>
        <td>{record.time}</td>
        <td>{record.email}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Log History Page</h1>
      <br />
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{log}</tbody>
        </Table>
      </Container>
    </div>
  );
}
