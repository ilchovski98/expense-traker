import React, { useState } from 'react';
import './CreateUser.scss';

function CreateUser(props) {
  const [state, setState] = useState({});

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async event => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch("http://localhost:8080/api/v1/clients/create", {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        "firstName": state.firstName,
        "lastName": state.lastName,
        "email": state.email,
        "password": state.password
      }),
      redirect: 'follow'
    })
      .then(response => response.text())
      .then(result => {props.handleGetData()})
      .catch(error => console.log('error', error));
  }

  return (
    <div className="create-user">
      <form className="create-user__form" onSubmit={e => {handleSubmit(e)}}>
        <div className="create-user__controls">
          <label className="create-user__label" name="firstName">First Name:</label>

          <input
            type="text"
            className="create-user__field"
            name="firstName"
            onChange={event => handleChange(event)}
          />
        </div>

        <div className="create-user__controls">
          <label className="create-user__label" name="lastName">Last Name:</label>

          <input
            type="text"
            className="create-user__field"
            name="lastName"
            onChange={event => handleChange(event)}
          />
        </div>

        <div className="create-user__controls">
          <label className="create-user__label" name="email">Email:</label>

          <input
            type="text"
            className="create-user__field"
            name="email"
            onChange={event => handleChange(event)}
          />
        </div>

        <div className="create-user__controls">
          <label className="create-user__label" name="password">Password:</label>

          <input
            type="password"
            className="create-user__field"
            name="password"
            onChange={event => handleChange(event)}
          />
        </div>

        <div className="create-user__actions">
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
