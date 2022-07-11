import React, { useState } from 'react';

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
      <form onSubmit={e => {handleSubmit(e)}}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            onChange={event => handleChange(event)}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            onChange={event => handleChange(event)}
          />
        </label>

        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={event => handleChange(event)}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={event => handleChange(event)}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CreateUser;
