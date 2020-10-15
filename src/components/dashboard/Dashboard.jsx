import React from "react";
import { v4 } from "uuid";
import GithubApi from "../../api/api";

import { CartItem } from "../index";

function Dashboard() {
  const api = new GithubApi();

  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    api.getResource("repositories").then((results) => {
      if (results && results.length > 0) {
        const userName = results[0].full_name;
        console.log(userName);

        const allResults = results.map(({ full_name }) =>
          api.getUsers(full_name)
        );

        Promise.all(allResults).then((fullUserData) => {
          const shortInfoUser = fullUserData.map((user) => {
            return api._transformUserData(user);
          });

          setUsers(shortInfoUser);
        });
      }
    });
  }, []);

  return (
    <div className="dashboard-wrapper">
      <ul className="dashboard">
        {users && users.map((el) => <CartItem userData={el} id={v4} />)}
      </ul>
    </div>
  );
}

export default Dashboard;
