import '../../assets/styles/ArticlesError.css'
import { useRouteError, Link } from "react-router-dom";

export default function ArticlesError() {
  const error = useRouteError();

  return (
    <section className="articles-error">
      <h1>Error</h1>
      <p>{error.message}</p>
      <Link to='/'>Go back to homepage</Link>
    </section>
  );
}