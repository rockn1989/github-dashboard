import React from "react";
import { Dashboard, Pagination } from "../components";

function Home() {
  const [state, setState] = React.useState({
    page: 0,
    cardsCount: 0,
  });

  const onSetPage = (page) => {
    setState((prevState) => ({
      ...prevState,
      page: page,
    }));
  };

  const onGetCardCount = (count) => {
    setState((prevState) => ({
      ...prevState,
      cardsCount: count,
    }));
  };

  return (
    <main className="content">
      <div className="container">
        <h1>Главная</h1>
      </div>
      <Dashboard currentPage={state.page} onGetCount={onGetCardCount} />
      <Pagination
        currentPage={state.page}
        counts={state.cardsCount}
        onSetPage={onSetPage}
      />
    </main>
  );
}
export default Home;
