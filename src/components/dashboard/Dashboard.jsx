import React from "react";
import { v4 } from "uuid";
import GithubApi from "../../api/api";

import { CartItem, Preloader } from "../index";

function Dashboard({ currentPage, onGetCount }) {
  const api = new GithubApi();

  const [state, setState] = React.useState({ cardsList: [], loading: true });

  React.useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      loading: true,
    }));

    api.getResource("repositories").then((results) => {
      if (results && results.length > 0) {
        const allResults = results.map(({ full_name }) =>
          api.getUsers(full_name)
        );

        Promise.all(allResults)
          .then((fullUserData) => {
            const shortInfoUser = fullUserData.map((user) => {
              return api._transformUserData(user);
            });

            return shortInfoUser;
          })
          .then((shortInfoUser) => {
            const copyData = [...shortInfoUser];
            copyData.sort((user1, user2) => {
              return user2.stars - user1.stars;
            });

            const shotCopyData = copyData.slice(
              currentPage * 10,
              (currentPage + 1) * 10
            );

            onGetCount(copyData.length);

            setState((prevState) => ({
              ...prevState,
              cardsList: shotCopyData,
              loading: false,
            }));
          });
      }
    });
  }, [currentPage]);

  const cardList = state.cardsList.map((el) => (
    <CartItem userData={el} id={v4} />
  ));

  return (
    <div className="dashboard-wrapper">
      <ul className="dashboard">{state.loading ? <Preloader /> : cardList}</ul>
    </div>
  );
}

export default Dashboard;

/*     api.getResource("repositories").then((results) => {
      if (results && results.length > 0) {
        const allResults = results.map(({ full_name }) =>
          api.getUsers(full_name)
        );

        Promise.all(allResults)
          .then((fullUserData) => {
            const shortInfoUser = fullUserData.map((user) => {
              return api._transformUserData(user);
            });
            return shortInfoUser;
          })
          .then((shortInfoUser) => {
            const copyData = [...shortInfoUser];
            copyData.sort((user1, user2) => {
              return user2.stars - user1.stars;
            });

            const shotCopyData = copyData.slice(
              currentPage * 10,
              (currentPage + 1) * 10
            );

            setUsers(shotCopyData);
            setLoading(true);
          });
      }
    }); */
