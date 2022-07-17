import React, { useEffect, useState } from 'react';
import UsersTable from '../UserTable/UsersTable';
import CreateUser from '../CreateUser/CreateUser';

function UserDashboard() {
  const [data, setData] = useState([]);

  const getData = async () => {
    async function fetchData() {
      const result = await fetch('http://localhost:8080/api/v1/clients').then(res => res.json());
      console.log(result);
      return result;
    }

    setData(await fetchData());
  }

  const deleteClient = async (email) => {
    const response = await fetch('http://localhost:8080/api/v1/clients/' + email, { method: 'DELETE' }).then(res => res.json());

    if (response > 0) {
      getData();
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <CreateUser handleGetData={() => getData()}></CreateUser>
      <UsersTable handleGetData={() => getData()} data={data} deleteClient={(email) => deleteClient(email)}></UsersTable>
    </div>
  );
}

export default UserDashboard;
