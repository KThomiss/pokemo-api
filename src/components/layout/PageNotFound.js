import { Link } from "react-router-dom";
import Heading from "./Heading";
export default function PageNotFound() {
  return (
    <section className="page-not-fount-container">
      <Heading title="There is nothing here." />
      <Link to="/" className="cta">
        Back home
      </Link>
    </section>
  );
}
