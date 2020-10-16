import React from "react";
import { v4 } from "uuid";

function Pagination(props) {
  const { currentPage, onSetPage, counts } = props;
  const [pagination, setPagination] = React.useState([]);

  const createLink = (i) => {
    return (
      <li key={v4()}>
        <a
          href={`/page_` + i}
          data-page={i}
          onClick={(e) => {
            e.preventDefault();
            onSetPage(i - 1);
          }}
        >
          {i}
        </a>
      </li>
    );
  };

  const createActiveItem = (i) => {
    return (
      <li key={v4()}>
        <span>{i}</span>
      </li>
    );
  };

  const renderPagination = (counter) => {
    const TOTAL_ELEMENTS = 10;
    const TOTAL_PAGES = counter / TOTAL_ELEMENTS;
    const paginationElements = [];

    for (let i = 0; i < TOTAL_PAGES; i++) {
      if (currentPage === i) {
        paginationElements.push(createActiveItem(i + 1));
      } else {
        paginationElements.push(createLink(i + 1));
      }
    }

    setPagination(paginationElements);
  };

  React.useEffect(() => {
    renderPagination(counts);
  }, [counts, currentPage]);

  return <ul className="pagination">{pagination}</ul>;
}

export default Pagination;
