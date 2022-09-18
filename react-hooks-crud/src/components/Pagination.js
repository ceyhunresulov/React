const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  return (
    <div className="clearfix">
      <div className="hint-text">
        Showing <b>5</b> out of <b>25</b> entries
      </div>
      <ul className="pagination">
        <li
          onClick={() => setCurrentPage((pre) => (pre === 1 ? pre : pre - 1))}
          className={
            currentPage === 1 ? "page-item disabled me-3" : "page-item me-3"
          }
        >
          <a href="#!" className="page-link">
            Previous
          </a>
        </li>
        {numberOfPages.map((page) => {
          return (
            <li
              className={
                currentPage === page ? "page-item active" : "page-item"
              }
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              <a href="#" className="page-link">
                {page}
              </a>
            </li>
          );
        })}

        <li
          className={
            currentPage === numberOfPages.length
              ? "page-item disabled ms-3"
              : "page-item ms-3"
          }
          onClick={() =>
            setCurrentPage((pre) =>
              pre === numberOfPages.length ? pre : pre + 1
            )
          }
        >
          <a href="#" className="page-link">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

{
  /* 
        <li className="page-item">
          <a href="#" className="page-link">
            2
          </a>
        </li>
        <li className="page-item active">
          <a href="#" className="page-link">
            3
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link">
            4
          </a>
        </li>
        <li className="page-item">
          <a href="#" className="page-link">
            5
          </a>
        </li> */
}
