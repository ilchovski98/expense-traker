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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <CreateUser handleGetData={() => getData()}></CreateUser>
      <UsersTable handleGetData={() => getData()} data={data}></UsersTable>
    </div>
  );
}

export default UserDashboard;
