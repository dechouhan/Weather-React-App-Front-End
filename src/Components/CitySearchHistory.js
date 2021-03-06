import React, { useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { resetCityAction } from "../Redux/Actions/weatherAction";
import { showCitySearchHistory } from "../Thunk/weatherThunk";

export default function CitySearchHistory() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.Users.token);
  const histories = useSelector((state) => state.Weather.showCityHistory);
  useEffect(() => {
    dispatch(resetCityAction());
    dispatch(showCitySearchHistory(token));
  }, [dispatch, token]);

  const history = histories.map((record) => {
    return (
      <tr key={record._id}>
        <td>{record.date}</td>
        <td>{record.time}</td>
        <td>{record.city}</td>
      </tr>
    );
  });
  return (
    <div>
      <h1>History Page</h1>
      <br />
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{history}</tbody>
        </Table>
      </Container>
    </div>
  );
}
