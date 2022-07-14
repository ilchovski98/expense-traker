function UsersTable(props) {

  return (
    <div className="users-table">
      <div className="users-table__head">
        <button className="btn" onClick={() => {props.handleGetData()}}>Get All Users</button>
      </div>

      <table className="users-table__body">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {props.data.length ? props.data.map((el, index) => {
            return (
              <tr key={index}>
                <td>{el.client_id}</td>
                <td>{el.firstName}</td>
                <td>{el.lastName}</td>
                <td>{el.email}</td>
              </tr>
            );
          }) : (
            <tr>
              <td>Empty</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
