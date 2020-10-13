import React from "react";
import { Link } from "react-router-dom";
function PageNotFound() {
  return (
    <div>
      <h1>Страница не найдена :(</h1>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}

export default PageNotFound;
