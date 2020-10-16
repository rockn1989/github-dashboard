import React from "react";
import GithubApi from "../api/api";

import { Preloader } from "../components/index";

function CartDetail({ itemName }) {
  const gitApi = new GithubApi();
  const [state, setState] = React.useState({
    data: {},
    loading: true,
    contributions: [],
  });

  const userUrl = itemName.replace("/cart/", "");

  React.useEffect(() => {
    let contr = [];

    gitApi.getUser(userUrl).then((data) => {
      const {
        name,
        stargazers_count,
        updated_at,
        language,
        owner: { avatar_url, login, html_url },
        description,
        contributors_url,
        full_name,
      } = data;

      gitApi
        .getResource(`repos/` + full_name + `/contributors`)
        .then((results) => {
          contr = results
            .sort((a, b) => {
              return b.contributions - a.contributions;
            })
            .slice(0, 10)
            .map((el) => {
              return (
                <li>
                  <a
                    href={el.html_url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img src={el.avatar_url} alt={el.name} />
                    {el.login}
                  </a>
                </li>
              );
            });

          setState((prevState) => ({
            ...prevState,
            data: {
              name,
              stargazers_count,
              updated_at,
              language,
              owner: { avatar_url, login, html_url },
              description,
              contributors_url,
              full_name,
            },
            loading: false,
            contributions: [...contr],
          }));
        });
    });
  }, []);

  if (state.loading) {
    return <Preloader />;
  }

  if (!state.loading) {
  }

  return (
    <div className="cart-detail">
      <div className="container">
        <div className="cart-detail__inner">
          <div className="cart-detail__header flex-row flex-align-center flex-wrap">
            <div className="repos-name">
              <span className="cart-label">Repositories name:</span>
              {state.data.name}
            </div>
            <div className="rating">
              <span className="cart-label">Stars:</span>
              {state.data.stargazers_count}
            </div>
            <div className="last-commit">
              <span className="cart-label">Last commite date:</span>
              {state.data.updated_at}
            </div>
          </div>
          <div className="cart-detail__body">
            <div className="cart-detail__img">
              <img src={state.data.owner.avatar_url} alt="name" />
            </div>
            <div className="cart-detail__desc">
              <div className="cart-detail__user-name">
                <span className="cart-label">Author:</span>
                <a
                  href={state.data.owner.html_url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {state.data.owner.login}
                </a>
              </div>
              <div className="cart-label">List of language:</div>
              <ul className="item-list">
                <li>{state.data.language}</li>
              </ul>
              <div className="cart-label">Description:</div>
              <div className="cart-detail__text">{state.data.description}</div>
            </div>
          </div>
          <div className="cart-label">Contributors:</div>
          <ul className="item-list avatars">{state.contributions}</ul>
        </div>
      </div>
    </div>
  );
}

export default CartDetail;
