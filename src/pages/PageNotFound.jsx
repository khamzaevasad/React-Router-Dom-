import { NavLink } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="pageNotFound-container">
      <h1>Page Not Found</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quibusdam
        sequi alias atque cumque obcaecati ad perferendis eligendi recusandae?
        Obcaecati quod quia accusantium nesciunt quae. Alias assumenda culpa eum
        pariatur autem aperiam nam perferendis sapiente a dicta deleniti
        incidunt impedit ipsa voluptatem iste ratione illum, eaque voluptas
        reprehenderit dolor deserunt.
      </p>
      <NavLink to="/">Home Page</NavLink>
    </div>
  );
}

export default PageNotFound;
