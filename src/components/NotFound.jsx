import '../assets/styles/NotFound.css'
import { useRouteError, Link } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  return (
    <section className="not-found">
      <h1>Page not found!</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to='/'>Go back to homepage</Link>
    </section>
  );
}