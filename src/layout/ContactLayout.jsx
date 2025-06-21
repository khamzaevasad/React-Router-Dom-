import { NavLink, Outlet } from 'react-router-dom';

function ContactLayout() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sequi
        optio, tempora quibusdam, ipsam perferendis iste, consequatur eaque
        culpa minima laboriosam beatae numquam mollitia placeat obcaecati iure
        odio? Ipsum deserunt nam ullam dignissimos sapiente similique tempora
        sit enim, voluptatem quia quasi eaque facere mollitia officiis
        necessitatibus, quidem nobis quisquam. Officiis!
      </p>
      <nav>
        <NavLink to="faq">Faq</NavLink>
        <NavLink to="form">Form</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default ContactLayout;
